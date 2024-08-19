"use client";

import Image from "next/image";
import React, { FormEvent, useEffect, useState } from "react";
import styles from "./header.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { Box, Circle, IconButton, useDisclosure } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaUser } from "react-icons/fa";
import { COLORS } from "../../theme";
import RegisterForm from "../../components/form/RegisterForm";
import { User } from "../../interface";
import CartMenu from "../../components/cart/CartMenu";

const Header = ({ refreshHeader }: { refreshHeader?: boolean }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ refreshCard, setRefreshCard ] = useState<boolean>(false);
  const {
    isOpen: isRegisterModalOpen,
    onOpen: onRegisterModalOpen,
    onClose: onRegisterModalClose,
  } = useDisclosure();
  const {
    isOpen: isCartMenuOpen,
    onOpen: onCartMenuOpen,
    onClose: onCartMenuClose,
  } = useDisclosure();
  const [user, setUser] = useState<User>({
    id: "",
    name: "",
    email: "",
    password: "",
    games: [],
    wishlist: [],
  });
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isInputFocus, setIsInputFocus] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [activeView, setActiveView] = useState<"cart" | "wishlist">("cart");
  const searchParams = useSearchParams();
  const router = useRouter();

  const fetchUser = () => {
    const isUserLoggedIn = JSON.parse(
      localStorage.getItem("isLoggedIn") || '[false, ""]'
    );
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const currentUser = users.find(
      (user: any) => user.id === isUserLoggedIn[1]
    );

    if (currentUser) {
      setUser(currentUser);
      setIsLoggedIn(isUserLoggedIn[0]);
      // console.log("🚀 ~ currentUser:", currentUser);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [isOpen, refreshHeader, refreshCard]);

  const handleSearchFocus = () => {
    setIsInputFocus(true);
  };

  const handleSearchBlur = () => {
    setIsInputFocus(false);
  };

  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputValue) return;
    console.log("Search");
    const searchParams = new URLSearchParams({ search: inputValue });

    router.push("/search?" + searchParams.toString());
  };

  useEffect(
    () => setInputValue(searchParams.get("search") || ""),
    [searchParams]
  );

  return (
    <Box as="header" pt="25px">
      <div className="wrapper">
        <div className={styles.header__wrapper}>
          <Link href="/">
            <Image
              className={styles.logo}
              src="/logo.svg"
              alt="Logo"
              width={98}
              height={40}
            />
          </Link>

          <form className={styles.header__search} onSubmit={handleSearch}>
            <motion.input
              className={styles.search__input}
              type="text"
              placeholder="Search for..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              animate={{ width: isInputFocus ? "80%" : "50%" }}
              transition={{ ease: [0.34, 1.56, 0.64, 1], duration: 0.3 }}
              onBlur={handleSearchBlur}
              onFocus={handleSearchFocus}
            />

            <IconButton
              className={styles.search__btn}
              aria-label="Search"
              icon={<IoSearchOutline size="22px" color="#fff" />}
            />
          </form>

          {isLoggedIn ? (
            <div className={styles.header__cart}>
              <Box
                className={styles.wishlist}
                onClick={() => {
                  setActiveView("wishlist");
                  onCartMenuOpen();
                }}
              >
                <Image
                  src={"/icons/medal-star-icon.svg"}
                  alt="Wishlist"
                  width={22}
                  height={22}
                />
                <p className={styles.header__cart_count}>
                  {user.wishlist.length}
                </p>
              </Box>
              <div className={styles.header__cart_line}></div>
              <Box
                className={styles.cart}
                onClick={() => {
                  setActiveView("cart"); 
                  onCartMenuOpen();
                }}
              >
                <Image
                  src={"/icons/bag-icon.svg"}
                  alt="Cart"
                  width={22}
                  height={22}
                />
                <p className={styles.header__cart_count}>{user.games.length}</p>
              </Box>
            </div>
          ) : (
            <Circle
              size="40px"
              bg={COLORS.darkLight}
              cursor="pointer"
              display="flex"
              alignItems="center"
              justifyContent="center"
              onClick={onRegisterModalOpen}
            >
              <FaUser size="20px" />
            </Circle>
          )}

          {isRegisterModalOpen && (
            <RegisterForm
              onClose={onRegisterModalClose}
              isOpen={isRegisterModalOpen}
            />
          )}
          {isCartMenuOpen && (
            <CartMenu
              onClose={onCartMenuClose}
              isOpen={isCartMenuOpen}
              user={user}
              activeView={activeView}
              setActiveView={setActiveView}
              refreshCard={refreshCard}
              setRefreshCard={setRefreshCard}
            />
          )}
        </div>
      </div>
    </Box>
  );
};

export default Header;

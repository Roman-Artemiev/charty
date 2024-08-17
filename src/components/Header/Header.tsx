"use client";

import Image from "next/image";
import React, { FormEvent, useEffect, useState } from "react";
import styles from "./header.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import {
  Box,
  Circle,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaUser } from "react-icons/fa";
import { COLORS } from "@/theme";
import RegisterForm from "@/components/form/RegisterForm";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isInputFocus, setIsInputFocus] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const searchParams = useSearchParams();
  const router = useRouter();

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

          {/* <div className={styles.header__cart}>
                <div className={styles.wishlist}>
                    <Image src={'/icons/medal-star-icon.svg'} alt='Wishlist' width={22} height={22}/>
                    <p className={styles.header__cart_count}>23</p>
                </div>
                <div className={styles.header__cart_line}></div>
                <div className={styles.cart}>
                    <Image src={'/icons/bag-icon.svg'} alt='Cart' width={22} height={22}/>
                    <p className={styles.header__cart_count}>4</p>
                </div>
            </div> */}
          <Circle
            size="40px"
            bg={COLORS.darkLight}
            cursor="pointer"
            display="flex"
            alignItems="center"
            justifyContent="center"
            onClick={onOpen}
          >
            <FaUser size="20px" />
          </Circle>

          {isOpen && (
            <RegisterForm onClose={onClose} onOpen={onOpen} isOpen={isOpen} />
          )}
        </div>
      </div>
    </Box>
  );
};

export default Header;

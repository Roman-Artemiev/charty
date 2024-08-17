"use client";

import Image from "next/image";
import React, { FormEvent, useEffect, useState } from "react";
import styles from "./header.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import {
  Box,
  Button,
  Circle,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaUser } from "react-icons/fa";
import { COLORS, TRANSITIONS } from "@/theme";
import { FaGoogle } from "react-icons/fa";

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
            <Modal onClose={onClose} isOpen={true} isCentered>
              <ModalOverlay bg={`rgba(15, 16, 17, 0.3)`} />

              <ModalContent
                bg={COLORS.dark}
                borderRadius="10px"
                border="1px solid"
                borderColor={COLORS.darkSoft}
                p={6}
              >
                <ModalCloseButton />

                <ModalBody p={0}>
                  <Text
                    textAlign="center"
                    fontSize="24px"
                    fontWeight="bold"
                    mb={10}
                  >
                    Sign up
                  </Text>

                  <Stack spacing="10px" mb="24px">
                    <Input
                      placeholder="Name"
                      h="42px"
                      type="name"
                      bg={COLORS.darkLight}
                      color={COLORS.white}
                      _placeholder={{ color: COLORS.darkSoft }}
                      border="none"
                      _focus={{
                        outline: "none",
                        border: "none",
                        boxShadow: "none",
                      }}
                    />
                    <Input
                      placeholder="Email"
                      h="42px"
                      type="email"
                      bg={COLORS.darkLight}
                      color={COLORS.white}
                      _placeholder={{ color: COLORS.darkSoft }}
                      border="none"
                      _focus={{
                        outline: "none",
                        border: "none",
                        boxShadow: "none",
                      }}
                    />
                    <Input
                      placeholder="Password"
                      h="42px"
                      type="text"
                      bg={COLORS.darkLight}
                      color={COLORS.white}
                      _placeholder={{ color: COLORS.darkSoft }}
                      border="none"
                      _focus={{
                        outline: "none",
                        border: "none",
                        boxShadow: "none",
                      }}
                    />
                  </Stack>

                  <Button
                    mb="10px"
                    bg={COLORS.darkSoft}
                    h="42px"
                    color={COLORS.white}
                    w="100%"
                    fontSize="18px"
                    transition={TRANSITIONS.mainTransition}
                    _hover={{ bg: COLORS.darkLight, color: COLORS.gray }}
                  >
                    Sign up
                  </Button>
                  <Text mb="60px" cursor="pointer" fontSize="14px">
                    Already have a account?{" "}
                    <Box
                      as="span"
                      textDecoration="underline"
                      transition={TRANSITIONS.mainTransition}
                      _hover={{ color: COLORS.gray }}
                    >
                      Sign in !
                    </Box>
                  </Text>

                  <Button
                    bg={COLORS.darkSoft}
                    h="42px"
                    color={COLORS.white}
                    w="100%"
                    fontSize="18px"
                    transition={TRANSITIONS.mainTransition}
                    _hover={{ bg: COLORS.darkLight, color: COLORS.gray }}
                  >
                    <FaGoogle />
                    <Box as="span" ml="10px">
                      Google
                    </Box>
                  </Button>
                </ModalBody>
              </ModalContent>
            </Modal>
          )}
        </div>
      </div>
    </Box>
  );
};

export default Header;

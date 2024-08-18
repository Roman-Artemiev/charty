import {
  Text,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalBody,
  Button,
  Flex,
  Image,
  Box,
  Center,
  Stack,
  Link,
  ModalCloseButton,
} from "@chakra-ui/react";
import { COLORS, TRANSITIONS } from "@/theme";
import React, { useState } from "react";
import { User } from "@/interface";
import { IoClose } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

const CartMenu = ({
  isOpen,
  onClose,
  user,
  activeView,
  setActiveView,
  refreshCard,
  setRefreshCard,
}: {
  isOpen: boolean;
  onClose: () => void;
  user: User;
  activeView: "cart" | "wishlist";
  setActiveView: (view: "cart" | "wishlist") => void;
  refreshCard: boolean;
  setRefreshCard: (refresh: boolean) => void;
}) => {
  console.log("🚀 ~ USER", user);

  const totalSum = () => {
    let sum = 0;
    const items = activeView === "cart" ? user.games : user.wishlist;
    if(items.length === 0) return sum;

    items.forEach((item) => {
      sum += Number(item.price);
    });
    return sum.toFixed(2);
  };

  const handleDelete = (id: number) => {
    const data = activeView === "cart" ? user.games : user.wishlist;

    const updatedData = data.filter((game) => game.id !== id);
    const updatedUser = activeView === "cart"
    ? { ...user, games: updatedData }
    : { ...user, wishlist: updatedData };
    console.log("🚀 ~ updatedUser", updatedData);

    const users = JSON.parse(localStorage.getItem("users") || '[]');
    const updatedUsers = users.map((existingUser: User) =>
      existingUser.id === updatedUser.id ? updatedUser : existingUser
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setRefreshCard(!refreshCard);
  }

  const handleCheckout = () => {
    alert("This is not real gameshop website, you can't buy anything here. This is just a demo project.");
  }

  return (
    <>
      {isOpen && (
        <Modal onClose={onClose} isOpen={true}>
          <ModalOverlay bg={COLORS.modalOverlay} />

          <ModalContent
            bg={COLORS.dark}
            p="0"
            my={0}
            h='100%'
            containerProps={{ justifyContent: 'flex-end', margin: '0px', padding: '0px' }}
            sx={{
              'section': {margin: '0px', padding: '0px'},
            }}
          >
            <ModalHeader
              display="flex"
              pb={0}
              mb='30px'
              alignItems="center"
              justifyContent="space-between"
            >
              <Text fontSize="24px" fontWeight="700" color={COLORS.white}>
                {(activeView === "cart" ? user?.games : user?.wishlist).length} games
              </Text>
              <ModalCloseButton />
              {/* <Text p="6px" fontSize="16px" color={COLORS.gray} cursor='pointer' transition={TRANSITIONS.mainTransition} _hover={{color: COLORS.darkSoft}}>
                clear
              </Text> */}
            </ModalHeader>
            <ModalBody py={0} p={0} bg={COLORS.dark}>
              <Flex h='calc(100vh - 80px)' minH='500px' flexDirection='column' justifyContent='space-between' rowGap='30px'>
                <Flex px='6' columnGap='10px' justifyContent='center'>
                  <Button onClick={() => setActiveView("cart")} h='40px' w='120px' color={activeView === "cart" ? COLORS.white : COLORS.darkSoft} bg={COLORS.darkLight} transition={TRANSITIONS.mainTransition} _hover={{bg: COLORS.darkSoft}}>
                    <Image src={activeView === "cart" ? "/icons/bag-icon.svg" : "/icons/bag-icon-dark.svg"} />
                    <Box as='span' ml='10px'>Cart</Box>
                  </Button>

                  <Button onClick={() => setActiveView("wishlist")} h='40px' w='120px' color={activeView !== "cart" ? COLORS.white : COLORS.darkSoft} bg={COLORS.darkLight}  transition={TRANSITIONS.mainTransition} _hover={{bg: COLORS.darkSoft}}>
                    <Image src={activeView !== "cart" ? "/icons/medal-star-icon.svg" : "/icons/medal-star-icon-dark.svg"} />
                    <Box as='span' ml='10px' >Wishlist</Box>
                  </Button>
                </Flex>

                <Stack h='calc(100%)' overflow='auto' px='6' spacing='10px'                 
                  sx={{
                    "::-webkit-scrollbar": {
                      width: "6px",
                      height: "auto",
                    },
                    "::-webkit-scrollbar-track": {
                      background: COLORS.blackLight,
                      borderRadius: "10px",
                    },
                    "::-webkit-scrollbar-thumb": {
                      background: COLORS.blue,
                      borderRadius: "10px",
                    },
                    "::-webkit-scrollbar-button": {
                      display: "none",
                    },
                    "::-webkit-scrollbar-thumb:hover": {
                      background: COLORS.blueHover,
                    },
                  }}>
                  {(activeView === "cart" ? user?.games : user?.wishlist).map((item) => (
                    <Flex _hover={{textDecoration: 'none'}} key={item.id} p="10px 15px" borderRadius='10px' justifyContent='space-between' alignItems='center' bg={COLORS.darkLight} columnGap='15px'>
                      <Text as={Link} href={`/catalog/${item.slug}`} _hover={{textDecoration: 'none'}} color={COLORS.gray} fontSize='md' fontWeight='600' noOfLines={1}>{item.name}</Text>

                      <Flex columnGap='10px' alignItems='center' w='auto'>
                        <Text color={COLORS.gray} fontWeight='600'>${item.price}</Text>
                        <Center onClick={() => handleDelete(item.id)} cursor='pointer' bg={COLORS.darkSoft} w='30px' h='30px' borderRadius='50%'>
                          <IoClose size='16px' color={COLORS.white} />
                        </Center>
                      </Flex>
                    </Flex>
                  ))}


                  {activeView === "cart" && user?.games.length === 0 ? (
                    <Text textAlign='center'>No games in {activeView}</Text>
                  ) : <></>}

                  {activeView === "wishlist" && user?.wishlist.length === 0 ? (
                    <Text textAlign='center'>No games in {activeView}</Text>
                  ) : <></>}
                </Stack>


                <Flex p='24px' justifyContent='space-between' bg={COLORS.darkLight} alignItems='center'>
                  <Text fontWeight='600' fontSize='md' color={COLORS.gray}>
                    Total: ${totalSum()}
                  </Text>
                  
                  <Flex onClick={handleCheckout} cursor='pointer' columnGap='15px' alignItems='center' fontWeight='700' fontSize='20px' transition={TRANSITIONS.mainTransition} _hover={{color: COLORS.gray}}>
                    Checkout
                    <FaArrowRightLong />
                  </Flex>
                </Flex>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default CartMenu;

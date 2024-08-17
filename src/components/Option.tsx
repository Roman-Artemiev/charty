import React from "react";
import styles from "./option.module.scss";
import Image from "next/image";
import { Box, Center, Flex, Link, Text } from "@chakra-ui/react";
import { COLORS, TRANSITIONS } from "@/theme";

const Option = ({
  isSelected = false,
  pathToIcon,
  text,
  href
}: {
  isSelected?: boolean;
  pathToIcon: string;
  text: string;
  href?: string;
}) => {
  return (
    <Flex
      as={Link}
      href={href}
      py={"6px"}
      w={{base: '100%', sm: "260px"}}
      alignItems={"center"}
      columnGap={"15px"}
      cursor={"pointer"}
      borderRadius={'5px'}
      bg={isSelected ? COLORS.dark : 'transparent'}
      pl={isSelected ? '10px' : '0'}
      transition={TRANSITIONS.mainTransition}
      _hover={{ transition: TRANSITIONS.mainTransition, bgColor: COLORS.dark, pl: '10px', textDecoration: 'none' }}
    >
      <Center
        w={"32px"}
        h={"32px"}
        bgColor={COLORS.darkLight}
        borderRadius={"5px"}
      >
        <Image src={pathToIcon} width={24} height={24} alt={text} />
      </Center>

      <Text fontSize={{base: '18px', sm: "20px"}} fontWeight={"600"} color={COLORS.white}>
        {text}
      </Text>
    </Flex>
  );
};

export default Option;

import React from "react";
import styles from "./option.module.scss";
import Image from "next/image";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { COLORS, TRANSITIONS } from "@/theme";

const Option = ({
  isSelected = false,
  pathToIcon,
  text,
}: {
  isSelected?: boolean;
  pathToIcon: string;
  text: string;
}) => {
  return (
    <Flex
      py={"6px"}
      w={"260px"}
      alignItems={"center"}
      columnGap={"15px"}
      cursor={"pointer"}
      borderRadius={'5px'}
      bg={isSelected ? COLORS.dark : 'transparent'}
      pl={isSelected ? '10px' : '0'}
      transition={TRANSITIONS.mainTransition}
      _hover={{ transition: TRANSITIONS.mainTransition, bgColor: COLORS.dark, pl: '10px' }}
    >
      <Center
        w={"32px"}
        h={"32px"}
        bgColor={COLORS.darkLight}
        borderRadius={"5px"}
      >
        <Image src={pathToIcon} width={24} height={24} alt={text} />
      </Center>

      <Text fontSize={"20px"} fontWeight={"600"} color={COLORS.white}>
        {text}
      </Text>
    </Flex>
  );
};

export default Option;

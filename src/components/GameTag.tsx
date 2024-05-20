import React from "react";
import styles from "./game-tag.module.scss";
import Image from "next/image";
import { Center, Text } from "@chakra-ui/react";
import { COLORS, TRANSITIONS } from "@/theme";

const GameTag = ({
  pathToIcon,
  text,
}: {
  pathToIcon: string;
  text: string;
}) => {
  return (
    // <div className={styles.game_tag}>
    //     <Image src={pathToIcon} width={32} height={32} alt="Icon"/>
    //     <span>{text}</span>
    // </div>

    <Center
      p={"9px 30px"}
      color={COLORS.white}
      fontSize={"20px"}
      fontWeight={600}
      bgColor={COLORS.darkLight}
      borderRadius={"10px"}
      cursor={"pointer"}
      justifyContent={"center"}
      alignItems={"center"}
      columnGap={"15px"}
      transition={TRANSITIONS.mainTransition}
      transform={"translateY(0)"}
      _hover={{
        transition: TRANSITIONS.mainTransition,
        bgColor: COLORS.dark,
        transform: "translateY(-5px)",
        img: {
          transition: "inherit",
          opacity: 0.8,
        },
        p: {
          transition: "inherit",
          opacity: 0.8,
        },
      }}
    >
      <Image src={pathToIcon} width={32} height={32} alt="Icon" />
      <Text>{text}</Text>
    </Center>
  );
};

export default GameTag;

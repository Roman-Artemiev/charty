import React from "react";
import Image from "next/image";
import { Flex, Tooltip } from "@chakra-ui/react";
import { COLORS, TRANSITIONS } from "@/theme";

import { MouseEventHandler } from "react";

const FooterBtn = ({
  pathToIcon,
  clue,
  alt,
  width = "44px",
  height = "44px",
  onClick,
}: {
  pathToIcon: string;
  clue?: string;
  alt: string;
  width?: string;
  height?: string;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}) => {
  return (
    <Tooltip
      label={alt}
      color={COLORS.white}
      aria-label={alt}
      bg={COLORS.darkLight}
      placement="bottom"
     
    >
      <Flex
        alignItems="center"
        cursor="pointer"
        justifyContent="center"
        w={width}
        h={height}
        bgColor={COLORS.darkLight}
        transition={TRANSITIONS.mainTransition}
        _hover={{
          transition: TRANSITIONS.mainTransition,
          bgColor: COLORS.darkSoft,
          transform: "translateY(-5px)",
        }}
        borderRadius={5}
        onClick={onClick}
      >
        <Image src={pathToIcon} width={24} height={24} alt={alt} />
      </Flex>
    </Tooltip>
  );
};

export default FooterBtn;

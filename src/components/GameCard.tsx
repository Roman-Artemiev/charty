"use client";

import React, { useState } from "react";
import { GameCardProps } from "@/types";
import Image from "next/image";
import getPlatformIcons from "@/utils/platform/getPlatformsIcon";
import getPlatformsList from "@/utils/platform/getPlatformsList";
import { Box, Flex, Text, Tooltip } from "@chakra-ui/react";
import { COLORS, TRANSITIONS } from "@/theme";


const GameCard = ({ name, src, price, platforms, width = '434px', height = '240px', isCustom = false, isFirst = false }: GameCardProps) => {
  const platformsList = getPlatformsList(platforms);
  const platformsIcon = getPlatformIcons(platformsList)?.sort();

  const [isHovered, setIsHovered] = useState<boolean>(false);


  return (
    <Flex
      position="relative"
      borderRadius="10px"
      w={isCustom ? '100%' : width}
      h={isCustom ? '100%' : height}
      _first={isCustom ? { gridRowStart: 1, gridRowEnd: 4, gridRow: '1 / 5'} : {}}
      bgColor={COLORS.dark}
      bgImage={`linear-gradient(180deg, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.8) 100%), url(${src})`}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPos="center"
      alignItems="end"
      overflow="hidden"
      transition={TRANSITIONS.mainTransition}
      cursor="pointer"

      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Flex
        w="100%"
        p={isFirst ? "3%" : "15px"}
        justifyContent="space-between" alignItems="end"
        opacity={isHovered ? "1" : "0.8"}
        fontSize={isFirst ? "36px" : "14px"} color={COLORS.white}
        transition={TRANSITIONS.mainTransition}
      >

        <Box transition={TRANSITIONS.mainTransition} transform={isHovered ? "translateY(0px)" : "translateY(25px)"}>
          <Text color={COLORS.white} fontWeight="800" mb="10px" >
            {name}
          </Text>

          <Flex gap="5px" transition={TRANSITIONS.mainTransition} mt='10px' transform={isHovered ? "translateY(0px)" : "translateY(10px)"} opacity={isHovered ? '1' : '0'}>
            {platformsIcon && platformsIcon.map((platform: any, index: number) => (
              <Tooltip key={index} bg={COLORS.darkLight} label={platform === 'apple' ? "apple / macOS" : platform} aria-label="A tooltip">
                <Image
                  src={`/icons/platforms/${platform}.svg`}
                  width={14}
                  height={14}
                  alt={platform}
                />
              </Tooltip>
            ))}


          </Flex>
        </Box>

        <Text color={COLORS.white} fontWeight="700" transition={TRANSITIONS.mainTransition} zIndex="3" >
          ${price}
        </Text>
      </Flex>
    </Flex>
  );
};

export default GameCard;

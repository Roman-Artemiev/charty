"use client";

import React, { useState } from "react";
import { GamePreviewCardProps } from "@/interface";
import Image from "next/image";
import getPlatformsIcon from "@/utils/platform/getPlatformsIcon";
import getPlatformsList from "@/utils/platform/getPlatformsList";
import { Box, Flex, Skeleton, Text, Tooltip } from "@chakra-ui/react";
import { COLORS, TRANSITIONS } from "@/theme";


const GamePreviewCard = ({ name, src, price, platforms, width = '434px', height = '240px', isCustom = false, isFirst = false }: GamePreviewCardProps) => {
  const platformsList = getPlatformsList(platforms);
  const platformsIcon = getPlatformsIcon(platformsList)?.sort();
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const [isLoaded, setIsLoaded] = useState<boolean>(false);


  return (
    <Skeleton
      onLoad={() => setIsLoaded(true)}
      isLoaded={isLoaded}
      startColor={COLORS.darkLight}
      endColor={COLORS.darkSoft}

      display='flex'
      position="relative"
      borderRadius="10px"

      w={isCustom ? '100%' : width}
      h={isCustom ? '100%' : { base: '180px', sm: '160px',  md: '180px', lg: '180px', xl: '240px' }}

      _first={isCustom ? {
        gridRowStart: { base: '1', lg: '1' },
        gridRowEnd: { base: '4', lg: '4' },
        gridRow: { base: '1 / 2', lg: '1 / 5' },
        gridColumn: { base: '1 / 4', lg: 'auto' }
      } : {}}

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
        p={isFirst ? "3%" : {base: "8px", md: '15px'}}
        justifyContent="space-between" alignItems="end"
        opacity={isHovered ? "1" : "0.8"}
        fontSize={isFirst ? {base: "18px", sm: '22px', md: '28px', lg: '36px'} : "14px"} color={COLORS.white}
        transition={TRANSITIONS.mainTransition}
      >

        <Box transition={TRANSITIONS.mainTransition} transform={isHovered ? "translateY(0px)" : "translateY(25px)"}>
          <Text color={COLORS.white} pr="10px" fontWeight={isFirst ? "800" : {base: '700', md: '800'}} mb="10px" >
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

        <Text display={{base: 'none', md: 'block'}} color={COLORS.white} fontWeight={isFirst ? "700" : {base: '600', md: '700'}} transition={TRANSITIONS.mainTransition} zIndex="1" >
          ${price}
        </Text>
      </Flex>
    </Skeleton>
  );
};

export default GamePreviewCard;
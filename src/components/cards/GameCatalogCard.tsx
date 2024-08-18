"use client";

import { COLORS, TRANSITIONS } from "@/theme";
import { Box, Button, Flex, Skeleton, Text, Tooltip, Image, Link } from "@chakra-ui/react";
import { GoPlus } from "react-icons/go";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import getPlatformsList from "@/utils/platform/getPlatformsList";
import getPlatformsIcon from "@/utils/platform/getPlatformsIcon";
import { FaStar } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";

const GameCatalogCard = ({
  name,
  src,
  price,
  platforms,
  id,
  genres,
  released,
  rating,
  href,
  handleAddToCart,
  isInCart
}: {
  name: string;
  src: string;
  price: string;
  platforms: any[];
  id: number;
  genres: any[];
  released: string;
  rating: number;
  href?: string;
  handleAddToCart: () => void;
  isInCart: boolean;
}) => {
  const platformsList = getPlatformsList(platforms);
  const platformsIcon = getPlatformsIcon(platformsList)?.sort();
  const [isHovered, setIsHovered] = useState(false);


  return (
    <Box
      id={id.toString()}
      as={motion.div}
      transition={TRANSITIONS.mainTransition}
      // h="fit-content"
      // w="300px"
      bg={COLORS.dark}
      borderRadius="10px"
      overflow="hidden"
    >
      <Link href={href}>
        <Image
          loading="lazy"
          src={src}
          borderRadius="10px 10px 0 0"
          cursor="pointer"
          display='block'
          height={{base: "200px", md: "150px"}}
          objectPosition='center'
          objectFit='cover'
          width='100%'
          transition={TRANSITIONS.mainTransition}
          _hover={{ height: {base: "250px", md: "180px"}, transition: TRANSITIONS.mainTransition }}
        />
      </Link>

      <Box
        p="20px"
        pb='0px'
        transition={TRANSITIONS.mainTransition}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Box>
          <Flex mb="16px" justifyContent="space-between">
            <Flex
              onClick={handleAddToCart}
              columnGap="8px"
              alignItems="center"
              cursor="pointer"
              transition={TRANSITIONS.mainTransition}
              _hover={{
                transition: TRANSITIONS.mainTransition,
                color: COLORS.white,
              }}
              sx={{
                "&:hover > *": {
                  color: COLORS.white,
                  fill: COLORS.white,
                  transition: TRANSITIONS.mainTransition,
                },
              }}
            >
              <Text
                fontSize="14px"
                color={COLORS.gray}
                transition={TRANSITIONS.mainTransition}
                
              >
                {isInCart ? 'Added' : 'Add to cart'}
              </Text>
              {isInCart ? (
                <FaCheck size="15px" color={COLORS.gray} />
              ) : (
                <GoPlus size="20px" color={COLORS.gray} />
              )}
              
            </Flex>

            <Text fontSize="14px" fontWeight="600" color={COLORS.white}>
              ${price}
            </Text>
          </Flex>

          <Text fontSize="20px" fontWeight="800" color={COLORS.white}>
            {name}
          </Text>

          <Flex gap="5px" mt='10px' mb="20px">
            {platformsIcon &&
              platformsIcon.map((platform: any, index: number) => (
                <Tooltip
                  key={index}
                  bg={COLORS.darkLight}
                  label={platform === "apple" ? "apple / macOS" : platform}
                  aria-label="A tooltip"
                  color={COLORS.white}
                >
                  <Image
                    src={`/icons/platforms/${platform}.svg`}
                    width='14px'
                    height='14px'
                    alt={platform}
                  />
                </Tooltip>
              ))}
          </Flex>
        </Box>

        <Box>
          <AnimatePresence>
            {isHovered && (
              <Box
                as={motion.div}
                initial={{ height: "0px", opacity: 0}}
                animate={{ height: "185px", opacity: 1 }}
                exit={{ height: "0px", opacity: 0 }}
                transition="0.01s cubic-bezier(0.34, 1.56, 0.64, 1)"
              >
                <Flex flexDirection="column" rowGap="10px" mb="25px">
                  <Flex
                    alignItems="center"
                    pb="5px"
                    justifyContent="space-between"
                    borderBottom="1px solid"
                    borderColor={COLORS.whiteTransparent}
                  >
                    <Text fontSize="14px" fontWeight={600} color={COLORS.gray}>
                      Released:
                    </Text>
                    <Text fontSize="14px" fontWeight={500} color={COLORS.white}>
                      {released.replace(/-/g, "/")}
                    </Text>
                  </Flex>

                  <Flex
                    alignItems="center"
                    pb="5px"
                    justifyContent="space-between"
                    borderBottom="1px solid"
                    borderColor={COLORS.whiteTransparent}
                  >
                    <Text fontSize="14px" mr='20px' fontWeight={600} color={COLORS.gray}>
                      Genres:
                    </Text>
                    <Flex gap="5px" wrap="wrap" justifyContent="end">
                      {genres.slice(0, 4).map((genre, index) => (
                        <Text key={genre.id} fontSize="14px" fontWeight={500} color={COLORS.white}>
                          {genre.name}{index < genres.length - 1 ? ',' : ''}
                        </Text>
                      ))}
                    </Flex>
                  </Flex>

                  <Flex
                    alignItems="center"
                    pb="5px"
                    justifyContent="space-between"
                    borderBottom="1px solid"
                    borderColor={COLORS.whiteTransparent}
                  >
                    <Text fontSize="14px" fontWeight={600} color={COLORS.gray}>
                      Rating:
                    </Text>
                    <Flex columnGap='5px' alignItems='center' fontSize="14px" fontWeight={500} color={COLORS.white}>
                      {rating} <FaStar size="14px" />
                    </Flex>
                  </Flex>
                </Flex>

                <Button
                  w="100%"
                  h="40px"
                  as={Link}
                  href={href}
                  borderRadius="10px"
                  bgColor={COLORS.darkLight}
                  color={COLORS.white}
                  transition={TRANSITIONS.mainTransition}
                  fontSize="14px"
                  _hover={{
                    transition: TRANSITIONS.mainTransition,
                    bgColor: COLORS.darkSoft,
                    textDecoration: "none",
                  }}
                >
                  View more
                </Button>
              </Box>
            )}
          </AnimatePresence>
        </Box>

      </Box>
    </Box>
  );
};

export default GameCatalogCard;

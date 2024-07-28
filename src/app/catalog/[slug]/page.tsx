"use client";

import Header from "@/components/header/Header";
import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { FaArrowLeftLong } from "react-icons/fa6";
import React, { useEffect, useState } from "react";
import { COLORS, TRANSITIONS } from "@/theme";
import { Game } from "@/interface";
import { useParams } from "next/navigation";
import { loadGames } from "@/utils/loadGames";
import { RiExternalLinkLine } from "react-icons/ri";
import { gameDetails } from "@/api/gameDetails";
import { gameScreenshots } from "@/api/gameScreenshots";
import getRandomPrice from "@/utils/gameCard/getRandomPrice";
import GameSlider from "@/components/slider/GameSlider";
import { FaStar } from "react-icons/fa6";
import FooterBtn from "@/components/footer/FooterBtn";

const GamePage = () => {
  const { slug } = useParams();
  const [data, setData] = useState<Game>();

  useEffect(() => {
    (async () => {
      const [game, screenshots] = await Promise.all([
        gameDetails({ slug }),
        gameScreenshots({ slug }),
      ]);
      const short_screenshots = [
        { id: -1, image: game.background_image },
        ...screenshots.results,
      ];
      const price = getRandomPrice(game);
      setData({ ...game, short_screenshots, price });
      console.log("🚀 ~ game:", game);
    })();
  }, [slug]);

  return (
    <>
      <Header />

      <Box className="wrapper" mt="60px">
        <Flex justifyContent="space-between" mb="40px">
          <Flex
            as={Link}
            href="/catalog"
            textDecoration="none"
            columnGap="20px"
            alignItems="center"
            transition={TRANSITIONS.mainTransition}
            _hover={{
              textDecoration: "none",
              pl: "10px",
              transition: TRANSITIONS.mainTransition,
            }}
          >
            <FaArrowLeftLong size="30px" />
            <Text fontSize="28px" fontWeight="700">
              Store
            </Text>
          </Flex>

          <Heading as="h2" fontSize="40px" fontWeight="700">
            {data?.name}
          </Heading>
        </Flex>

        {/* Game slider & about */}
        <Flex justifyContent="space-between" columnGap="30px">
          <Box w="70%">
            {data && data.short_screenshots && (
              <GameSlider short_screenshots={data.short_screenshots} />
            )}

            {/* Game left side, under slider */}
            <Flex
              mt='40px'
              justifyContent="space-between"
              alignItems="center"
              columnGap="24px"
            >
              <Flex columnGap="20px">
                <Box>
                  <Text fontSize="20px" fontWeight="700" mb="5px">
                    Exceptional
                  </Text>
                  <Text
                    fontSize="15px"
                    fontWeight="600"
                    letterSpacing="20%"
                    color={COLORS.gray}
                    textTransform="uppercase"
                  >
                    {data?.ratings[0].count} Marks
                  </Text>
                </Box>

                <Divider
                  borderRadius="5px"
                  borderColor={COLORS.darkSoft}
                  borderWidth="1px"
                  h="auto"
                  orientation="vertical"
                />

                <Box>
                  <Flex alignItems="center" columnGap="6px">
                    <Text fontSize="20px" fontWeight="700" mb="5px">
                      {data?.rating}
                    </Text>
                    <FaStar size="18px" />
                  </Flex>
                  <Text
                    fontSize="15px"
                    fontWeight="600"
                    letterSpacing="20%"
                    color={COLORS.gray}
                    textTransform="uppercase"
                  >
                    Rating{" "}
                  </Text>
                </Box>

                <Divider
                  borderRadius="5px"
                  borderColor={COLORS.darkSoft}
                  borderWidth="1px"
                  h="auto"
                  orientation="vertical"
                />

                <Box>
                  <Text fontSize="20px" fontWeight="700" mb="5px">
                    {data?.publishers[0].name}
                  </Text>
                  <Text
                    fontSize="15px"
                    fontWeight="600"
                    letterSpacing="20%"
                    color={COLORS.gray}
                    textTransform="uppercase"
                  >
                    Publishers
                  </Text>
                </Box>
              </Flex>

              <FooterBtn
                pathToIcon={"/icons/medal-star-icon.svg"}
                alt="Add to favorite"
                width="60px"
                height="60px"
              />
            </Flex>
          </Box>

          <Box w="30%">
            <Box borderRadius="10px" bgColor={COLORS.dark} px="20px" py="24px" mb='40px'>
              <Flex
                mb="15px"
                justifyContent="space-between"
                alignItems="center"
                columnGap="24px"
              >
                <Text fontWeight="700" fontSize="24px">
                  About
                </Text>

                <Link href={`${data?.website}`} target="_blank">
                  <RiExternalLinkLine size="24px" cursor="pointer" />
                </Link>
              </Flex>

              <Box
                overflow="auto"
                h="60%"
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
                  '::-webkit-scrollbar-button': {
                    display: 'none',
                  },
                  "::-webkit-scrollbar-thumb:hover": {
                    background: COLORS.black,
                  },
                }}
              >
                <Text
                  h="100%"
                  fontSize="16px"
                  color={COLORS.gray}
                  flexWrap="wrap"
                  pr="15px"
                  style={{ textAlign: "justify", hyphens: "auto" }}
                >
                  {data?.description_raw
                    .split("###")
                    .map((p: string, index: any) => (
                      <Box as="span" key={index}>
                        {p}
                      </Box>
                    ))}
                </Text>
              </Box>
            </Box>

            {/* Game right side, under about */}
            <Flex
              bg={COLORS.darkLight}
              columnGap="24px"
              h="60px"
              px="20px"
              borderRadius="10px"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="20px" fontWeight="700">
                ${data?.price}
              </Text>
              <Flex columnGap="15px" alignItems="center" cursor="pointer">
                <Text fontSize="20px" fontWeight="600">
                  Add to cart
                </Text>
                <Image
                  src={"/icons/bag-icon.svg"}
                  alt="cart"
                  w="24px"
                  h="24px"
                />
              </Flex>
            </Flex>


          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default GamePage;

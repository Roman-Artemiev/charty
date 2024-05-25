"use client";

import Header from "@/components/Header/Header";
import Image from "next/image";
import GameCard from "@/components/GameCard";
import GameTag from "@/components/GameTag";
import {
  Box,
  Button,
  Center,
  Text,
  Divider,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Grid,
} from "@chakra-ui/react";
import Option from "@/components/Option";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import getPlatformIcon from "@/utils/platform/getPlatformsIcon";
import { COLORS, TRANSITIONS } from "@/theme";
import { gameList } from "@/api/gameList";
import { AnimatePresence, motion } from "framer-motion";
import getRandomPrice from "@/utils/gameCard/getRandomPrice";
import getRandomItems from "@/utils/getRandomItem";
import { GameCardHome } from "@/types";


const loadGames = async (params: { page_size?: number, page?: number }, search = "") => {
  const response = await gameList(params);
  let { results } = response;
  results = results.filter((game: { ratings_count: number }) => game.ratings_count > (search ? 50 : 10));
  results.forEach((game) => game.price = getRandomPrice(game));
  return results;
};

export default function Home() {
  const [data, setData] = useState<GameCardHome[] | undefined>(undefined);
  const [games, setGames] = useState<GameCardHome[] | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const homeGames = await loadGames({ page_size: 20, page: 1 }) as GameCardHome[];
      const games = getRandomItems(homeGames, 4) as GameCardHome[];
      setGames(games);

      const anotherGames = await loadGames({ page_size: 20, page: 2 }) as GameCardHome[];
      setData(anotherGames);
    })();
  }, []);


  const categoryOptions = [
    {
      isSelected: true,
      pathToIcon: "../../icons/category/wifi-icon.svg",
      text: "Free Online",
    },
    { pathToIcon: "../../icons/category/lightning-icon.svg", text: "Action" },
    {
      pathToIcon: "../../icons/category/chess-rook-icon.svg",
      text: "Strategy",
    },
    { pathToIcon: "../../icons/category/shield-icon.svg", text: "RPG" },
    { pathToIcon: "../../icons/category/scope-icon.svg", text: "Shooter" },
    { pathToIcon: "../../icons/category/world-icon.svg", text: "Adventure" },
    { pathToIcon: "../../icons/category/puzzle-icon.svg", text: "Puzzle" },
    { pathToIcon: "../../icons/category/ball-icon.svg", text: "Sports" },
    { pathToIcon: "../../icons/category/controller-icon.svg", text: "Racing" },
  ];

  
  return (
    <>
      <Box w="100%" h="100vh" mb="140px">
        <Header />

        <Box className="wrapper" >
          <Flex h="calc(100vh - 65px)" alignItems='center' flex="1 1" >
            <Grid
              display="grid"
              columnGap="30px"
              rowGap="25px"
              h="calc(100% - 60px)"
              gridTemplateColumns='1fr max(25%, 170px)'
              gridTemplateRows='repeat(3, 1fr) min-content'
              flex="1 1"
              _last={{ alignItems: "end" }}
            >
              {games &&
                games.map(({ id, name, background_image, platforms, price }, index) => (
                  <GameCard
                    key={id}
                    name={name}
                    src={background_image}
                    price={price}
                    platforms={platforms}
                    isCustom={true}
                    isFirst={index === 0 && true}
                  />
                ))}

              <Flex
                pt='15px'
                alignItems="center"
                columnGap="20px"
                cursor="pointer"
                transition={TRANSITIONS.mainTransition}
                _hover={{
                  columnGap: "30px",
                  transition: TRANSITIONS.mainTransition,
                }}
              >
                <Text fontSize="28px" fontWeight={700}>
                  Go to the store
                </Text>

                <Image
                  src="/icons/arrow-right-icon.svg"
                  width={34}
                  height={34}
                  alt="Arrow"
                />
              </Flex>
            </Grid>
          </Flex>
        </Box>
      </Box>

      <Box mb="140px">
        <Box className="wrapper">
          <Flex mb="30px" justifyContent="space-between" alignItems="center">
            <Heading as="h2" className="h2" fontWeight={800} fontSize="40px">
              Popular genres
            </Heading>
            <Box cursor="pointer">
              <Image
                src="../../icons/arrow-right-icon.svg"
                width={40}
                height={40}
                alt="More"
              />
            </Box>
          </Flex>

          <Flex justifyContent="center" flexWrap="wrap" gap="25px 40px">
              {data && data.slice(0, 9).map(({ id, name, background_image, platforms, price }, index) => (
                <GameCard
                  key={id}
                  name={name}
                  src={background_image}
                  price={price}
                  platforms={platforms}
                />
              ))}
          </Flex>
        </Box>
      </Box>

      <Box mb={"140px"}>
        <Box className="wrapper">
          <Heading as="h2" className="h2" fontWeight={800} fontSize="40px">
            Browse Charty
          </Heading>

          <Flex mt="30px" flexWrap="wrap" gap="15px 20px">
            <GameTag
              pathToIcon="../../icons/gamepad-icon.svg"
              text="Platforms"
            />
            <GameTag pathToIcon="../../icons/code-icon.svg" text="Developers" />
            <GameTag pathToIcon="../../icons/hashtag-icon.svg" text="Tags" />
            <GameTag
              pathToIcon="../../icons/publisher-icon.svg"
              text="Publisher"
            />
            <GameTag pathToIcon="../../icons/download-icon.svg" text="Stores" />
            <GameTag
              pathToIcon="../../icons/collection-icon.svg"
              text="Cellections"
            />
          </Flex>
        </Box>
      </Box>

      <Box mb="140px">
        <Box className="wrapper">
          <Flex mb="30px" justifyContent="space-between" alignItems="center">
            <Heading as="h2" className="h2" fontWeight={800} fontSize="40px">
              What platform are you using ?
            </Heading>

            <Menu closeOnSelect={false}>
              <MenuButton
                rightIcon={
                  <Image
                    src="/icons/arrow-bottom-icon.svg"
                    width={20}
                    height={20}
                    alt="Arrow"
                  />
                }
                as={Button}
                w="200px"
                h="44px"
                color={COLORS.white}
                _active={{ bg: COLORS.dark }}
                bg={COLORS.darkLight}
                fontSize="16px"
                _hover={{ bg: COLORS.dark }}
              >
                Platform
              </MenuButton>
              <MenuList minWidth="240px" bgColor={COLORS.darkLight} border={0}>
                <MenuOptionGroup
                  title="Platform"
                  type="checkbox"
                  bgColor={COLORS.darkLight}
                  color={COLORS.gray}
                  fontWeight={400}
                  transition={TRANSITIONS.mainTransition}
                >
                  <MenuItemOption
                    value="pc"
                    bgColor={COLORS.darkLight}
                    color={COLORS.white}
                    _hover={{ bgColor: COLORS.whiteTransparentLight }}
                    transition={TRANSITIONS.mainTransition}
                  >
                    PC
                  </MenuItemOption>
                  <MenuItemOption
                    value="xbox"
                    bgColor={COLORS.darkLight}
                    color={COLORS.white}
                    _hover={{ bgColor: COLORS.whiteTransparentLight }}
                    transition={TRANSITIONS.mainTransition}
                  >
                    Xbox
                  </MenuItemOption>
                  <MenuItemOption
                    value="nintendo"
                    bgColor={COLORS.darkLight}
                    color={COLORS.white}
                    _hover={{ bgColor: COLORS.whiteTransparentLight }}
                    transition={TRANSITIONS.mainTransition}
                  >
                    Nintendo
                  </MenuItemOption>
                  <MenuItemOption
                    value="ios"
                    bgColor={COLORS.darkLight}
                    color={COLORS.white}
                    _hover={{ bgColor: COLORS.whiteTransparentLight }}
                    transition={TRANSITIONS.mainTransition}
                  >
                    iOS / macOS
                  </MenuItemOption>
                  <MenuItemOption
                    value="android"
                    bgColor={COLORS.darkLight}
                    color={COLORS.white}
                    _hover={{ bgColor: COLORS.whiteTransparentLight }}
                    transition={TRANSITIONS.mainTransition}
                  >
                    Android
                  </MenuItemOption>
                  <MenuItemOption
                    value="linux"
                    bgColor={COLORS.darkLight}
                    color={COLORS.white}
                    _hover={{ bgColor: COLORS.whiteTransparentLight }}
                    transition={TRANSITIONS.mainTransition}
                  >
                    Linux
                  </MenuItemOption>
                </MenuOptionGroup>
                <MenuDivider borderColor={COLORS.whiteTransparentLight} />
                <MenuOptionGroup title="" type="checkbox">
                  <MenuItemOption
                    isChecked
                    value="desc"
                    bgColor={COLORS.darkLight}
                    color={COLORS.white}
                    _hover={{ bgColor: COLORS.whiteTransparentLight }}
                    transition={TRANSITIONS.mainTransition}
                  >
                    Doesn't matter
                  </MenuItemOption>
                </MenuOptionGroup>
              </MenuList>
            </Menu>
          </Flex>

          <Center flexWrap="wrap" gap="25px 40px">
            {data && data.slice(9, 15).map(({ id, name, background_image, platforms, price }, index) => (
              <GameCard
                key={id}
                name={name}
                src={background_image}
                price={price}
                platforms={platforms}
              />
            ))}
          </Center>
        </Box>
      </Box>

      <Box mb="140px">
        <Box className="wrapper">
          <Heading className="h2" fontWeight={800} fontSize="40px" mb="30px">
            Search by category
          </Heading>

          <Flex w="100%" h="100%" justifyContent="space-between">
            <Flex flexDirection="column" rowGap="5px">
              {categoryOptions.map((option, index) => (
                <Option
                  key={index}
                  isSelected={option.isSelected || false}
                  pathToIcon={option.pathToIcon}
                  text={option.text}
                />
              ))}
            </Flex>
            <Divider
              w="1px"
              h="505px"
              orientation="vertical"
              borderColor={COLORS.whiteTransparentLight}
            />
            <Flex
              maxW="961px"
              justifyContent="space-around"
              flexWrap="wrap"
              gap="25px 40px"
            >
              {data && data.slice(15, 19).map(({ id, name, background_image, platforms, price }, index) => (
                <GameCard
                  key={id}
                  name={name}
                  src={background_image}
                  price={price}
                  platforms={platforms}
                />
              ))}
            </Flex>
          </Flex>
        </Box>
      </Box>

      {/* <Box mb="200px">
        <Box className="wrapper">
          <Heading className="h2" fontWeight={800} fontSize="40px" mb="30px">
            Were you interested in ?
          </Heading>

          <Center flexWrap='wrap' gap='25px 40px'>
            {data.slice(19, 24).map((item: any, index: number) => (
              <GameCard 
                key={index}
                name={item.name}
                src={item.background_image}
                price={item.price}
                platforms={item.platforms}
              />
            ))}
          </Center>
        </Box>
      </Box> */}

      <Footer />
    </>
  );
}

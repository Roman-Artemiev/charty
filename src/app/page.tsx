"use client";

import Header from "@/components/header/Header";
import Image from "next/image";
import GamePreviewCard from "@/components/cards/GamePreviewCard";
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
  LinkBox,
  Link
} from "@chakra-ui/react";
import Option from "@/components/Option";
import Footer from "@/components/footer/Footer";
import { useEffect, useState } from "react";
import { COLORS, TRANSITIONS } from "@/theme";
import { gameList } from "@/api/gameList";
import getRandomPrice from "@/utils/gameCard/getRandomPrice";
import getRandomItems from "@/utils/getRandomItem";
import { GameCardHome } from "@/interface";
import { loadGames } from "@/utils/loadGames";
import React from "react";
// import Link from "next/link";


// export const revalidate = false;



export default function Home() {
  const [data, setData] = useState<GameCardHome[] | undefined>(undefined);
  const [games, setGames] = useState<GameCardHome[] | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const homeGames = await loadGames({ page_size: 20, page: 1 }) as GameCardHome[];
      const games = getRandomItems(homeGames, 4) as GameCardHome[];
      setGames(games);
      // console.log("🚀 ~ games:", homeGames);

      const anotherGames = await loadGames({ page_size: 20, page: 2 }) as GameCardHome[];
      setData(anotherGames);
    })();
  }, []);


  const categoryOptions = [
    { isSelected: true, pathToIcon: "../../icons/category/wifi-icon.svg", text: "Free Online", },
    { pathToIcon: "../../icons/category/lightning-icon.svg", text: "Action" },
    { pathToIcon: "../../icons/category/chess-rook-icon.svg", text: "Strategy",},
    { pathToIcon: "../../icons/category/shield-icon.svg", text: "RPG" },
    { pathToIcon: "../../icons/category/scope-icon.svg", text: "Shooter" },
    { pathToIcon: "../../icons/category/world-icon.svg", text: "Adventure" },
    { pathToIcon: "../../icons/category/puzzle-icon.svg", text: "Puzzle" },
    { pathToIcon: "../../icons/category/ball-icon.svg", text: "Sports" },
    { pathToIcon: "../../icons/category/controller-icon.svg", text: "Racing" },
  ];



  // Games by PLATFORMS
  const [selectedPlatformsGames, setSelectedPlatformsGames] = useState<any[]>();
  const [selectedPlatforms, setSelectedPlatforms] = useState<number[]>([]);
  const [isPlatformPopupOpen, setIsPlatformPopupOpen] = useState<boolean>(false);
  const platformOptions = [
    {slug: 'pc', name: 'PC', id: 4 }, 
    {slug: 'xbox', name: 'Xbox', id: 14 }, 
    {slug: 'playstation', name: 'PlayStation', id: 18 }, 
    {slug: 'nintendo', name: 'Nintendo', id: 7 }, 
    {slug: 'ios', name: 'iOS / macOS', id: 3 }, 
    {slug: 'android', name: 'Android', id: 21 }, 
  ]

  const handlePlatformPopupClick = () => {
    setIsPlatformPopupOpen((prev) => !prev);
  }

  const handlePlatformOptionClick = (id: number) => {
    setSelectedPlatforms((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id]
    );
    console.log(id);
    console.log(selectedPlatforms);
  };



  return (
    <>
      <Box w="100%" h="100vh" minH='600px' mb="140px">
        <Header />

        <Box className="wrapper" h='100%' >
          <Flex h={{base: "calc(100% - 115px)", '840px': "calc(100% - 65px)"}} alignItems='center' flex="1 1" >
            <Grid
              display="grid"
              columnGap={{base: '20px', md: "30px"}}
              rowGap={{base: '20px', md: "25px"}}
              h="calc(100% - 60px)"
              gridTemplateColumns={{base: 'repeat(3, 1fr)', lg: '1fr max(26.5%, 170px)', }}
              gridTemplateRows={{base: '1fr max(10%, 130px) min-content', lg: 'repeat(3, 1fr) min-content'}}
              flex="1 1"
              _last={{ alignItems: "end" }}
            >
              {games &&
                games.map(({ id, name, background_image, platforms, price, slug }, index) => (
                  <GamePreviewCard
                    key={id}
                    name={name}
                    src={background_image}
                    price={price}
                    platforms={platforms}
                    isCustom={true}
                    isFirst={index === 0 && true}
                    href={`/catalog/${slug}`}
                  />
                ))}

              <Link href="/catalog"
                display="flex"
                pt={{base: '0', lg: '15px'}}
                alignItems="center"
                justifyContent={{base: 'center', lg: 'flex-start'}}
                columnGap="20px"
                cursor="pointer"
                gridColumn={{base: '1 / 4', lg: '2 / 3'}}
                transition={TRANSITIONS.mainTransition}
                _hover={{
                  columnGap: "30px",
                  transition: TRANSITIONS.mainTransition,
                }}
              >
                
                <Text fontSize="24px" fontWeight={700}>
                  Go to the store
                </Text>

                <Image
                  src="/icons/arrow-right-icon.svg"
                  width={34}
                  height={34}
                  alt="Arrow"
                />
              </Link>
            </Grid>
          </Flex>
        </Box>
      </Box>

      <Box mb="140px">
        <Box className="wrapper">
          <Flex mb="30px" justifyContent="space-between" alignItems="center" columnGap='20px'>
            <Heading as="h2" fontWeight={800} fontSize={{base: "28px", md: '32px', lg: '40px'}}>
              Popular genres
            </Heading>
            <Box as={Link} href="/catalog" cursor="pointer">
              <Image
                src="../../icons/arrow-right-icon.svg"
                width={40}
                height={40}
                alt="More"
              />
            </Box>
          </Flex>

          <Grid gridTemplateColumns={{base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)'}} gap="25px 40px">
              {data && data.slice(0, 9).map(({ id, name, background_image, platforms, price, slug }, index) => (
                <GamePreviewCard
                  key={id}
                  name={name}
                  src={background_image}
                  price={price}
                  platforms={platforms}
                  width="100%"
                  href={`/catalog/${slug}`}
                />
              ))}
          </Grid>
        </Box>
      </Box>

      {/* <Box mb={"140px"}>
        <Box className="wrapper">
          <Heading as="h2" fontWeight={800} fontSize={{base: "28px", md: '32px', lg: '40px'}}>
            Browse Charty
          </Heading>

          <Flex mt="30px" flexWrap="wrap" gap="15px 20px">
            <GameTag pathToIcon="../../icons/gamepad-icon.svg" text="Platforms"/>
            <GameTag pathToIcon="../../icons/code-icon.svg" text="Developers" />
            <GameTag pathToIcon="../../icons/hashtag-icon.svg" text="Tags" />
            <GameTag pathToIcon="../../icons/publisher-icon.svg" text="Publisher"/>
            <GameTag pathToIcon="../../icons/download-icon.svg" text="Stores" />
            <GameTag pathToIcon="../../icons/collection-icon.svg" text="Cellections"/>
          </Flex>
        </Box>
      </Box> */}

      {/* <Box mb="140px">
        <Box className="wrapper">
          <Flex mb="30px" justifyContent="space-between" alignItems="center" flexDirection={{base: 'column', md: 'row'}} gap='25px 20px'>
            <Heading as="h2" w={{base: 'auto', md: '400px', lg: 'auto' }} fontWeight={800} fontSize={{base: "28px", md: '32px', lg: '40px'}}>
              What platform are you using ?
            </Heading>

            <Menu closeOnSelect={false} onClose={() => setIsPlatformPopupOpen(false)} onOpen={() => setIsPlatformPopupOpen(true)}>
              <MenuButton
                rightIcon={ <Image src="/icons/arrow-bottom-icon.svg" width={20} height={20} alt="Arrow"/> }
                as={Button}
                w="200px" h="44px"
                color={COLORS.white}
                _active={{ bg: COLORS.dark }}
                bg={COLORS.darkLight}
                fontSize="16px"
                _hover={{ bg: COLORS.dark }}
              >
                Platform
              </MenuButton>

              <MenuList minWidth="240px" bgColor={COLORS.darkLight} defaultValue='pc' border={0} zIndex={3}>
                <MenuOptionGroup
                  title="Platform"
                  type="checkbox"
                  bgColor={COLORS.darkLight}
                  color={COLORS.gray}
                  fontWeight={400}
                  transition={TRANSITIONS.mainTransition}
                >
                  {platformOptions.map((option) => (
                    <MenuItemOption
                      key={option.id}
                      name={option.slug}
                      value={option.slug}
                      bgColor={COLORS.darkLight}
                      color={COLORS.white}
                      _hover={{ bgColor: COLORS.whiteTransparentLight }}
                      transition={TRANSITIONS.mainTransition}
                      onClick={() => handlePlatformOptionClick(option.id)}
                    >
                      {option.name}
                    </MenuItemOption>
                  ))}
                </MenuOptionGroup>
              </MenuList>
            </Menu>
          </Flex>

          <Grid gridTemplateColumns={{base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)'}}  flexWrap="wrap" gap="25px 40px">
            {data && data.slice(9, 15).map(({ id, name, background_image, platforms, price, slug }) => (
              <GamePreviewCard
                key={id}
                name={name}
                src={background_image}
                price={price}
                platforms={platforms}
                width="100%"
                href={`/catalog/${slug}`}
              />
            ))}
          </Grid>
        </Box>
      </Box> */}

      <Box mb="140px">
        <Box className="wrapper">
          <Heading as="h2" fontWeight={800} fontSize={{base: "28px", md: '32px', lg: '40px'}} mb='30px'>
            Search by category
          </Heading>

          <Flex w="100%" h="100%" justifyContent={{base: "center", "1300px": "space-between"}} flexDirection={{base: 'column', '1300px': 'row'}} gap='40px 20px'>
            <Grid gridTemplateColumns={{base: 'auto' ,sm: "repeat(auto-fill, minmax(260px, 1fr))", '1300px': 'auto'}} flexDirection="column" gap="5px 20px">
              {categoryOptions.map((option, index) => ( 
                <Option
                  key={index}
                  href="/catalog"
                  isSelected={option.isSelected || false}
                  pathToIcon={option.pathToIcon}
                  text={option.text}
                />
              ))}
            </Grid>

            <Divider
              w="1px"
              h="505px"
              display={{base: 'none', '1300px': 'block'}}
              orientation="vertical"
              borderColor={COLORS.whiteTransparentLight}
            />

            <Grid
              gridTemplateColumns={{base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)'}}
              maxW="961px"
              justifyContent="space-around"
              flexWrap="wrap"
              gap="25px 40px"
              m={{base: '0', sm: '0 auto', '1300px': '0'}}
            >
              {data && data.slice(15, 19).map(({ id, name, background_image, platforms, price, slug }, index) => (
                <GamePreviewCard
                  key={id}
                  name={name}
                  src={background_image}
                  price={price}
                  platforms={platforms}
                  width="100%"
                  href={`/catalog/${slug}`}
                />
              ))}
            </Grid>
          </Flex>
        </Box>
      </Box>

      {/* <Box mb="200px">
        <Box className="wrapper">
          <Heading className="h2" fontWeight={800} fontSize={{base: "28px", md: '32px', lg: '40px'}} mb="30px">
            Were you interested in ?
          </Heading>

          <Grid gridTemplateColumns={{base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)'}} gap='25px 40px'>
            {data && data.slice(14, 19).map(({ id, name, background_image, platforms, price }, index) => (
              <GamePreviewCard
                key={id}
                name={name}
                src={background_image}
                price={price}
                platforms={platforms}
                width="100%"
              />
            ))}
          </Grid>
        </Box>
      </Box> */}

      <Footer />
    </>
  );
}

"use client";

import Header from "../components/nav/Header";
import Image from "next/image";
import GamePreviewCard from "@/components/cards/GamePreviewCard";
import {
  Box,
  Text,
  Divider,
  Flex,
  Heading,
  Grid,
  Link
} from "@chakra-ui/react";
import Option from "@/components/Option";
import Footer from "@/components/footer/Footer";
import { useEffect, useState } from "react";
import { COLORS, TRANSITIONS } from "@/theme";
import getRandomItems from "@/utils/getRandomItem";
import { GameCardHome } from "@/interface";
import { loadGames } from "@/utils/loadGames";
import React from "react";


export default function Home() {
  const [data, setData] = useState<GameCardHome[] | undefined>(undefined);
  const [games, setGames] = useState<GameCardHome[] | undefined>(undefined);

  useEffect(() => {
    (async () => {
      try {
        const homeGames = await loadGames({ page_size: 20, page: 1 }) as GameCardHome[];
        const games = getRandomItems(homeGames, 4) as GameCardHome[];
        setGames(games);
  
        const anotherGames = await loadGames({ page_size: 20, page: 2 }) as GameCardHome[];
        setData(anotherGames);
      } catch (error) {
        console.error("Failed to fetch games:", error);
      }
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
      <Footer />
    </>
  );
}

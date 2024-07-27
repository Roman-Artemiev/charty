"use client";

import Header from '@/components/header/Header'
import { Box, Heading, Text, 
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider, 
  Flex,
  Button,
  Center,
  Grid,
} from '@chakra-ui/react'
import { IoIosArrowDown } from "react-icons/io";
import GameCatalogCard from '@/components/cards/GameCatalogCard'
import { CiGrid41, CiGrid2H } from "react-icons/ci";
// import SelectMenu from '@/components/SelectMenu'
import React, { useEffect, useState } from 'react'
import { COLORS, TRANSITIONS } from './../../theme/index';
import { GameCardHome } from '@/interface';
import { loadGames } from '@/utils/loadGames';

const Catalog = () => {
  const [data, setData] = useState<GameCardHome[] | undefined>(undefined);
  const [column, setColumn] = useState<number>(4);

  useEffect(() => {
    (async () => {
      const games = await loadGames({ page_size: 12, page: 2 }) as GameCardHome[];
      setData(games);
      console.log("🚀 ~ games:", games);
    })();
  }, []);

  const sortByOptions = [
    { filter: 'Relevance',}, 
    { filter: 'Date added', }, 
    { filter: 'Name', }, 
    { filter: 'Release date' }, 
    { filter: 'Popularity' }, 
    { filter: 'Average rating', }, 
  ]
  const platformOptions = [
    { filter: 'PC',}, 
    { filter: 'PlayStation', }, 
    { filter: 'Xbox', }, 
    { filter: 'iOS' }, 
    { filter: 'Android' }, 
    { filter: 'Apple Macintosh', }, 
    { filter: 'Linux', }, 
    { filter: 'Nintendo', }, 
  ]

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [columnCount, setColumnCount] = useState<number>(4);

  const columnSetting = (windowWidthCurrent: number) => {
    const minCarWidth = 320;
    const columnCardPerScreen = Math.floor(windowWidthCurrent / minCarWidth) || 1;
    console.log(windowWidthCurrent, "DEFAULT: ", columnCardPerScreen, "FLOOR: ", );
    return columnCardPerScreen > 4 ? 4 : columnCardPerScreen;
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // columnSetting(windowWidth);
    setColumnCount(columnSetting(windowWidth));

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  return (
    <>
      <Header/>

      <Box className='wrapper' mt="60px">
        <Box mb="50px">
          <Heading as="h1" mb="5px" fontSize="40px" fontWeight="800">
            New and trending
          </Heading>

          <Text mb="30px" fontSize="16px">Based on player counts and release date</Text>

          <Flex columnGap="50px" justifyContent="space-between">
            <Flex columnGap="20px">
              <Menu closeOnSelect={false}>
                <MenuButton
                  rightIcon={ <IoIosArrowDown width="20px" height="20px" /> }
                  as={Button}
                  w="200px" h="44px"
                  color={COLORS.white}
                  _active={{ bg: COLORS.dark }}
                  bg={COLORS.darkLight}
                  fontSize="16px"
                  fontWeight="400"

                  _hover={{ bg: COLORS.dark }}
                >
                  Relevance
                </MenuButton>

                <MenuList minWidth="240px" bgColor={COLORS.darkLight} defaultValue='pc' border={0} zIndex={3}>
                  <MenuOptionGroup
                    title="Order by:"
                    type="checkbox"
                    bgColor={COLORS.darkLight}
                    color={COLORS.gray}
                    fontWeight={400}
                    transition={TRANSITIONS.mainTransition}
                  >
                    {sortByOptions.map((option) => (
                      <MenuItem
                        key={option.filter}
                        name={option.filter}
                        bgColor={COLORS.darkLight}
                        color={COLORS.white}
                        _hover={{ bgColor: COLORS.whiteTransparentLight }}
                        transition={TRANSITIONS.mainTransition}
                        // onClick={() => handlePlatformOptionClick(option.id)}
                      >
                        {option.filter}
                      </MenuItem>
                    ))}
                  </MenuOptionGroup>
                </MenuList>
              </Menu>
              
              <Menu closeOnSelect={false}>
                <MenuButton
                  rightIcon={ <IoIosArrowDown width="20px" height="20px" /> }
                  as={Button}
                  w="200px" h="44px"
                  color={COLORS.white}
                  _active={{ bg: COLORS.dark }}
                  bg={COLORS.darkLight}
                  fontSize="16px"
                  fontWeight="400"
                  _hover={{ bg: COLORS.dark }}
                >
                  Platforms
                </MenuButton>

                <MenuList minWidth="240px" bgColor={COLORS.darkLight} defaultValue='pc' border={0} zIndex={3}>
                  <MenuOptionGroup
                    title="Platforms:"
                    type="checkbox"
                    bgColor={COLORS.darkLight}
                    color={COLORS.gray}
                    fontWeight={400}
                    transition={TRANSITIONS.mainTransition}
                  >
                    {platformOptions.map((option) => (
                      <MenuItem
                        key={option.filter}
                        name={option.filter}
                        bgColor={COLORS.darkLight}
                        color={COLORS.white}
                        _hover={{ bgColor: COLORS.whiteTransparentLight }}
                        transition={TRANSITIONS.mainTransition}
                        // onClick={() => handlePlatformOptionClick(option.id)}
                      >
                        {option.filter}
                      </MenuItem>
                    ))}
                  </MenuOptionGroup>
                </MenuList>
              </Menu>
            </Flex>

            <Flex alignItems="center" columnGap="20px">
              <Text color={COLORS.whiteTransparent}>Display options: </Text>

              <Flex columnGap="10px">
                <Center w="44px" h="44px" bg={COLORS.darkLight} borderRadius="5px" cursor="pointer" _hover={{opacity: "0.8", transform: "translateY(-5px)", transition: TRANSITIONS.mainTransition}} transition={TRANSITIONS.mainTransition}>
                  <CiGrid41 size="24px" />
                </Center>

                <Center w="44px" h="44px" bg={COLORS.darkLight} borderRadius="5px" cursor="pointer" opacity="0.6" _hover={{opacity: "0.8", transform: "translateY(-5px)", transition: TRANSITIONS.mainTransition}} transition={TRANSITIONS.mainTransition}>
                  <CiGrid2H size="24px" />
                </Center>
              </Flex>
            </Flex>
          </Flex>
        </Box>

        
        <Grid gap='30px' gridTemplateColumns={`repeat(${columnCount}, 1fr)`} gridAutoFlow='row'>
          {Array.from({ length: columnCount }).map((_, columnIndex) => {
            const itemsPerColumn = Math.floor(data?.length / columnCount);

            const startIndex = columnIndex * itemsPerColumn;
            const endIndex = Math.min(startIndex + itemsPerColumn, data?.length);
            const columnData = data?.slice(startIndex, endIndex);

            return (
              <Flex gap="30px" id={`${columnIndex}`} flexDirection='column'>
                {columnData?.map(({ id, name, background_image, platforms, price, genres, released, rating }) => (
                    <GameCatalogCard
                      key={id}
                      id={id}
                      name={name}
                      src={background_image}
                      price={price}
                      platforms={platforms}
                      genres = {genres}
                      released = {released}
                      rating = {rating}
                    />
                ))}
              </Flex>
            )
          })}
        </Grid>
      </Box>
    </>
  )
}

export default Catalog
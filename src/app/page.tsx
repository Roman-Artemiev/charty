'use client'

import Header from "@/components/Header/Header";
import styles from "./../styles/home.module.scss";
import Image from "next/image";
import GameCard from "@/components/GameCard";
import GameTag from "@/components/GameTag";
import { Box, Button, Center, Text, Divider, Flex, Heading, Menu, MenuButton, MenuDivider, MenuItemOption, MenuList, MenuOptionGroup, Grid, ListItem, List } from "@chakra-ui/react";
import Option from "@/components/Option";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import getPlatformIcon from "@/utils/platform/getPlatformsIcon";
import { COLORS, TRANSITIONS } from "@/theme";
import GamesPreviewSlider from "@/components/GamesPreviewSlider";
import HomeCard from "@/components/HomeCard";
import { gameList } from "@/api/gameList";
import Transition from "@/components/Transition";
import { AnimatePresence, motion } from "framer-motion";
import { shuffle } from "lodash";


type Game = {
  id: number;
  background_image: string;
  name: string;
  platforms: {
    platform: {
      name: string;
      slug: string;
    };
  }[];
}

interface Props {
  loadGames: (value?: string) => Promise<Game[]>,
}


const cycleArray = (array: unknown[]) => {
  const newArray = [...array];
  newArray.push(newArray.shift());
  return newArray;
};

const getRandomItems = (items: unknown[], length: number) => {
  const randomItems = new Set();
  while (randomItems.size < length) {
    const index = Math.floor(Math.random() * items.length);
    randomItems.add(items[index]);
  }
  return Array.from(randomItems);
};

// const loadGames = async (search = '') => {
//   const response = await gameList({ page_size: 50, search });
//   let { results } = response;
//   results = results.filter((game) => game.ratings_count > (search ? 50 : 10));
//   return results;
// };

const loadGames = async (search = '') => {
  const response = await gameList({ page_size: 50, search });
  let { results } = response;
  results = results.filter((game) => game.ratings_count > (search ? 50 : 10));
  // results.forEach((game) => game.price = getPrice(game));
  return results;
};



const spring = {
  type: "spring",
  damping: 25,
  stiffness: 120,
};

const initialColors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF"]; 

const slide = [
  {name: 'ITEM 1'},
  {name: 'ITEM 2'},
  {name: 'ITEM 3'},
  {name: 'ITEM 4'},
]

export default function Home() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await fetch(`https://api.rawg.io/api/games?key=075adf73c6a94e9ba2447b842d0566d0&page_size=19&page=2`);
        const response = await request.json();
        setData(response.results);
        console.log(response.results);
      } catch (error) {
        console.log(error)
      }
    }
  
    fetchData();
  }, []);

  const categoryOptions = [
    { isSelected: true, pathToIcon: "../../icons/category/wifi-icon.svg", text: "Free Online" },
    { pathToIcon: "../../icons/category/lightning-icon.svg", text: "Action" },
    { pathToIcon: "../../icons/category/chess-rook-icon.svg", text: "Strategy" },
    { pathToIcon: "../../icons/category/shield-icon.svg", text: "RPG" },
    { pathToIcon: "../../icons/category/scope-icon.svg", text: "Shooter" },
    { pathToIcon: "../../icons/category/world-icon.svg", text: "Adventure" },
    { pathToIcon: "../../icons/category/puzzle-icon.svg", text: "Puzzle" },
    { pathToIcon: "../../icons/category/ball-icon.svg", text: "Sports" },
    { pathToIcon: "../../icons/category/controller-icon.svg", text: "Racing" },
  ];
  

  const [games, setGames] = useState<any[]>();

  // useEffect(() => {
  //   setTimeout(async () => {
  //     const data = await loadGames();
  //     const randomItems = getRandomItems(data, 4);
  //     console.log("🚀 ~ setTimeout ~ randomItems:", randomItems)
      
  //     setGames(randomItems);  
  //   }, 3000)
  // }, [games]);

  useEffect(() => {
    let interval: NodeJS.Timer;
    (async () => {
      const loadedGames = await loadGames();
      const games = getRandomItems(loadedGames, 4) as Game[];
      setGames(games);
      interval = setInterval(() => {
        setGames(games => cycleArray(games as Game[]) as Game[]);
      }, 3000);
    })();
    scrollTo();
    return () => clearInterval(interval);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps


  // setInterval(() => {
  //   const [first, ...rest] = array;
  //   console.log("END: ",array);
  //   setArray([...rest, first]);
  // }, 5000);

  


  // const [array, setArray] = useState(slide);

  // useEffect(() => {
  //   setTimeout(() => setArray(
  //     (prevArray) => {        
  //       const [first, ...rest] = prevArray;
  //       return [...rest, first];
  //     }
  //   ), 4000);
  // }, [array]);




  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setArray((prevArray) => {        
  //       const [first, ...rest] = prevArray;
  //       return [...rest, first];
  //     });
  //   }, 4000);

  //   return () => clearInterval(interval);
  // }, [])


  

  const [colors, setColors] = useState(initialColors);

  useEffect(() => {
    setTimeout(() => setColors(
      (prevArray) => {        
        const [first, ...rest] = prevArray;
        return [...rest, first];
      }
    ), 3000);
  }, [colors]);





  return (
    <main>
      {/* <section className={styles.home}>
        <Header/>
      </section> */}

      {/* grid-template-columns: 1fr max(25%, $min-card-height);
    grid-template-rows: repeat(3, 1fr) min-content; */}

      {/* <Box className="wrapper">
        <Center transition={TRANSITIONS.mainTransition} w="100%" h="calc(100vh - 65px)" >
            {sliderData ? 
              <Transition>
                <Grid w="inherit" transition={TRANSITIONS.mainTransition} columnGap="30px" rowGap='25px' gridTemplateColumns='1fr max(25%, 170px)' gridTemplateRows='repeat(3, 1fr) min-content'>
                  {sliderData.map(({ id, name, background_image, platforms }, index: number) => (
                    <HomeCard
                      key={index}
                      name={name}
                      src={background_image}
                      price={`${index}`}
                      platforms={platforms}
                      index={id}
                    />
                  ))}
                </Grid>
            </Transition>
            :
            <Text>Loading...</Text>
            } 
        </Center>
      </Box> */}

      {/* style={
        w="inherit"
        transition={TRANSITIONS.mainTransition}
        columnGap="30px"
        rowGap="25px"
        gridTemplateColumns="1fr max(25%, 170px)"
        gridTemplateRows="repeat(3, 1fr) min-content"
      } */}


      <Box className="wrapper">
        <Center transition={TRANSITIONS.mainTransition} w="100%" h="calc(100vh - 65px)">

          <Grid
            w="inherit"
            columnGap="30px"
            rowGap="25px"
            gridTemplateRows="repeat(4, 1fr) min-content"
            gridTemplateColumns="1fr max(25%, 170px)"
          >
            {colors.map((background, index) => (
              <Center 
                as={motion.div}
                key={background}
                layout
                transition={spring}
                fontSize="24px"
                backgroundColor={background}
                // w="100%"
                _first={{gridRowStart: 1, gridRowEnd: 4,}}
                // sx={index === 0 ? {gridRowStart: '1', gridRowEnd: '5'} :  { alignSelf: index === 1 ? 'start' : (index === 2 ? 'start' : 'end'), justifySelf: index % 2 === 0 ? 'end' : 'end'}}
                height={index === 0 ? '100%' : '170px'}
              >
                {index}
              </Center>
            ))} 

            {/* {games ? 
            <>
              {games.map(({ id, name, background_image, platforms }, index: number) => (
                <HomeCard
                  key={index}
                  name={name}
                  src={background_image}
                  price={`${index}`}
                  platforms={platforms}
                  index={index}
                />
              ))}
              <button>
                Go to the store 
                <Image src="../../icons/arrow-right-icon.svg" width={30} height={30} alt="More"/>
              </button>
            </>: <Text>Loading...</Text>} */}


          </Grid>

        </Center>
      </Box>

    {/* <Box className="wrapper">
      <Center transition={TRANSITIONS.mainTransition} w="100%" h="calc(100vh - 65px)">

        <Grid
          w="inherit"
          columnGap="30px"
          rowGap="25px"
          gridTemplateColumns="1fr max(25%, 170px)"
          gridTemplateRows="repeat(3, 1fr) min-content"
        >
            {array.map((item, index) => (
                <Center
                  bgColor="red"
                  fontSize="24px"
                  as={motion.div}
                  transition={spring}
                  key={item.name}
                  w="100%"
                  sx={
                    index === 0
                      ? { gridRowStart: 1, gridRowEnd: 4 }
                      : {
                          alignSelf: index === 1 ? 'start' : index === 2 ? 'start' : 'end',
                          justifySelf: 'end',
                        }
                  }
                  height={index === 0 ? '100%' : '170px'}
                >
                  {item.name}
                </Center>
            ))}
        </Grid>


      </Center>
    </Box> */}



      <Box mb="140px">
        <Box className="wrapper">
          <Flex mb='30px' justifyContent="space-between" alignItems='center'>
            <Heading as='h2' className="h2" fontWeight={800} fontSize="40px">
              Popular genres
            </Heading>
            <Box cursor="pointer">
              <Image src="../../icons/arrow-right-icon.svg" width={40} height={40} alt="More"/>
            </Box>
          </Flex>

          <Flex justifyContent='center' flexWrap="wrap" gap="25px 40px">
            {data.slice(0, 9).map((item: any, index: number) => (
              <GameCard 
                key={index}
                name={item.name}
                src={item.background_image}
                price={item.price}
                platforms={item.platforms}
              />
            ))}
          </Flex>
        </Box>
      </Box>

      <Box mb={'140px'}>
        <Box className="wrapper">
            <Heading as='h2' className="h2" fontWeight={800} fontSize="40px">
              Browse Charty
            </Heading>

            <Flex mt="30px" flexWrap="wrap" gap="15px 20px">
              <GameTag pathToIcon="../../icons/gamepad-icon.svg" text="Platforms" />
              <GameTag pathToIcon="../../icons/code-icon.svg" text="Developers" />
              <GameTag pathToIcon="../../icons/hashtag-icon.svg" text="Tags" />
              <GameTag pathToIcon="../../icons/publisher-icon.svg" text="Publisher" />
              <GameTag pathToIcon="../../icons/download-icon.svg" text="Stores" />
              <GameTag pathToIcon="../../icons/collection-icon.svg" text="Cellections" />
            </Flex>
        </Box>
      </Box>

      <Box mb="140px">
        <Box className="wrapper">
          <Flex mb='30px' justifyContent="space-between" alignItems='center'>
            <Heading as='h2' className="h2" fontWeight={800} fontSize="40px">
              What platform are you using ?
            </Heading>

            <Menu closeOnSelect={false}>
              <MenuButton 
              rightIcon={<Image src='/icons/arrow-bottom-icon.svg' width={20} height={20} alt="Arrow"/>}
              as={Button} 
              w="200px" 
              h="44px" 
              color={COLORS.white}
              _active={{ bg: COLORS.dark }}
              bg={COLORS.darkLight} 
              fontSize="16px"
              _hover={{bg: COLORS.dark}}>
                Platform
              </MenuButton>
              <MenuList minWidth='240px' bgColor={COLORS.darkLight} border={0}>
                <MenuOptionGroup title='Platform' type='checkbox' bgColor={COLORS.darkLight} color={COLORS.gray} fontWeight={400} transition={TRANSITIONS.mainTransition}>
                  <MenuItemOption value='pc' bgColor={COLORS.darkLight} color={COLORS.white} _hover={{bgColor: COLORS.whiteTransparentLight}} transition={TRANSITIONS.mainTransition}>PC</MenuItemOption>
                  <MenuItemOption value='xbox' bgColor={COLORS.darkLight} color={COLORS.white} _hover={{bgColor: COLORS.whiteTransparentLight}} transition={TRANSITIONS.mainTransition}>Xbox</MenuItemOption>
                  <MenuItemOption value='nintendo' bgColor={COLORS.darkLight} color={COLORS.white} _hover={{bgColor: COLORS.whiteTransparentLight}} transition={TRANSITIONS.mainTransition}>Nintendo</MenuItemOption>
                  <MenuItemOption value='ios' bgColor={COLORS.darkLight} color={COLORS.white} _hover={{bgColor: COLORS.whiteTransparentLight}} transition={TRANSITIONS.mainTransition}>iOS / macOS</MenuItemOption>
                  <MenuItemOption value='android' bgColor={COLORS.darkLight} color={COLORS.white} _hover={{bgColor: COLORS.whiteTransparentLight}} transition={TRANSITIONS.mainTransition}>Android</MenuItemOption>
                  <MenuItemOption value='linux' bgColor={COLORS.darkLight} color={COLORS.white} _hover={{bgColor: COLORS.whiteTransparentLight}} transition={TRANSITIONS.mainTransition}>Linux</MenuItemOption>
                </MenuOptionGroup>
                <MenuDivider borderColor={COLORS.whiteTransparentLight}/>
                <MenuOptionGroup title='' type='checkbox'>
                  <MenuItemOption isChecked value='desc' bgColor={COLORS.darkLight} color={COLORS.white} _hover={{bgColor: COLORS.whiteTransparentLight}} transition={TRANSITIONS.mainTransition}>Doesn't matter</MenuItemOption>
                </MenuOptionGroup>
              </MenuList>
            </Menu>
          </Flex>

          <Center flexWrap="wrap" gap="25px 40px">
            {data.slice(9, 15).map((item: any, index: number) => (
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
            <Divider w='1px' h="505px" orientation="vertical" borderColor={COLORS.whiteTransparentLight}/>
            <Flex maxW="961px" justifyContent="space-around" flexWrap="wrap" gap="25px 40px"> 
              {data.slice(15, 19).map((item: any, index: number) => (
                <GameCard 
                  key={index}
                  name={item.name}
                  src={item.background_image}
                  price={item.price}
                  platforms={item.platforms}
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

      <Footer/>
    </main>
  );
}

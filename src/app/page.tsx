'use client'

import Header from "@/components/Header/Header";
import styles from "./../styles/home.module.scss";
import Image from "next/image";
import GameCard from "@/components/GameCard";
import GameTag from "@/components/GameTag";
import { Box, Button, Center, Text, Divider, Flex, Heading, Menu, MenuButton, MenuDivider, MenuItemOption, MenuList, MenuOptionGroup } from "@chakra-ui/react";
import Option from "@/components/Option";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import getPlatformIcon from "@/utils/platform/getPlatformsIcon";
import { COLORS, TRANSITIONS } from "@/theme";
import GamesPreviewSlider from "@/components/GamesPreviewSlider";


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


const getRandomItems = <T,>(items: T[], length: number): T[] => {
  const randomItems = new Set<T>();
  while (randomItems.size < length && randomItems.size < items.length) {
    const index = Math.floor(Math.random() * items.length);
    randomItems.add(items[index]);
  }
  return Array.from(randomItems);
};

const cycleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  newArray.push(newArray.shift() as T);
  return newArray;
};

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
  


  const [sliderData, setSliderData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await fetch(`https://api.rawg.io/api/games?key=075adf73c6a94e9ba2447b842d0566d0&page_size=19&page=1`);
        const response = await request.json();
        setSliderData(response);
        getGames(response.results);
      } catch (error) {
        console.log(error)
      }
    }
  
    fetchData();
  }, []);

  
  const getGames = (games: Game[]) => {
    const randomItems = getRandomItems(games, 4);
    setSliderData(randomItems);
    console.log("🚀 ~ getGames ~ randomItems:", randomItems);
  };
  
  
  return (
    <main>
      <section className={styles.home}>
        <Header/>
        
        <div className="wrapper">
          <section className={styles.intro}>
            <div className={styles.intro__wrapper}>
              <div className={styles.intro__item_current}></div>
                <div className={styles.intro__preview}>
                  <div className={styles.intro__preview_container}>
                    {/* {randomGames.map((game, index) => (
                      <div className={styles.intro__item_preview} key={index}>
                        <p className={styles.intro__item_preview_text}>{game.name}</p>
                        <Image src={game.background_image} width={300} height={170} alt={game.name}/>
                      </div>
                    ))} */}

                    <div className={styles.intro__item_preview}>
                      {/* <p className={styles.intro__item_preview_text}>{game.name}</p> */}
                      {/* <Image src={game.background_image} width={300} height={170} alt={game.name}/> */}
                    </div>

                    <div className={styles.intro__item_preview}>
                      {/* <p className={styles.intro__item_preview_text}>{game.name}</p> */}
                      {/* <Image src={game.background_image} width={300} height={170} alt={game.name}/> */}
                    </div>

                    <div className={styles.intro__item_preview}>
                      {/* <p className={styles.intro__item_preview_text}>{game.name}</p> */}
                      {/* <Image src={game.background_image} width={300} height={170} alt={game.name}/> */}
                    </div>
                  </div>
                  <div className={styles.intro__btn}>
                    <span className={styles.intro__btn_text}>Go to the store</span>
                    <Image src="../../icons/arrow-right-icon.svg" width={30} height={30} alt="More"/>
                  </div>
                </div>
            </div>
          </section>
        </div>
      </section>


      {/* {sliderData.map((item: any, index: number) => (
        <Flex alignItems="end" p="10px 15px" w='300px' h='170px' borderRadius="10px" bgImage="linear-gradient(180deg, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.8) 100%), url('https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg')" bgSize="cover" bgPosition="center" >
          <Text fontWeight='800' fontSize='14' color={COLORS.grayLight}>
            <GameCard 
              key={index}
              name={item.name}
              src={item.background_image}
              price='Free'
              platforms={item.platforms}
            />
          </Text> 
        </Flex>
      ))} */}


      


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

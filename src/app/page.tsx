'use client'

import Header from "@/components/Header/Header";
import styles from "./../styles/home.module.scss";
import Image from "next/image";
import GameCard from "@/components/GameCard/GameCard";
import GameTag from "@/components/GameTag/GameTag";
import { Button, Menu, MenuButton, MenuDivider, MenuItemOption, MenuList, MenuOptionGroup } from "@chakra-ui/react";
import Option from "@/components/Option/Option";
import Footer from "@/components/Footer/Footer";
import { useEffect, useState } from "react";
import getPlatformIcon from "@/utils/platform/getPlatformsIcon";



export default function Home() {
  // const [randomPageData, setRandomPageData] = useState<any>([]);
  // const [randomGames, setRandomGames] = useState<any>([]);

  // useEffect(() => { 
  //   const fetchDataAsync = async () => {
  //     try {
  //       const randomPage = Math.floor(Math.random() * 100);
  //       const request = await fetch(`https://api.rawg.io/api/games?key=075adf73c6a94e9ba2447b842d0566d0&page=${randomPage}`);
  //       const response = await request.json();
  //       console.log(response);
  //       setRandomPageData(response);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   }

  //   fetchDataAsync();
  // }, []);

  // async function getRandomGame() {
  //   const newRandomGames: any[] = [];

  //   while (newRandomGames.length < 3) {
  //     const randomGameIndex = Math.floor(Math.random() * randomPageData.results.length);
  //     const randomGame = randomPageData.results[randomGameIndex];
  //     if (!newRandomGames.some(game => game.id === randomGame.id)) {
  //       newRandomGames.push(randomGame);
  //     }
  //   }

  //   setRandomGames(newRandomGames);
  //   console.log(newRandomGames);
  // }

  // useEffect(() => {
  //   getRandomGame();
  // }, [randomPageData]);


  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await fetch(`https://api.rawg.io/api/games?key=075adf73c6a94e9ba2447b842d0566d0&page_size=19&page=3`);
        const response = await request.json();
        setData(response.results);
        console.log(response.results);

        // getPlatform(response.results)
        //   .then((data: any) => {
        //     const platformsIcons = getPlatformIcon(data);
        //     console.log("DATA FNCK: ", platformsIcons);
        //   })

      } catch (error) {
        console.log(error)
      }
    }
  
    fetchData();
  }, []);
  

  // async function getPlatform(data: any[]) {
  //   if (data.length > 0) {
  //     let platformArray: any[] = [];

  //     for(let i = 0; i < data.length; i++) {
  //       for(let j = 0; j < data[i].platforms.length; j++) {
  //         const platformSlug = data[i].platforms[j].platform.slug;
  //         if (!platformArray.includes(platformSlug)) {
  //           platformArray.push(platformSlug);
  //         }
  //       }
  //     }
      
  //     return platformArray;
  //   }
  // }


  
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

      <section className={styles.popular}>
        <div className="wrapper">
          <div className={styles.popular__header}>
            <h2 className="h2">Popular genres</h2>
            <Image className={styles.popular__more_btn} src="../../icons/arrow-right-icon.svg" width={40} height={40} alt="More"/>
          </div>

          <div className={styles.popular__container}>
            {data.slice(0, 9).map((item: any, index: number) => (
              <GameCard 
                key={index}
                name={item.name}
                src={item.background_image}
                price={item.price}
                // platforms={item.platforms.map((platform: any) => platform.platform.slug)}
                platforms={item.platforms}
              />
            ))}
          </div>
        </div>
      </section>

      {/* <section className={styles.browse}> 
        <div className="wrapper">
          <h2 className="h2">Browse Charty</h2>
          <div className={styles.browse__container}>
            <GameTag pathToIcon="../../icons/gamepad-icon.svg" text="Platforms" />
            <GameTag pathToIcon="../../icons/code-icon.svg" text="Developers" />
            <GameTag pathToIcon="../../icons/hashtag-icon.svg" text="Tags" />
            <GameTag pathToIcon="../../icons/publisher-icon.svg" text="Publisher" />
            <GameTag pathToIcon="../../icons/download-icon.svg" text="Stores" />
            <GameTag pathToIcon="../../icons/collection-icon.svg" text="Cellections" />
          </div>
        </div>
      </section> */}

      {/* <section className={styles.platform}>
        <div className="wrapper">
          <div className={styles.platform__header}>
            <h2 className="h2">What platform are you using?</h2>

            <Menu closeOnSelect={false}>
              <MenuButton className={styles.platform__select} as={Button} colorScheme='blue'>
                Platform
              </MenuButton>
              <MenuList className={styles.platform__select_list} minWidth='240px'>
                <MenuOptionGroup className={styles.platform__select_title} defaultValue='asc' title='Platform' type='radio'>
                  <MenuItemOption isChecked className={styles.platform__select_item} value='asc'>Ascending</MenuItemOption>
                  <MenuItemOption className={styles.platform__select_item} value='desc'>Descending</MenuItemOption>
                </MenuOptionGroup>
                <MenuDivider className={styles.platform__select_line} />
                <MenuItemOption className={styles.platform__select_item} value='desc'>Doesn't matter</MenuItemOption>
              </MenuList>
            </Menu>
          </div>

          <div className={styles.platform__container}>
            {data.slice(9, 15).map((item: any, index: number) => (
              <GameCard 
                key={index}
                name={item.name}
                src={item.background_image}
                price={item.price}
                platforms={item.platforms.map((platform: any) => platform.platform.slug)}
              />
            ))}
          </div>
        </div>
      </section> */}


      {/* <section className={styles.category}>
        <div className="wrapper">
          <h2 className={`h2 ${styles.category__title}`}>Search by category</h2>

          <div className={styles.category__wrapper}>
            <div className={styles.category__list}>
              <Option isSelected={true} pathToIcon={"../../icons/category/wifi-icon.svg"} text={"Free Online"}/>
              <Option pathToIcon={"../../icons/category/lightning-icon.svg"} text={"Action"}/>
              <Option pathToIcon={"../../icons/category/chess-rook-icon.svg"} text={"Strategy"}/>
              <Option pathToIcon={"../../icons/category/shield-icon.svg"} text={"RPG"}/>
              <Option pathToIcon={"../../icons/category/scope-icon.svg"} text={"Shooter"}/>
              <Option pathToIcon={"../../icons/category/world-icon.svg"} text={"Adventure"}/>
              <Option pathToIcon={"../../icons/category/puzzle-icon.svg"} text={"Puzzle"}/>
              <Option pathToIcon={"../../icons/category/ball-icon.svg"} text={"Sports"}/>
              <Option pathToIcon={"../../icons/category/controller-icon.svg"} text={"Racing"}/>
            </div>

            <div className={styles.category__line}></div>

            <div className={styles.category__result}>
              {data.slice(15, 19).map((item, index) => (
                <GameCard 
                  key={index}
                  name={item.name}
                  src={item.background_image}
                  price={item.price}
                />
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className={styles.recommended}>
        <div className="wrapper">
          <h2 className={`h2 ${styles.recommended__title}`}>Were you interested in ?</h2>
          <div className={styles.recommended__wrapper}>
            {data.slice(19, 24).map((item, index) => (
              <GameCard 
                key={index}
                name={item.name}
                src={item.background_image}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </section> */}

      <Footer/>
    </main>
  );
}

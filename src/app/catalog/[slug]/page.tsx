"use client";

import Header from "@/components/header/Header";
import {
  Box,
  Divider,
  Flex,
  Heading,
  Link,
  Text,
  Image,
  Grid,
} from "@chakra-ui/react";
import { FaArrowLeftLong, FaStar } from "react-icons/fa6";
import React, { useEffect, useRef, useState } from "react";
import { COLORS, TRANSITIONS } from "@/theme";
import { Game } from "@/interface";
import { useParams } from "next/navigation";
import { RiExternalLinkLine } from "react-icons/ri";
import { gameDetails } from "@/api/gameDetails";
import { gameScreenshots } from "@/api/gameScreenshots";
import getRandomPrice from "@/utils/gameCard/getRandomPrice";
import GameSlider from "@/components/slider/GameSlider";
import { SwiperRef } from "swiper/react";
import FooterBtn from "@/components/footer/FooterBtn";
import RatingLinegrapth from "../../../components/RatingLinegrapth";
import { SiSteam, SiEpicgames, SiPlaystation, SiNintendoswitch, SiXbox, SiAppstore, SiGoogledisplayandvideo360   } from "react-icons/si";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import Footer from "@/components/footer/Footer";


const GamePage = () => {
  const { slug } = useParams();
  const [data, setData] = useState<Game>();
  const [swiperHeight, setSwiperHeight] = useState<number>(0);

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

  const watchSwiper = useRef<SwiperRef>(null);

  // Function to log the height of the Swiper container
  const logSwiperHeight = () => {
    if (watchSwiper.current) {
      setSwiperHeight(watchSwiper.current.clientHeight);
    }
  };

  useEffect(() => {
    // Log initial height
    logSwiperHeight();

    // Set up interval to update swiper height every 3 seconds
    const intervalId = setInterval(() => {
      logSwiperHeight();
    }, 2000);

    // Set up event listener for window resize
    const handleResize = () => {
      logSwiperHeight();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup interval and event listener on component unmount
    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const getStoreIcon = (storeSlug: string) => {
    switch (storeSlug) {
      case "steam":
        return <SiSteam size="26px" />;
      case "epic-games":
        return <SiEpicgames size="26px" />;
      case "playstation-store":
        return <SiPlaystation size="26px" />;
      case "nintendo":
        return <SiNintendoswitch size="26px" />;
      case "xbox360":
      case "xbox-store":
        return <SiXbox size="26px" />;
      case "apple-appstore":
        return <SiAppstore size="26px" />;
      case "google-play":
        return <SiGoogledisplayandvideo360 size="26px" />;
      default:
        return <GiPerspectiveDiceSixFacesRandom size="26px" />;
    }
  }

  return (
    <>
      <Header />

      <Box className="wrapper" mt="60px">
        <Flex direction={{base: 'column', md: 'row'}} justifyContent={{base: 'center', md: "space-between"}} mb="40px" rowGap='24px'>
          <Flex
            as={Link}
            href="/catalog"
            textDecoration="none"
            columnGap="20px"
            alignItems="center"
            justifyContent={{base: 'center', md: 'start'}}
            transition={TRANSITIONS.mainTransition}
            _hover={{
              textDecoration: "none",
              pl: "10px",
              transition: TRANSITIONS.mainTransition,
            }}
          >
            <FaArrowLeftLong size="30px" />
            <Text fontSize="28px" fontWeight="700" >
              Store
            </Text>
          </Flex>

          <Heading as="h2" fontSize={{base: "32px", lg: "40px"}} fontWeight="700" textAlign={{base: 'center', md: 'right'}}>
            {data?.name}
          </Heading>
        </Flex>

        {/* Game slider & about */}
        <Flex
          direction={{base: 'column', lg: 'row'}}
          h="100%"
          justifyContent="space-between"
          columnGap="30px"
          mb="40px"
          rowGap='24px'
        >
          <Box w={{base: "100%", lg: '60%', xl: "70%"}} h="fit-content">
            {data && data.short_screenshots && (
              <GameSlider
                short_screenshots={data.short_screenshots}
                watchSwiper={watchSwiper}
                onSwiperReady={logSwiperHeight}
              />
            )}
          </Box>

          <Box w={{base: "100%", lg: "40%", xl: '30%'}} h="100%">
            <Box
              borderRadius="10px"
              h={{base: "300px", lg: `${swiperHeight === 0 ? "100%" : `${swiperHeight}px`}`}}
              bgColor={COLORS.dark}
              px="20px"
              py="24px"
            >
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
                h="calc(100% - 51px)"
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
                  "::-webkit-scrollbar-button": {
                    display: "none",
                  },
                  "::-webkit-scrollbar-thumb:hover": {
                    background: COLORS.blueHover,
                  },
                }}
              >
                <Text
                  fontSize="15px"
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
          </Box>
        </Flex>

        <Flex justifyContent="space-between" direction={{base: 'column', lg: 'row'}} alignItems="center" mb="80px" rowGap='24px'>
          {/* Game left side, under slider */}
          <Flex
            w={{base: "100%", lg: "60%", xl: "70%"}}
            justifyContent="space-between"
            alignItems="center"
            direction={{base: 'column', md: 'row'}}
            rowGap='16px'
            columnGap="24px"
          >
            <Flex columnGap="20px" direction={{base: 'column', sm: 'row'}} textAlign={{base: 'center', sm: 'start'}} justifyContent={{base: 'center', sm: 'start'}} rowGap='8px'>
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

              <Flex flexDirection='column' >
                <Flex alignItems="center" columnGap="6px" mb="5px" justifyContent={{base: 'center', sm: 'start'}} >
                  <Text fontSize="20px" fontWeight="700">
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
              </Flex>

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

          {/* Game right side, under about */}
          <Flex
            w={{base: "100%", lg: "calc(40% - 30px)", xl: 'calc(30% - 30px)'}}
            bg={COLORS.darkLight}
            columnGap="24px"
            h="60px"
            px="20px"
            borderRadius="10px"
            justifyContent="space-between"
            alignItems="center"
            cursor='pointer'
          >
            <Text fontSize={{base: "16px", sm: "20px"}} fontWeight="700">
              ${data?.price}
            </Text>
            <Flex columnGap="15px" alignItems="center">
              <Text fontSize={{base: "16px", sm: "20px"}} fontWeight="600" textAlign='right'>
                Add to cart
              </Text>
              <Image src="/icons/bag-icon.svg" alt="cart" w="24px" h="24px" />
            </Flex>
          </Flex>
        </Flex>

        <Flex mb={{base: "40px", lg: '100px'}} direction={{base: 'column', lg: 'row'}} justifyContent="space-between" rowGap='24px'>
          {/* LEFT COLUMN */}
          <Box w={{base: "100%", lg: "60%", xl: "70%"}}>
            <Box mb="30px">
              <RatingLinegrapth rating={data?.ratings || []} />
            </Box>

            <Grid gridTemplateColumns={{base: '1fr', md: 'repeat(2, 1fr)'}} alignSelf={{base: "center", md: 'start'}} justifyItems={{base: "center", md: 'start'}} textAlign={{base: "center", md: 'start'}} rowGap='10px'>
              <Box>
                <Text mb='5px' fontWeight='600' color={COLORS.gray} fontSize='16px'>Platform</Text>
                {data?.platforms.map((platform, index) => (
                  <>
                    <Box key={index} as="span">{platform.platform.name}</Box>
                    {index < data.platforms.length - 1 && ', '}
                  </>
                ))}
              </Box>

              <Box>
                <Text mb='5px' fontWeight='600' color={COLORS.gray} fontSize='16px'>Genre</Text>
                {data?.genres.map((genre, index) => (
                  <>
                    <Box key={index} as="span">{genre.name}</Box>
                    {index < data.genres.length - 1 && ', '} 
                  </>
                ))}
              </Box>

              <Box>
                <Text mb='5px' fontWeight='600' color={COLORS.gray} fontSize='16px'>Developers</Text>
                {data?.developers.map((developer, index) => (
                  <>
                    <Box key={index} as="span">{developer.name}</Box>
                    {index < data.developers.length - 1 && ', '} 
                  </>
                ))}
              </Box>

              <Box>
                <Text mb='5px' fontWeight='600' color={COLORS.gray} fontSize='16px'>Metascore</Text>
                <Box as="span">{data?.metacritic}</Box>
              </Box>

              
              <Box>
                <Text mb='5px' fontWeight='600' color={COLORS.gray} fontSize='16px'>Release date</Text>
                <Box as="span">{data?.released}</Box>
              </Box>

              <Box>
                <Text mb='5px' fontWeight='600' color={COLORS.gray} fontSize='16px'>Publishers</Text>
                {data?.publishers.map((publisher, index) => (
                  <>
                    <Box key={index} as="span">{publisher.name}</Box>
                    {index < data.publishers.length - 1 && ', '} 
                  </>
                ))}
              </Box>

              <Box>
                <Text mb='5px' fontWeight='600' color={COLORS.gray} fontSize='16px'>Website</Text>
                <Link href={data?.website} target="_blank">{data?.website}</Link>
              </Box>

              {/* <Box>
                <Text mb='5px' fontWeight='600' color={COLORS.gray} fontSize='16px'>Tags</Text>
                {data?.tags.map((tag, index) => (
                  <>
                    <Box key={tag.id} as="span">{tag.name}</Box>
                    {index < data.tags.length - 1 && ', '} 
                  </>
                ))}
              </Box> */}
            </Grid>
          </Box>
          <Box w={{base: "100%", lg: "calc(40% - 30px)", xl: 'calc(30% - 30px)'}} justifyContent={{base: "center", md: 'start'}}>
            <Flex flexWrap='wrap' gap='10px' justifyContent={{base: "center", md: 'start'}}>
              {data?.stores.map((store, index) => (
                <Link key={index} href={`https://${store.store.domain}`} target="_blank" h='44px' display='flex' alignItems='center' px='20px' bg={COLORS.darkLight} borderRadius='10px' transition={TRANSITIONS.mainTransition} _hover={{ textDecoration: "none", bg: COLORS.darkSoft, transition: TRANSITIONS.mainTransition }}>
                  {getStoreIcon(store.store.slug)}
                  <Text ml='10px' key={index} fontSize='16px' fontWeight='600'>{store.store.name}</Text>
                </Link>
              ))}
            </Flex>
          </Box>
        </Flex>
      </Box>

      <Footer />
    </>
  );
};

export default GamePage;

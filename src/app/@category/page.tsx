import GamePreviewCard from '@/components/cards/GamePreviewCard'
import { COLORS } from '@/theme'
import { Box, Heading, Flex, Grid, Divider } from '@chakra-ui/react'
import Option from '@/components/Option'
import React, { useEffect, useState } from 'react'
import { GameCardHome } from '@/interface'
import { loadGames } from '@/utils/loadGames'
import Loading from './loading'
import Error from './error'

export default function Category() {
  const [data, setData] = useState<GameCardHome[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const anotherGames = await loadGames({ page_size: 4, page: 15 }) as GameCardHome[];
        setData(anotherGames);
      } catch (error) {
        console.error("Failed to fetch games:", error);
        setError("Failed to load games. Please try again later.");
      } finally {
        setIsLoading(false);
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
    

  if(isLoading) {
    return <Loading />
  }

  if(error) {
    return <Error />
  }

  return (
    <Box mb="140px">
      <Box className="wrapper">
        <Heading
          as="h2"
          fontWeight={800}
          fontSize={{ base: "28px", md: "32px", lg: "40px" }}
          mb="30px"
        >
          Search by category
        </Heading>

        <Flex
          w="100%"
          h="100%"
          justifyContent={{ base: "center", "1300px": "space-between" }}
          flexDirection={{ base: "column", "1300px": "row" }}
          gap="40px 20px"
        >
          <Grid
            gridTemplateColumns={{
              base: "auto",
              sm: "repeat(auto-fill, minmax(260px, 1fr))",
              "1300px": "auto",
            }}
            flexDirection="column"
            gap="5px 20px"
          >
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
            display={{ base: "none", "1300px": "block" }}
            orientation="vertical"
            borderColor={COLORS.whiteTransparentLight}
          />

          <Grid
            gridTemplateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
            }}
            maxW="961px"
            w='100%'
            justifyContent="space-around"
            flexWrap="wrap"
            gap="25px 40px"
            m={{ base: "0", sm: "0 auto", "1300px": "0" }}
          >
            {data &&
              data.map(
                (
                  { id, name, background_image, platforms, price, slug },
                ) => (
                  <GamePreviewCard
                    key={id}
                    name={name}
                    src={background_image}
                    price={price}
                    platforms={platforms}
                    width="100%"
                    href={`/catalog/${slug}`}
                  />
                )
              )}
          </Grid>
        </Flex>
      </Box>
    </Box>
  );
}

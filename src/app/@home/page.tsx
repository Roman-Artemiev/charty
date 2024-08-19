import GamePreviewCard from "@/components/cards/GamePreviewCard";
import { GameCardHome } from "@/interface";
import { TRANSITIONS } from "@/theme";
import getRandomItems from "@/utils/getRandomItem";
import { loadGames } from "@/utils/loadGames";
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Loading from "./loading";
import Error from "./error";

export default function HomeSection() {
  const [games, setGames] = useState<GameCardHome[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const homeGames = await loadGames({ page_size: 20, page: 1 }) as GameCardHome[];
        const games = getRandomItems(homeGames, 4) as GameCardHome[];
        setGames(games);
      } catch (error) {
        console.error("Failed to fetch games:", error);
        setError("Failed to load games. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if(isLoading) {
    return <Loading />
  }

  if(error) {
    return <Error />
  }

  return (
    <Box className="wrapper" h="100%">
      <Flex
        h={{ base: "calc(100% - 115px)", "840px": "calc(100% - 65px)" }}
        alignItems="center"
        flex="1 1"
      >
        <Grid
          display="grid"
          columnGap={{ base: "20px", md: "30px" }}
          rowGap={{ base: "20px", md: "25px" }}
          h="calc(100% - 60px)"
          gridTemplateColumns={{
            base: "repeat(3, 1fr)",
            lg: "1fr max(26.5%, 170px)",
          }}
          gridTemplateRows={{
            base: "1fr max(10%, 130px) min-content",
            lg: "repeat(3, 1fr) min-content",
          }}
          flex="1 1"
          _last={{ alignItems: "end" }}
        >
          {games &&
            games.map(
              (
                { id, name, background_image, platforms, price, slug },
                index
              ) => (
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
              )
            )}

          <Flex
            as={Link}
            href="/catalog"
            pt={{ base: "0", lg: "15px" }}
            alignItems="center"
            justifyContent={{ base: "center", lg: "flex-start" }}
            columnGap="20px"
            cursor="pointer"
            gridColumn={{ base: "1 / 4", lg: "2 / 3" }}
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
          </Flex>
        </Grid>
      </Flex>
    </Box>
  );
}

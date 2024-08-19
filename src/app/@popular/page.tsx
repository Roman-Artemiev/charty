import GamePreviewCard from "@/components/cards/GamePreviewCard";
import { GameCardHome } from "@/interface";
import { loadGames } from "@/utils/loadGames";
import { Box, Flex, Grid, Heading, Link, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Loading from "./loading";
import Error from "./error";

export default function Popular() {
  const [data, setData] = useState<GameCardHome[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const anotherGames = (await loadGames({
          page_size: 9,
          page: 5,
        })) as GameCardHome[];
        setData(anotherGames);
      } catch (error) {
        console.error("Failed to fetch games:", error);
        setError("Failed to load games. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);


  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <Box mb="140px">
      <Box className="wrapper">
        <Flex
          mb="30px"
          justifyContent="space-between"
          alignItems="center"
          columnGap="20px"
        >
          <Heading
            as="h2"
            fontWeight={800}
            fontSize={{ base: "28px", md: "32px", lg: "40px" }}
          >
            Popular
          </Heading>
          <Box as={Link} href="/catalog" cursor="pointer">
            <Image
              src="../../icons/arrow-right-icon.svg"
              width='40px'
              height='40px'
              alt="More"
            />
          </Box>
        </Flex>

        <Grid
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap="25px 40px"
        >
          {data &&
            data.map(
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
                    width="100%"
                    href={`/catalog/${slug}`}
                  />
                )
              )}
        </Grid>
      </Box>
    </Box>
  );
}

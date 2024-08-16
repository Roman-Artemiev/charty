"use client";

import GamePreviewCard from '@/components/cards/GamePreviewCard';
import Header from '@/components/header/Header';
import { GameCardHome } from '@/interface';
import { loadGames } from '@/utils/loadGames';
import { Box, Center, Grid, Heading, Text } from '@chakra-ui/react';
import { usePathname, useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'


const page = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get('search');
  const pathname = usePathname();
  console.log("🚀 ~ searchParams:", search)
  console.log("🚀 ~ Pathname:", pathname)

  const [data, setData] = useState<GameCardHome[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const fetchGames = async (page: number) => {
    const games = (await loadGames({
      page_size: 50,
      page: page,
      search: search as string
    })) as GameCardHome[];
    setData(games);
    console.log("🚀 ~ games:", games);
  };

  useEffect(() => {
    fetchGames(1);
  }, [search]);


  return (
    <>
      <Header />

      <Box className="wrapper" h='100%' mt="60px">
        <Box mb="50px">
          <Heading as="h1" mb="5px" fontSize="40px" fontWeight="800">
            Search result
          </Heading>

          <Text mb="30px" fontSize="16px">
            Based on you search request "{search === "" ? 'nothing, so try to look for something' : search}"
          </Text>
        </Box>

        <Grid gridTemplateColumns={{base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)'}} gap="25px 40px" pb='60px'>
            {data && data.map(({ id, name, background_image, platforms, price, slug }, index) => (
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


        {data.length === 0 && (
          <Text textAlign='center' w='100%' h='100%' fontSize='20px' fontWeight='500'>No games found.</Text>
        )}
      </Box>
    </>
  )
}

export default page
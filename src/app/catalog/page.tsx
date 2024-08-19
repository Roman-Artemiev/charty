"use client";

import Header from "../../components/nav/Header";
import { Box, Heading, Text, Flex, Grid } from "@chakra-ui/react";
import React, { lazy, useEffect, useRef, useState } from "react";
import { GameCardHome, User } from "../../interface";
import { loadGames } from "../../utils/loadGames";

const GameCatalogCard = lazy(
  () => import("../../components/cards/GameCatalogCard")
);
let pageNum = 2;

const Catalog = () => {  
  const [refreshHeader, setRefreshHeader] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User>({
    id: '',
    name: '',
    email: '',
    password: '',
    games: [],
    wishlist: [],
  });
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const [data, setData] = useState<GameCardHome[]>([]);
  const [column, setColumn] = useState<number>(4);
  const [loading, setLoading] = useState<boolean>(false);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const fetchGames = async (page: number) => {
    setLoading(true);
    const games = (await loadGames({
      page_size: 12,
      page: page,
    })) as GameCardHome[];
    setData((prevData) => [...prevData, ...games]);
    // console.log("🚀 ~ games:", games);
    setLoading(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !loading) {
          fetchGames(pageNum);
          pageNum++;
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [loading]);

  useEffect(() => {
    const isUserloggedIn = JSON.parse(localStorage.getItem("isLoggedIn") || '[false, ""]');
    const users = JSON.parse(localStorage.getItem("users") || '[]');
    setUsers(users);
    const searchedUser = users.filter((user: any) => user.id === isUserloggedIn[1]);
    setUser(searchedUser[0]);
    setIsLoggedIn(isUserloggedIn[0]);
  }, []);


  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [columnCount, setColumnCount] = useState<number>(4);

  const columnSetting = (windowWidthCurrent: number) => {
    const minCarWidth = 320;
    const columnCardPerScreen =
      Math.floor(windowWidthCurrent / minCarWidth) || 1;
    // console.log(windowWidthCurrent, "DEFAULT: ", columnCardPerScreen, "FLOOR: ", );
    return columnCardPerScreen > 4 ? 4 : columnCardPerScreen;
  };


  useEffect(() => {
    // Ensure this code runs only on the client side
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  
  const handleAddToCart = (id: number, name: string, price: string, slug: string) => {
    if (!isLoggedIn) return alert("Please sign in to add or remove from cart");
  
    if (user) {
      const isGameAlreadyInCart = user.games.some((game) => game.id === id);
  
      if (isGameAlreadyInCart) {
        // Remove the game from the cart
        const updatedGames = user.games.filter((game) => game.id !== id);
        const updatedUser = { ...user, games: updatedGames };
  
        // Update the user data in state and local storage
        setUser(updatedUser);
        const updatedUsers = users.map((existingUser: User) =>
          existingUser.id === updatedUser.id ? updatedUser : existingUser
        );
  
        setRefreshHeader(!refreshHeader);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
      } else {
        // Add the game to the cart
        const updatedUser = { ...user, games: [...user.games, { id, name, price, slug }] };
  
        // Update the user data in state and local storage
        setUser(updatedUser);
        const updatedUsers = users.map((existingUser: User) =>
          existingUser.id === updatedUser.id ? updatedUser : existingUser
        );
  
        setRefreshHeader(!refreshHeader);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
      }
    }
  };

  return (
    <>
      <Header refreshHeader={refreshHeader} />

      <Box className="wrapper" mt="60px">
        <Box mb="50px">
          <Heading as="h1" mb="5px" fontSize="40px" fontWeight="800">
            New and trending
          </Heading>

          <Text mb="30px" fontSize="16px">
            Based on player counts and release date
          </Text>
        </Box>

        <Grid
          gap="30px"
          gridTemplateColumns={`repeat(${columnCount}, 1fr)`}
          gridAutoFlow="row"
        >
          {Array.from({ length: columnCount }).map((_, columnIndex) => {
            const itemsPerColumn = Math.floor(data?.length / columnCount);

            const startIndex = columnIndex * itemsPerColumn;
            const endIndex = Math.min(
              startIndex + itemsPerColumn,
              data?.length
            );
            const columnData = data?.slice(startIndex, endIndex);

            return (
              <Flex key={columnIndex} gap="30px" flexDirection="column">
                {columnData?.map(
                  ({
                    id,
                    name,
                    background_image,
                    platforms,
                    price,
                    genres,
                    released,
                    rating,
                    slug,
                  }) => (
                    <GameCatalogCard
                      key={id}
                      id={id}
                      name={name}
                      src={background_image}
                      price={price}
                      platforms={platforms}
                      genres={genres}
                      released={released}
                      rating={rating}
                      href={`/catalog/${slug}`}
                      handleAddToCart={() => handleAddToCart(id, name, price, slug)}
                      isInCart={user?.games?.some((game) => game.id === id)}
                    />
                  )
                )}
              </Flex>
            );
          })}
          <div ref={loadMoreRef} style={{ height: "50px" }}></div>
        </Grid>
      </Box>
    </>
  );
};

export default Catalog;

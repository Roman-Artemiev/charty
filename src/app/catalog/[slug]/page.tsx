"use client";

import Header from "../../../components/nav/Header";
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
import React, { useEffect, useState } from "react";
import { COLORS, TRANSITIONS } from "../../../theme";
import { Game, User } from "../../../interface";
import { useParams } from "next/navigation";
import { RiExternalLinkLine } from "react-icons/ri";
import { gameDetails } from "../../../api/gameDetails";
import { gameScreenshots } from "../../../api/gameScreenshots";
import getRandomPrice from "../../../utils/gameCard/getRandomPrice";
import GameSlider from "../../../components/slider/GameSlider";
import FooterBtn from "../../../components/footer/FooterBtn";
import RatingLinegrapth from "../../../components/RatingLinegrapth";
import { SiSteam, SiEpicgames, SiPlaystation, SiNintendoswitch, SiXbox, SiAppstore, SiGoogledisplayandvideo360   } from "react-icons/si";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import Footer from "../../../components/footer/Footer";
import Loading from "./loading";
import Error from "./error";


const Page = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
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
  const { slug } = useParams();
  const [data, setData] = useState<Game>();
  useEffect(() => {
    const isUserloggedIn = JSON.parse(localStorage.getItem("isLoggedIn") || '[false, ""]');
    const users = JSON.parse(localStorage.getItem("users") || '[]');
    setUsers(users);
    const searchedUser = users.filter((user: any) => user.id === isUserloggedIn[1]);
    setUser(searchedUser[0]);
    setIsLoggedIn(isUserloggedIn[0]);
  }, []);


  useEffect(() => {
    const fetchGameDetails = async () => {
      if (typeof slug === 'string') {
        try {
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
          setLoading(true);
          // console.log("🚀 ~ game:", game);
        } catch (error) {
          console.error("Failed to fetch game details:", error);
        } finally {
          setLoading(false);
        }
      } else {
        console.error("Slug is not a string.");
      }
    };
    
    fetchGameDetails();
  }, [slug]);

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


  const handleAddToCart = (isCart: boolean, id: number, name: string | undefined, price: string | undefined, slug: string | undefined) => {
    if (!isLoggedIn) return alert("Please sign in to add or remove from cart");
    const userData = isCart ? user.games : user.wishlist;
    const updateKey = isCart ? 'games' : 'wishlist';

    if (user) {
      const isGameAlreadyInCart = userData.some((game) => game.id === id);
  
      if (isGameAlreadyInCart) {
        // Remove the game from the cart
        const updatedGames = userData.filter((game) => game.id !== id);
        const updatedUser = { ...user, [updateKey]: updatedGames };
  
        // Update the user data in state and local storage
        setUser(updatedUser);
        const updatedUsers = users.map((existingUser: User) =>
          existingUser.id === updatedUser.id ? updatedUser : existingUser
        );
  
        setRefreshHeader(!refreshHeader);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
      } else {
        // Add the game to the cart
        const updatedUser = { ...user, [updateKey]: [...userData, { id, name, price, slug }] };
  
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

  if(loading) return <Loading />;
  if(error) return <Error />;


  return (
    <>
      <Header refreshHeader={refreshHeader} />

      <Loading />

      <Footer />
    </>
  );
};

export default Page;

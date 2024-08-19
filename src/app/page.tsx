"use client";

import Header from "../components/nav/Header";
import Image from "next/image";
import GamePreviewCard from "@/components/cards/GamePreviewCard";
import {
  Box,
  Text,
  Divider,
  Flex,
  Heading,
  Grid,
  Link
} from "@chakra-ui/react";
import Option from "@/components/Option";
import Footer from "@/components/footer/Footer";
import { useEffect, useState } from "react";
import { COLORS, TRANSITIONS } from "@/theme";
import getRandomItems from "@/utils/getRandomItem";
import { GameCardHome } from "@/interface";
import { loadGames } from "@/utils/loadGames";
import React from "react";
import HomeSection from "./@home/page";
import Popular from "./@popular/page";
import Category from "./@category/page";


export default function Home() {
  const [data, setData] = useState<GameCardHome[] | undefined>(undefined);

  useEffect(() => {
    (async () => {
      try {
        const anotherGames = await loadGames({ page_size: 20, page: 2 }) as GameCardHome[];
        setData(anotherGames);
      } catch (error) {
        console.error("Failed to fetch games:", error);
      }
    })();
  }, []);



  // Games by PLATFORMS
  const [selectedPlatformsGames, setSelectedPlatformsGames] = useState<any[]>();
  const [selectedPlatforms, setSelectedPlatforms] = useState<number[]>([]);
  const [isPlatformPopupOpen, setIsPlatformPopupOpen] = useState<boolean>(false);
  const platformOptions = [
    {slug: 'pc', name: 'PC', id: 4 }, 
    {slug: 'xbox', name: 'Xbox', id: 14 }, 
    {slug: 'playstation', name: 'PlayStation', id: 18 }, 
    {slug: 'nintendo', name: 'Nintendo', id: 7 }, 
    {slug: 'ios', name: 'iOS / macOS', id: 3 }, 
    {slug: 'android', name: 'Android', id: 21 }, 
  ]

  const handlePlatformPopupClick = () => {
    setIsPlatformPopupOpen((prev) => !prev);
  }

  const handlePlatformOptionClick = (id: number) => {
    setSelectedPlatforms((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id]
    );
    console.log(id);
    console.log(selectedPlatforms);
  };



  return (
    <>
      <Box w="100%" h="100vh" minH='600px' mb="140px">
        <Header />
        <HomeSection />
      </Box>
      
      <Popular />
      <Category />
      <Footer />
    </>
  );
}

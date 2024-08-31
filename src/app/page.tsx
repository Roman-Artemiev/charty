"use client";

import React from "react";
import HomeSection from "./../components/sections/home/page";
import PopularSection from "./../components/sections/popular/page";
import CategorySection from "./../components/sections/category/page";
import { Box } from "@chakra-ui/react";
import Footer from "@/components/footer/Footer";
import Header from "@/components/nav/Header";

export default function Home() {
  return (
    <Box>
      <Box w="100%" h="100vh" minH='600px' mb="140px">
        <Header />
        <HomeSection />
      </Box>

      <PopularSection />
      <CategorySection />
      <Footer />
    </Box>
  );
}
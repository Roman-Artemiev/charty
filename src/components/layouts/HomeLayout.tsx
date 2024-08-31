import React from "react";
import { Box } from "@chakra-ui/react";
import Footer from "../footer/Footer";
import Header from "../nav/Header";

const HomeLayout = ({
  home,
  popular,
  category,
}: {
  home: React.ReactNode;
  popular: React.ReactNode;
  category: React.ReactNode;
}) => {
  return (
    <>
      <Box w="100%" h="100vh" minH="600px" mb="140px">
        <Header />
        {home}
      </Box>
      {popular}
      {category}
      <Footer />
    </>
  );
};

export default HomeLayout;

"use client";

import Header from "@/components/nav/Header";
import { Box, Heading, Text, Spinner, Flex } from "@chakra-ui/react";
import React from "react";

const loading = () => {
  return (
    <>
      <Header />

      <Box className="wrapper" mt="60px">
        <Box mb="50px">
          <Heading as="h1" mb="5px" fontSize="40px" fontWeight="800">
            New and trending
          </Heading>

          <Text mb="30px" fontSize="16px">
            Based on player counts and release date
          </Text>
        </Box>


        <Flex justifyContent='center' mt='50px'>
          <Spinner w='50px' h='50px' />
        </Flex>
      </Box>
    </>
  );
};

export default loading;

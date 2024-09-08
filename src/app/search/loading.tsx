"use client";

import Header from "@/components/nav/Header";
import { Box, Flex, Heading, Spinner, Text } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import React from "react";

const loading = () => {
  return (
    <>
      <Header />

      <Box className="wrapper" h="100%" mt="60px">
        <Box mb="50px">
          <Heading as="h1" mb="5px" fontSize="40px" fontWeight="800">
            Search result
          </Heading>

          <Text mb="30px" fontSize="16px">
            {`Based on your search request`}
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

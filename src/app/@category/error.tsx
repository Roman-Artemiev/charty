"use client";

import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Error() {
  return (
    <Box mb="140px">
      <Box className="wrapper">
        <Heading
          as="h2"
          fontWeight={800}
          fontSize={{ base: "28px", md: "32px", lg: "40px" }}
          mb="30px"
        >
          Search by category
        </Heading>

        <Text fontSize="16px">
          Failed to load games. Please try again later or reload page.
        </Text>
      </Box>
    </Box>
  );
}

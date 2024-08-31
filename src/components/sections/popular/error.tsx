"use client";

import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function Error() {
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
              width="40px"
              height="40px"
              alt="More"
            />
          </Box>
        </Flex>

        <Text fontSize="16px">
          Failed to load games. Please try again later or reload page.
        </Text>
      </Box>
    </Box>
  );
}

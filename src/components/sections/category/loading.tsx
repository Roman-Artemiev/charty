"use client";

import { COLORS } from "@/theme";
import { Box, Heading, Flex, Grid, Divider, Skeleton } from "@chakra-ui/react";
import Option from "@/components/Option";
import React from "react";

export default function Loading() {
  const skeletons = Array.from({ length: 4 });
  const categoryOptions = [
    { isSelected: true, pathToIcon: "../../icons/category/wifi-icon.svg", text: "Free Online", },
    { pathToIcon: "../../icons/category/lightning-icon.svg", text: "Action" },
    { pathToIcon: "../../icons/category/chess-rook-icon.svg", text: "Strategy",},
    { pathToIcon: "../../icons/category/shield-icon.svg", text: "RPG" },
    { pathToIcon: "../../icons/category/scope-icon.svg", text: "Shooter" },
    { pathToIcon: "../../icons/category/world-icon.svg", text: "Adventure" },
    { pathToIcon: "../../icons/category/puzzle-icon.svg", text: "Puzzle" },
    { pathToIcon: "../../icons/category/ball-icon.svg", text: "Sports" },
    { pathToIcon: "../../icons/category/controller-icon.svg", text: "Racing" },
  ];

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

        <Flex
          w="100%"
          h="100%"
          justifyContent={{ base: "center", "1300px": "space-between" }}
          flexDirection={{ base: "column", "1300px": "row" }}
          gap="40px 20px"
        >
          <Grid
            gridTemplateColumns={{
              base: "auto",
              sm: "repeat(auto-fill, minmax(260px, 1fr))",
              "1300px": "auto",
            }}
            flexDirection="column"
            gap="5px 20px"
          >
            {categoryOptions.map((option, index) => (
              <Option
                key={index}
                href="/catalog"
                isSelected={option.isSelected || false}
                pathToIcon={option.pathToIcon}
                text={option.text}
              />
            ))}
          </Grid>

          <Divider
            w="1px"
            h="505px"
            display={{ base: "none", "1300px": "block" }}
            orientation="vertical"
            borderColor={COLORS.whiteTransparentLight}
          />

          <Grid
            w="100%"
            gridTemplateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
            }}
            maxW="961px"
            justifyContent="space-around"
            flexWrap="wrap"
            gap="25px 40px"
            m={{ base: "0", sm: "0 auto", "1300px": "0" }}
          >
            {skeletons.map((_, index) => (
              <Skeleton
                key={index}
                w="100%"
                h={{
                  base: "180px",
                  sm: "160px",
                  md: "180px",
                  lg: "180px",
                  xl: "240px",
                }}
                startColor={COLORS.darkLight}
                endColor={COLORS.darkSoft}
                borderRadius="10px"
              />
            ))}
          </Grid>
        </Flex>
      </Box>
    </Box>
  );
}

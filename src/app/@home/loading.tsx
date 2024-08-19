"use client";
import { COLORS, TRANSITIONS } from "@/theme";
import { Box, Flex, Grid, Image, Skeleton, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function Loading() {
  return (
    <Box className="wrapper" h="100%">
      <Flex
        h={{ base: "calc(100% - 115px)", "840px": "calc(100% - 65px)" }}
        alignItems="center"
        flex="1 1"
      >
        <Grid
          display="grid"
          columnGap={{ base: "20px", md: "30px" }}
          rowGap={{ base: "20px", md: "25px" }}
          h="calc(100% - 60px)"
          gridTemplateColumns={{
            base: "repeat(3, 1fr)",
            lg: "1fr max(26.5%, 170px)",
          }}
          gridTemplateRows={{
            base: "1fr max(10%, 130px) min-content",
            lg: "repeat(3, 1fr) min-content",
          }}
          flex="1 1"
          _last={{ alignItems: "end" }}
        >
          <Skeleton borderRadius="10px" w='100%' h='100%' gridRowStart='1' gridRowEnd='4' gridRow={{ base: '1 / 2', lg: '1 / 5' }} gridColumn={{ base: '1 / 4', lg: 'auto' }} startColor={COLORS.darkLight} endColor={COLORS.darkSoft} />
          <Skeleton borderRadius="10px" w='100%' h='100%' startColor={COLORS.darkLight} endColor={COLORS.darkSoft} />
          <Skeleton borderRadius="10px" w='100%' h='100%' startColor={COLORS.darkLight} endColor={COLORS.darkSoft} />
          <Skeleton borderRadius="10px" w='100%' h='100%' startColor={COLORS.darkLight} endColor={COLORS.darkSoft} />

          <Flex
            as={Link}
            href="/catalog"
            pt={{ base: "0", lg: "15px" }}
            alignItems="center"
            justifyContent={{ base: "center", lg: "flex-start" }}
            columnGap="20px"
            cursor="pointer"
            gridColumn={{ base: "1 / 4", lg: "2 / 3" }}
            transition={TRANSITIONS.mainTransition}
            _hover={{
              columnGap: "30px",
              transition: TRANSITIONS.mainTransition,
            }}
          >
            <Text fontSize="24px" fontWeight={700}>
              Go to the store
            </Text>

            <Image
              src="/icons/arrow-right-icon.svg"
              width={34}
              height={34}
              alt="Arrow"
            />
          </Flex>
        </Grid>
      </Flex>
    </Box>
  );
}

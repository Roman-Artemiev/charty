import GamePreviewCard from "@/components/cards/GamePreviewCard";
import { COLORS } from "@/theme";
import { Box, Flex, Heading, Grid, Image, Skeleton } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function Loading() {
  const skeletons = Array.from({ length: 9 });

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
              width='40px'
              height='40px'
              alt="More"
            />
          </Box>
        </Flex>

        <Grid
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap="25px 40px"
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
      </Box>
    </Box>
  );
}

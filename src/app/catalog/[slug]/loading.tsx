"use client";

import Footer from "@/components/footer/Footer";
import Header from "@/components/nav/Header";
import { COLORS, TRANSITIONS } from "@/theme";
import {
  Box,
  Divider,
  Flex,
  Link,
  Skeleton,
  Text,
  Grid,
  SkeletonText,
} from "@chakra-ui/react";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

const loading = () => {
  return (
    <>
      <Header />

      <Box className="wrapper" mt="60px">
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent={{ base: "center", md: "space-between" }}
          mb="40px"
          rowGap="24px"
        >
          <Flex
            as={Link}
            href="/catalog"
            textDecoration="none"
            columnGap="20px"
            alignItems="center"
            justifyContent={{ base: "center", md: "start" }}
            transition={TRANSITIONS.mainTransition}
            _hover={{
              textDecoration: "none",
              pl: "10px",
              transition: TRANSITIONS.mainTransition,
            }}
          >
            <FaArrowLeftLong size="30px" />
            <Text fontSize="28px" fontWeight="700">
              Store
            </Text>
          </Flex>

          <Skeleton
            w={{base: '100%', md: "50%"}}
            h="40px"
            borderRadius="5px"
            noOfLines={2}
            startColor={COLORS.darkLight}
            endColor={COLORS.darkSoft}
          />
        </Flex>

        <Flex
          direction={{ base: "column", lg: "row" }}
          justifyContent="space-between"
          columnGap="30px"
          mb="40px"
          rowGap="24px"
        >
          <Skeleton
            w={{ base: "100%", lg: "60%", xl: "70%" }}
            h={{ base: "250px", md: '430px', lg: "480px", xl: "560px" }}
            startColor={COLORS.darkLight}
            endColor={COLORS.darkSoft}
            borderRadius="10px"
          />

          <Skeleton
            w={{ base: "100%", lg: "40%", xl: "30%" }}
            h={{base: '150px', md: '200px', lg: "480px", xl: "560px" }}
            startColor={COLORS.darkLight}
            endColor={COLORS.darkSoft}
            borderRadius="10px"
          />
        </Flex>

        <Flex
          justifyContent="space-between"
          direction={{ base: "column", lg: "row" }}
          alignItems="center"
          columnGap='30px'
          mb="80px"
          rowGap="24px"
        >
          {/* Game left side, under slider */}
          <Flex
            w={{ base: "100%", lg: "60%", xl: "70%" }}
            justifyContent={{base: 'center', md: "space-between"}}
            alignItems="center"
            direction={{ base: "column", md: "row" }}
            rowGap="16px"
          >
            <Flex
              w='100%'
              columnGap="20px"
              direction={{ base: "column", sm: "row" }}
              textAlign={{ base: "center", sm: "start" }}
              justifyContent={{ base: "center", sm: "start" }}
              rowGap="8px"
            >
              <Skeleton
                h="57px"
                w={{base: '100%', md: "25%"}}
                borderRadius="5px"
                noOfLines={2}
                startColor={COLORS.darkLight}
                endColor={COLORS.darkSoft}
              />

              <Divider
                borderRadius="5px"
                borderColor={COLORS.darkSoft}
                borderWidth="1px"
                h="auto"
                orientation="vertical"
              />

              <Skeleton
                h="57px"
                w={{base: '100%', md: "22%"}}
                borderRadius="5px"
                noOfLines={2}
                startColor={COLORS.darkLight}
                endColor={COLORS.darkSoft}
              />
              
              <Divider
                borderRadius="5px"
                borderColor={COLORS.darkSoft}
                borderWidth="1px"
                h="auto"
                orientation="vertical"
              />

              <Skeleton
                h="57px"
                w={{base: '100%', md: "20%"}}
                borderRadius="5px"
                noOfLines={2}
                startColor={COLORS.darkLight}
                endColor={COLORS.darkSoft}
              />
            </Flex>

            <Skeleton
              h="60px"
              w="60px"
              borderRadius="5px"
              startColor={COLORS.darkLight}
              endColor={COLORS.darkSoft}
            />
          </Flex>

          {/* Game right side, under about */}
          <Skeleton
            w={{ base: "100%", lg: "40%", xl: "30%" }}
            columnGap="24px"
            h="60px"
            borderRadius="10px"
            cursor="pointer"
            startColor={COLORS.darkLight}
            endColor={COLORS.darkSoft}
          />
        </Flex>


        <Flex mb={{base: "40px", lg: '100px'}} direction={{base: 'column', lg: 'row'}} justifyContent="space-between" rowGap='24px' columnGap='30px'>
          {/* LEFT COLUMN */}
          <Box w={{base: "100%", lg: "60%", xl: "70%"}}>
            <Skeleton
              h='50px' 
              w='100%'
              mb="10px"             
              startColor={COLORS.darkLight}
              endColor={COLORS.darkSoft}
              borderRadius="10px"/>
            <Flex w='100%' columnGap='20px' mb='30px'>
              <Skeleton
                h='20px' 
                w='20%'
                mb="10px"             
                startColor={COLORS.darkLight}
                endColor={COLORS.darkSoft}
                borderRadius="10px"/>
              <Skeleton
                h='20px' 
                w='20%'
                mb="10px"             
                startColor={COLORS.darkLight}
                endColor={COLORS.darkSoft}
                borderRadius="10px"/>
              <Skeleton
                h='20px' 
                w='15%'
                mb="10px"             
                startColor={COLORS.darkLight}
                endColor={COLORS.darkSoft}
                borderRadius="10px"/>
              <Skeleton
                h='20px' 
                w='12%'
                mb="10px"             
                startColor={COLORS.darkLight}
                endColor={COLORS.darkSoft}
                borderRadius="10px"/>
            </Flex>

            <Grid gridTemplateColumns={{base: '1fr', md: 'repeat(2, 1fr)'}} alignSelf={{base: "center", md: 'start'}} justifyItems={{base: "center", md: 'start'}} textAlign={{base: "center", md: 'start'}} rowGap='24px' >
              {Array(7).fill(0).map((_, index) => (
                <Box key={index}>
                  <SkeletonText   
                    mb='10px'
                    borderRadius="10px"
                    startColor={COLORS.darkLight}
                    noOfLines={2}         
                    skeletonHeight='2'
                    w='100px'
                    endColor={COLORS.darkSoft}
                  />

                  <SkeletonText 
                    noOfLines={2}             
                    startColor={COLORS.darkLight}
                    endColor={COLORS.darkSoft}
                    skeletonHeight='3'
                    spacing='2'
                    w='150px'
                    borderRadius="10px"
                  />
              </Box>
              ))}
            </Grid>
          </Box>
          <Box w={{base: "100%", lg: "40%", xl: '30%'}} justifyContent={{base: "center", md: 'start'}}>
            <Flex flexWrap='wrap' gap='10px'>
              {Array(3).fill(0).map((_, index) => (
                <Skeleton   
                  key={index}        
                  startColor={COLORS.darkLight}
                  endColor={COLORS.darkSoft}
                  borderRadius="10px"
                  w='100%'
                  h='44px'
                />
              ))}
            </Flex>
          </Box>
        </Flex>
      </Box>

      <Footer />
    </>
  );
};

export default loading;

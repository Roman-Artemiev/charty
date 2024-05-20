import { COLORS } from '@/theme'
import { Box, Card, Flex, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const GamesPreviewSlider = () => {
  return (
    // <Box className='wrapper'>
    //   <Flex justifyContent="space-between" columnGap='65px'>
    //     <Flex alignItems="end" p="30px 40px" bg={COLORS.white} w="1017px" h="694px" borderRadius='10px' bgImage="linear-gradient(180deg, rgba(0, 0, 0, 0) 80%, #000 100%), url('https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg')" bgSize="cover" bgPosition="center">
    //       <Text fontWeight={800} fontSize={44} color={COLORS.white}>
    //         Metro 2023 REDUX
    //       </Text>
    //     </Flex>

    //     <Flex flexDirection='column' justifyContent="space-between">
    //       <Flex flexDirection='column' rowGap="25px">
    //         <Flex alignItems="end" p="10px 15px" w='300px' h='170px' borderRadius="10px" bgImage="linear-gradient(180deg, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.8) 100%), url('https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg')" bgSize="cover" bgPosition="center" >
    //           <Text fontWeight={800} fontSize={14} color={COLORS.grayLight}>
    //             Metro 2023 REDUX
    //           </Text> 
    //         </Flex>

    //         <Flex alignItems="end" p="10px 15px" w='300px' h='170px' borderRadius="10px" bgImage="linear-gradient(180deg, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.8) 100%), url('https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg')" bgSize="cover" bgPosition="center" >
    //           <Text fontWeight={800} fontSize={14} color={COLORS.grayLight}>
    //             Metro 2023 REDUX
    //           </Text> 
    //         </Flex>

    //         <Flex alignItems="end" p="10px 15px" w='300px' h='170px' borderRadius="10px" bgImage="linear-gradient(180deg, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.8) 100%), url('https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg')" bgSize="cover" bgPosition="center" >
    //           <Text fontWeight={800} fontSize={14} color={COLORS.grayLight}>
    //             Metro 2023 REDUX
    //           </Text> 
    //         </Flex>
    //       </Flex>

    //       <Flex columnGap="20px">
    //         <Text fontSize="24px" fontWeight={700} >Go to the store</Text>
    //         <Image src="/icons/arrow-right-icon.svg" width={30} height={30} alt="More"/>
    //       </Flex>
    //     </Flex>
    //   </Flex>
    // </Box>

  
    <motion.div>
      <Flex alignItems="end" p="10px 15px" w='300px' h='170px' borderRadius="10px" bgImage="linear-gradient(180deg, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.8) 100%), url('https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg')" bgSize="cover" bgPosition="center" >
        <Text fontWeight={800} fontSize={14} color={COLORS.grayLight}>
          Metro 2023 REDUX
        </Text> 
      </Flex>
    </motion.div>
  )
}

export default GamesPreviewSlider
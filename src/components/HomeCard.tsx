import React from 'react'
import GameCard from './GameCard'
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface GameCardProps {
  name: string; 
  src: string;
  price: string;
  platforms: any[];
  index?: number;
}

const spring = {
  type: "spring",
  damping: 25,
  stiffness: 120,
};



const HomeCard = ({name, src, price, platforms, index}:GameCardProps) => {
    // sx={
  //   index === 0 
  //   ? { gridRowStart: 1, gridRowEnd: 4 }
  //   : { alignSelf: index === 1 ? 'start' : (index === 2 ? 's' : 'end'), justifySelf: index % 2 === 0 ? 'end' : 'end' }
  // }


  return (
    <Box 
      as={motion.div}
      layout
      transition={spring}
      fontSize="24px"
      backgroundColor='red'
      w="100%"
      alignSelf='stretch'
      justifySelf='stretch'
      sx={index === 0 && {gridRowStart: '1', gridRowEnd: '5'}}
      height={'100%'}
    >
      <GameCard
        name={name}
        src={src}
        price={price}
        platforms={platforms}
        width='auto'
        height={index == 0 ? '100%' : '170px'}
        isCustom={true}
      />
    </Box>
  )
}

export default HomeCard
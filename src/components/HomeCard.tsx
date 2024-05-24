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
  return (
    <Box 
      as={motion.div}
      layout
      fontSize="24px"
      _first={{ gridRowStart: 1, gridRowEnd: 4 }}
      h='100%'
      
    >
      <GameCard
        name={name}
        src={src}
        price={price}
        platforms={platforms}
        width='auto'
        isCustom={true}
        height={index == 0 ? '100%' : '170px'}
      />
    </Box>
  )
}

export default HomeCard
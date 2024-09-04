"use client"

import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const error = () => {
  return (
    <Box className="wrapper" h="100%" display='flex' justifyContent='center' alignItems='center'>
      <Text fontSize='20px' textAlign='center'>Failed to load game. Please try again later or reload page.</Text>
    </Box>
  )
}

export default error
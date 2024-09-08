"use client"

import Footer from '@/components/footer/Footer'
import Header from '@/components/nav/Header'
import { Box, Text } from '@chakra-ui/react'
import React from 'react'


const error = () => {
  return (
		<>
			<Header />

			<Box className="wrapper" h="100%" display='flex' justifyContent='center' alignItems='center'>
				<Text fontSize='20px'>Failed to load catalog. Please try again later or reload page.</Text>
			</Box>
		</>
  )
}

export default error
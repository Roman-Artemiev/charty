'use client';

import Footer from "@/components/footer/Footer";
import Header from "@/components/nav/Header";
import { Box, Text } from "@chakra-ui/react";

export default function Error() {
	return (
		<>
			<Header />

			<Box className="wrapper" h="100%" display='flex' justifyContent='center' alignItems='center'>
				<Text fontSize='20px'>Failed to load games. Please try again later or reload page.</Text>
			</Box>

			<Footer />
		</>
	);
}
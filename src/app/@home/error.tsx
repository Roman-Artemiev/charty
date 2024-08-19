'use client';

import { Box, Text } from "@chakra-ui/react";

export default function Error() {
	return (
		<Box className="wrapper" h="100%" display='flex' justifyContent='center' alignItems='center'>
			<Text fontSize='20px'>Failed to load games. Please try again later or reload page.</Text>
		</Box>
	);
}
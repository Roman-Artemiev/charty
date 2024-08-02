import { Box, Circle, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { COLORS } from "@/theme";


type Rating = {
  id: number;
  title: string;
  count: number;
  percent: number;
};


const RatingLinegrapth = ({
  rating,
}: {
  rating: Rating[];
}) => {
  if (!rating) return null;

  const sortedRating = [...rating].sort((a, b) => {
    const order = ["exceptional", "recommended", "meh", "skip"];
    return order.indexOf(a.title) - order.indexOf(b.title);
  });

  const getRatingsColors = (title: string) => {
    switch (title) {
      case "exceptional":
        return COLORS.green;
      case "recommended":
        return COLORS.blue;
      case "meh":
        return COLORS.yellow;
      case "skip":
        return COLORS.red;
      default:
        return COLORS.gray;
    }
  };

  return (
    <Box>
      <Flex mb='10px' h='50px' borderRadius='10px' overflow='hidden'>
        {sortedRating.map((rating) => (
          <Box
            key={rating.id}
            width={`${rating.percent}%`}
            bgColor={getRatingsColors(rating.title)}
          />
        ))}
      </Flex>

      <Flex columnGap='20px'>
        {sortedRating.map((rating) => (
          <Flex key={rating.id} alignItems='center'>
            <Circle size='12px' bgColor={getRatingsColors(rating.title)} />
            <Text  ml='10px' fontWeight='600' fontSize='16px'>{(rating.title).charAt(0).toUpperCase() + (rating.title).slice(1)}</Text>
            <Text ml='5px' fontSize='14px' color={COLORS.gray}>{rating.count}</Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default RatingLinegrapth;


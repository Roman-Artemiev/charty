import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const FilterBar = () => {
    // const categoryOptions = [
    //     newRelease: {
    //         {icon: "", text: "Last 30 days"},
    //         {icon: "", text: "This week"},
    //         {icon: "", text: "Next week"},
    //         {icon: "", text: "Release calendar"},
    //     }
    // ];


    return (
        <Box>
            <Heading as="h2" mb="20px">
                Home
            </Heading>
            
            <Heading as="h2" mb="15px">
                All Games
            </Heading>
            
            <Flex flexDirection="column">

            </Flex>
        </Box>
    )
}

// const categoryOptions = [
//     { isSelected: true, pathToIcon: "../../icons/category/wifi-icon.svg", text: "Free Online", },
//     { pathToIcon: "../../icons/category/lightning-icon.svg", text: "Action" },
//     { pathToIcon: "../../icons/category/chess-rook-icon.svg", text: "Strategy",},
//     { pathToIcon: "../../icons/category/shield-icon.svg", text: "RPG" },
//     { pathToIcon: "../../icons/category/scope-icon.svg", text: "Shooter" },
//     { pathToIcon: "../../icons/category/world-icon.svg", text: "Adventure" },
//     { pathToIcon: "../../icons/category/puzzle-icon.svg", text: "Puzzle" },
//     { pathToIcon: "../../icons/category/ball-icon.svg", text: "Sports" },
//     { pathToIcon: "../../icons/category/controller-icon.svg", text: "Racing" },
//   ];


// {categoryOptions.map((option, index) => ( 
//     <Option
//       key={index}
//       isSelected={option.isSelected || false}
//       pathToIcon={option.pathToIcon}
//       text={option.text}
//     />
//   ))}

export default FilterBar
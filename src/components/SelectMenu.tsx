// import { Menu, MenuButton, MenuList, MenuOptionGroup, MenuItemOption, Button } from '@chakra-ui/react'
// import React from 'react'
// import { COLORS, TRANSITIONS } from "./../theme/index";


// const SelectMenu = () => {
//   return (
//     // <Menu closeOnSelect={false} onClose={() => setIsPlatformPopupOpen(false)} onOpen={() => setIsPlatformPopupOpen(true)}>
//     <Menu closeOnSelect={false}>
//     <MenuButton
//     //   rightIcon={ <Image src="/icons/arrow-bottom-icon.svg" width={20} height={20} alt="Arrow"/> }
//       as={Button}
//       w="200px" h="44px"
//       color={COLORS.white}
//       _active={{ bg: COLORS.dark }}
//       bg={COLORS.darkLight}
//       fontSize="16px"
//       _hover={{ bg: COLORS.dark }}
//     >
//       Platform
//     </MenuButton>

//     <MenuList minWidth="240px" bgColor={COLORS.darkLight} defaultValue='pc' border={0} zIndex={3}>
//       <MenuOptionGroup
//         title="Platform"
//         type="checkbox"
//         bgColor={COLORS.darkLight}
//         color={COLORS.gray}
//         fontWeight={400}
//         transition={TRANSITIONS.mainTransition}
//       >
//         {/* {platformOptions.map((option) => (
//           <MenuItemOption
//             key={option.id}
//             name={option.slug}
//             value={option.slug}
//             bgColor={COLORS.darkLight}
//             color={COLORS.white}
//             _hover={{ bgColor: COLORS.whiteTransparentLight }}
//             transition={TRANSITIONS.mainTransition}
//             onClick={() => handlePlatformOptionClick(option.id)}
//           >
//             {option.name}
//           </MenuItemOption>
//         ))} */}
//       </MenuOptionGroup>
//     </MenuList>
//   </Menu>
//   )
// }

// export default SelectMenu
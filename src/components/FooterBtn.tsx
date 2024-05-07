import React from 'react';
import Image from 'next/image';
import { Flex } from '@chakra-ui/react';
import variables from "./../styles/main/variables.module.scss";

const FooterBtn = ({pathToIcon, alt}: {pathToIcon: string, alt: string}) => {


  return (
    <Flex alignItems={'center'} cursor={'pointer'} justifyContent={'center'} w={44} h={44} bgColor={'#0F1011'} borderRadius={5}> 
        <Image src={pathToIcon} width={24} height={24} alt={alt}/>
    </Flex>
  )
}

export default FooterBtn
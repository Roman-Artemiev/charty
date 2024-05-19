import React from 'react';
import Image from 'next/image';
import { Flex } from '@chakra-ui/react';
import { COLORS } from '@/theme';

const FooterBtn = ({pathToIcon, alt}: {pathToIcon: string, alt: string}) => {
  return (
    <Flex alignItems={'center'} cursor={'pointer'} justifyContent={'center'} w={44} h={44} bgColor={COLORS.black} borderRadius={5}> 
        <Image src={pathToIcon} width={24} height={24} alt={alt}/>
    </Flex>
  )
}

export default FooterBtn;

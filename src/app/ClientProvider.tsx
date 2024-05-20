'use client';

import { customTheme } from '@/theme';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react'

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
      <ChakraProvider theme={customTheme}> 
        {children}
      </ChakraProvider>
  )
}

export default ClientProvider
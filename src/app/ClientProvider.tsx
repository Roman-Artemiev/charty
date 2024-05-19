'use client';

import { customTheme } from '@/theme';
// import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
// import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react'

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    // <CacheProvider>
      <ChakraProvider theme={customTheme}> 
        {/* <SessionProvider> */}
          {/* <QueryClientProvider client={QueryClient}>{children}</QueryClientProvider> */}
        {/* </SessionProvider> */}
        {children}
      </ChakraProvider>
    // </CacheProvider>
  )
}

export default ClientProvider
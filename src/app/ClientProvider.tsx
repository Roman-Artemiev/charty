'use client';

import { customTheme } from '../theme';
import { ChakraProvider } from '@chakra-ui/react';
import React, { Suspense } from 'react'

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ChakraProvider theme={customTheme}> 
        {children}
      </ChakraProvider>
    </Suspense>
  )
}

export default ClientProvider
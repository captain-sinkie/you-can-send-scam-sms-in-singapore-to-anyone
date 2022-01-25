// packages
import type { AppProps } from 'next/app'
// chakra
import { ChakraProvider } from '@chakra-ui/react'
// provider
import { AppProvider } from '../context/App'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </AppProvider>
  )
}

export default MyApp

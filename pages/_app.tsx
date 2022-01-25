// packages
import type { AppProps } from 'next/app'
// chakra
import { ChakraProvider } from '@chakra-ui/react'
// provider
import { AppProvider } from '../context/App'
import { NewMessageProvider } from '../context/newMessage'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <NewMessageProvider>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </NewMessageProvider>
    </AppProvider>
  )
}

export default MyApp

// packages
import type { AppProps } from 'next/app'
// chakra
import { ChakraProvider } from '@chakra-ui/react'
// providers
import { AppProvider } from '../context/App'
import { NewMessageProvider } from '../context/newMessage'
import { MobileRouterProvider } from '../context/MobileRouter'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <NewMessageProvider>
        <MobileRouterProvider>
          <ChakraProvider>
            <Component {...pageProps} />
          </ChakraProvider>
        </MobileRouterProvider>
      </NewMessageProvider>
    </AppProvider>
  )
}

export default MyApp

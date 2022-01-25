// packages
import React from 'react'
// chakra
import { Box } from '@chakra-ui/react'
// context
import { useMobileRouter } from '../../../context/MobileRouter'
// components
import { ChatScreen } from './ChatScreen'
import { HomeScreen } from './HomeScreen'

export const Screen = () => {
  const { state, dispatch } = useMobileRouter()
  const { route, senderId } = state

  const Router = () => {
    // TODO: add routing logic here
    switch (route) {
      case 'home': {
        return <HomeScreen />
      }

      case 'chat': {
        return <ChatScreen senderId={senderId} />
      }

      default: {
        return <HomeScreen />
      }
    }
  }

  return (
    <Box
      bgColor="white"
      h="380px"
      w="100%"
      borderWidth="2px"
      borderColor="black"
      boxShadow="xl"
      borderRadius="sm"
    >
      <Router />
    </Box>
  )
}

// packages
import React from 'react'
// chakra
import { Box } from '@chakra-ui/react'
// components
import { ChatScreen } from './ChatScreen'

export const Screen = () => {
  const Router = () => {
    // TODO: add routing logic here
    return <ChatScreen />
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

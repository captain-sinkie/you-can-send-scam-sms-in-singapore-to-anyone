// packages
import React from 'react'
// chakra
import { Box } from '@chakra-ui/react'
// components
import { Header } from './Header'
import { MessageBubble } from './MessageBubble'

export const ChatScreen = () => {
  return (
    <Box>
      <Header />
      <Box p={1} h="330px" overflowY="scroll">
        <MessageBubble />
        <MessageBubble />
        <MessageBubble />
        <MessageBubble />
        <MessageBubble />
        <MessageBubble />
        <MessageBubble />
        <MessageBubble />
        <MessageBubble />
        <MessageBubble />
      </Box>
    </Box>
  )
}

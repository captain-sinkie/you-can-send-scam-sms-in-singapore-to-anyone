// packages
import React from 'react'
// chakra
import { Box } from '@chakra-ui/react'
// context
import { useApp } from '../../../../context/App'
// components
import { Header } from './Header'
import { MessageBubble } from './MessageBubble'

export const ChatScreen = () => {
  const { messages } = useApp().state

  return (
    <Box>
      <Header />
      <Box p={1} h="330px" overflowY="scroll">
        {messages.map(({ content, time }, i) => (
          <MessageBubble content={content} time={time} key={i} />
        ))}
      </Box>
    </Box>
  )
}

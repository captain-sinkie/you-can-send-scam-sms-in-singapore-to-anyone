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
  const endRef = React.useRef<null | HTMLDivElement>(null)

  React.useEffect(() => {
    if (endRef) {
      if (endRef.current) {
        endRef.current.scrollIntoView({ block: 'nearest', inline: 'nearest' })
      }
    }
  }, [messages])

  return (
    <Box>
      <Header />
      <Box p={1} h="330px" overflowY="scroll">
        {messages.map(({ content, time }, i) => (
          <MessageBubble content={content} time={time} key={i} />
        ))}
        <Box ref={endRef} />
      </Box>
    </Box>
  )
}

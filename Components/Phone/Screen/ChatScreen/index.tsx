// packages
import React from 'react'
// chakra
import { Box } from '@chakra-ui/react'
// context
import { useApp } from '../../../../context/App'
// components
import { Header } from './Header'
import { MessageBubble } from './MessageBubble'
import { Message } from '../../../../context/App/interface'

export const ChatScreen = () => {
  const { chats } = useApp().state
  const index = chats.findIndex((chat) => chat.senderId == 'OCBC')

  let messages: Message[] = []
  if (index != -1) {
    messages = chats[index].messages
  }

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

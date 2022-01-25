// packages
import React from 'react'
// chakra
import { Box, Stack, LinkBox, StackDivider } from '@chakra-ui/react'
// context
import { setRouteDispatch, useMobileRouter } from '../../../../context/MobileRouter'
import { useApp } from '../../../../context/App'
// components

export const HomeScreen = () => {
  const { chats } = useApp().state
  const { dispatch } = useMobileRouter()

  type MessagePreviewProps = {
    senderId: string
    content: string
  }

  const MessagePreview: React.FC<MessagePreviewProps> = ({ senderId, content }) => {
    const select = () => {
      setRouteDispatch(dispatch, { route: 'chat', senderId })
    }
    return (
      <LinkBox
        px={1}
        cursor="pointer"
        onClick={() => {
          select()
        }}
      >
        View {senderId} - {content}
      </LinkBox>
    )
  }

  return (
    <Box h="375px" overflowY="scroll">
      <Stack divider={<StackDivider />}>
        {chats.map(({ senderId, messages }) => (
          <MessagePreview senderId={senderId} content={messages[messages.length - 1].content} />
        ))}
      </Stack>
    </Box>
  )
}

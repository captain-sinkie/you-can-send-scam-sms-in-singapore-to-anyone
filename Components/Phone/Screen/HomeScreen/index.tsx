// packages
import React from 'react'
// chakra
import { Box, Stack, HStack, LinkBox, StackDivider } from '@chakra-ui/react'
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
        <Box fontWeight="bold" fontSize="2xl" pl={2}>
          Messages
        </Box>
        {chats.map(({ senderId, messages }, i) => (
          <HStack>
            <MessagePreview
              key={i}
              senderId={senderId}
              content={messages[messages.length - 1].content}
            />
          </HStack>
        ))}
      </Stack>
    </Box>
  )
}

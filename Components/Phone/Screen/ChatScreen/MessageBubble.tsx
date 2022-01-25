// packages
import React from 'react'
// chakra
import { Box, Text } from '@chakra-ui/react'
// types
import { Message } from '../../../../context/App/interface'
// components

export const MessageBubble: React.FC<Message> = ({ content, time }) => {
  return (
    <Box bgColor="gray.100" maxW="80%" borderRadius="lg" mb={1} p={2}>
      <Text fontSize="sm" lineHeight="4">
        {content}
      </Text>
    </Box>
  )
}

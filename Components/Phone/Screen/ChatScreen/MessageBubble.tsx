// packages
import React from 'react'
// chakra
import { Box, Text } from '@chakra-ui/react'
// components

export const MessageBubble = () => {
  return (
    <Box bgColor="gray.100" maxW="80%" borderRadius="lg" mb={1} p={2}>
      <Text fontSize="sm" lineHeight="4">
        Hi, scam links are still clickable here in Singapore
      </Text>
    </Box>
  )
}
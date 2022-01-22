// packages
import { Box } from '@chakra-ui/react'
import React from 'react'
// chakra
// components

type Props = {
  children: React.ReactNode
}

export const SkeletonWrapper: React.FC<Props> = ({ children }) => {
  return (
    <Box h="500px" w="280px" bgColor="gray.700" p={3} borderRadius="20px" pos="relative">
      <Box h="40px" w="3px" bgColor="gray.700" pos="absolute" left={0} ml="-4px" mt="60px" />
      <Box h="40px" w="3px" bgColor="gray.700" pos="absolute" left={0} ml="-4px" mt="110px" />
      <Box h="70px" w="3px" bgColor="gray.700" pos="absolute" right={0} mr="-4px" mt="70px" />
      {children}
    </Box>
  )
}

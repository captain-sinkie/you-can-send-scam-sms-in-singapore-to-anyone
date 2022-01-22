// packages
import React from 'react'
// chakra
import { Center, HStack } from '@chakra-ui/react'
// components
import { Camera } from './Camera'
import { Sensor } from './Sensor'

export const Notch = () => {
  return (
    <Center h="50px" w="100%">
      <HStack>
        <Camera />
        <Sensor />
      </HStack>
    </Center>
  )
}

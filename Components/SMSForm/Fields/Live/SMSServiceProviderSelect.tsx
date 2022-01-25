// packages
import React from 'react'
// chakra
import { Select, FormControl, FormLabel, useColorModeValue as mode } from '@chakra-ui/react'
// components

export const SMSServiceProviderSelect = () => {
  return (
    <FormControl position="relative">
      <FormLabel
        _focus={{ color: mode('blue.600', 'blue.300') }}
        fontWeight="semibold"
        position="absolute"
        color={mode('gray.600', 'white')}
        top="-3"
        insetStart="2"
        bg={{ base: mode('white', 'gray.800'), md: mode('white', 'gray.700') }}
        zIndex={2}
        px="2"
      >
        SMS Provider
      </FormLabel>
      <Select pt={1} placeholder="----Send a service to send SMS----">
        <option value="burst">BurstSMS</option>
      </Select>
    </FormControl>
  )
}

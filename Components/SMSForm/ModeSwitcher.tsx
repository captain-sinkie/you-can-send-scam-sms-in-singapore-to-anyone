// packages
import React from 'react'
// chakra
import { HStack, Switch, Text, useBoolean } from '@chakra-ui/react'
// components

export const ModeSwitcher = () => {
  const [live, setLive] = useBoolean(false)

  return (
    <HStack>
      <Text>{live ? 'Live' : 'Preview'}</Text>
      <Switch size="sm" defaultIsChecked={live} onChange={setLive.toggle} />
    </HStack>
  )
}

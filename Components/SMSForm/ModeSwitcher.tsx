// packages
import React from 'react'
// chakra
import { HStack, Switch, Text, useBoolean } from '@chakra-ui/react'
// components

type Props = {
  live: boolean
  setLive: {
    readonly on: () => void
    readonly off: () => void
    readonly toggle: () => void
  }
}

export const ModeSwitcher: React.FC<Props> = ({ live, setLive }) => {
  return (
    <HStack>
      <Text>{live ? 'Live' : 'Preview'}</Text>
      <Switch size="sm" defaultIsChecked={live} onChange={setLive.toggle} />
    </HStack>
  )
}

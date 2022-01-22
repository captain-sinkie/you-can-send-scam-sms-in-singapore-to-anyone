// packages
import React from 'react'
// chakra
// components
import { SkeletonWrapper } from './SkeletonWrapper'
import { Screen } from './Screen'
import { Notch } from './Notch'
import { Dock } from './Dock'

export const Phone = () => {
  return (
    <SkeletonWrapper>
      <Notch />
      <Screen />
      <Dock />
    </SkeletonWrapper>
  )
}

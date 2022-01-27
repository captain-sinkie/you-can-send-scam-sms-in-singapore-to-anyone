// packages
import React from 'react'
// chakra
// context
import { setMessagesDispatch, useApp } from '../../context/App'
// components
import { SkeletonWrapper } from './SkeletonWrapper'
import { Screen } from './Screen'
import { Notch } from './Notch'
import { Dock } from './Dock'
// data
import { initialMessages } from './messages'

export const Phone = () => {
  const { dispatch } = useApp()

  React.useEffect(() => {
    setMessagesDispatch(dispatch, initialMessages.senderId, initialMessages.messages)
  }, [])

  return (
    <SkeletonWrapper>
      <Notch />
      <Screen />
      <Dock />
    </SkeletonWrapper>
  )
}

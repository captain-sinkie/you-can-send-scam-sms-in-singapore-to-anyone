// packages
import React from 'react'
// chakra
// context
import { setMessagesDispatch, useApp } from '../../context/App'
import { MobileRouterProvider } from '../../context/MobileRouter'
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
      <MobileRouterProvider>
        <Screen />
      </MobileRouterProvider>
      <Dock />
    </SkeletonWrapper>
  )
}

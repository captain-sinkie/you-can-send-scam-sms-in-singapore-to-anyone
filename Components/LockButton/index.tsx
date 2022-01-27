// packages
import React from 'react'
// chakra
import { Button } from '@chakra-ui/react'
// context
import { setRouteDispatch, useMobileRouter } from '../../context/MobileRouter'
// components

export const LockButton = () => {
  const { state, dispatch } = useMobileRouter()
  const { route } = state

  const toggleLock = () => {
    const newRoute = route == 'lockscreen' ? 'home' : 'lockscreen'

    setRouteDispatch(dispatch, { route: newRoute })
  }

  return <Button onClick={() => toggleLock()}>{route == 'lockscreen' ? 'Unlock' : 'Lock'}</Button>
}

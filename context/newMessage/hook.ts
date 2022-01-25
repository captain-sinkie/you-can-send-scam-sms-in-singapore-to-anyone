// packages
import React from 'react'
// context
import { NewMessageContext } from '.'
// interface
import { NewMessageStateType } from './interface'

export const useNewMessage = (): {
  state: NewMessageStateType
  dispatch: React.Dispatch<{ type: string; payload?: any }>
} => {
  const { state, dispatch } = React.useContext(NewMessageContext)
  if (state === undefined) {
    throw new Error('useNewMessage must be used within an NewMessageProvider')
  }
  return { state, dispatch }
}

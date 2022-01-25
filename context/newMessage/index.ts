import React from 'react'
// interface
import { NewMessageStateType } from './interface'
// constants
import { INITIAL_STATE } from './constants'

export * from './dispatch'
export * from './hook'
export * from './Provider'
export * from './reducers'

export const NewMessageContext = React.createContext<{
  state: NewMessageStateType
  dispatch: React.Dispatch<any>
}>({
  state: INITIAL_STATE,
  dispatch: () => null,
})

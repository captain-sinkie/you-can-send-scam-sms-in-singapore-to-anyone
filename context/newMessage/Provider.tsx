// packages
import React from 'react'
// components
import { NewMessageContext } from '.'
// constants
import { INITIAL_STATE } from './constants'
// reducer
import reducers from './reducers'
// utils

export const NewMessageProvider = ({ children }: { children: React.ReactNode }) => {
  // React.useEffect(() => {}, [])
  const [state, dispatch] = React.useReducer(reducers, INITIAL_STATE)

  return (
    <NewMessageContext.Provider value={{ state, dispatch }}>{children}</NewMessageContext.Provider>
  )
}

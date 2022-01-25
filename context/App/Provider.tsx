// packages
import React from 'react'
// components
import { AppContext } from '.'
// constants
import { INITIAL_STATE } from './constants'
// reducer
import reducers from './reducers'
// utils

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  React.useEffect(() => {}, [])

  const [state, dispatch] = React.useReducer(reducers, INITIAL_STATE)

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}

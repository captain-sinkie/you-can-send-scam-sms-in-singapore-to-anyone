// packages
import React from 'react'
// components
import { MobileRouterContext } from '.'
// constants
import { INITIAL_STATE } from './constants'
// reducer
import reducers from './reducers'
// utils

export const MobileRouterProvider = ({ children }: { children: React.ReactNode }) => {
  React.useEffect(() => {}, [])

  const [state, dispatch] = React.useReducer(reducers, INITIAL_STATE)

  return (
    <MobileRouterContext.Provider value={{ state, dispatch }}>
      {children}
    </MobileRouterContext.Provider>
  )
}

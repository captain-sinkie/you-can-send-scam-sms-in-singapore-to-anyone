import React from 'react'
// interface
import { MobileRouterStateType } from './interface'
// constants
import { INITIAL_STATE } from './constants'

export * from './dispatch'
export * from './hook'
export * from './Provider'
export * from './reducers'

export const MobileRouterContext = React.createContext<{
  state: MobileRouterStateType
  dispatch: React.Dispatch<any>
}>({
  state: INITIAL_STATE,
  dispatch: () => null,
})

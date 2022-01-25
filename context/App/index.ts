import React from 'react'
// interface
import { AppStateType } from './interface'
// constants
import { INITIAL_STATE } from './constants'

export * from './dispatch'
export * from './hook'
export * from './Provider'
export * from './reducers'

export const AppContext = React.createContext<{
  state: AppStateType
  dispatch: React.Dispatch<any>
}>({
  state: INITIAL_STATE,
  dispatch: () => null,
})

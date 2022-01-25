// packages
import React from 'react'
// context
import { MobileRouterContext } from '.'
// interface
import { MobileRouterStateType } from './interface'

export const useMobileRouter = (): {
  state: MobileRouterStateType
  dispatch: React.Dispatch<{ type: string; payload?: any }>
} => {
  const { state, dispatch } = React.useContext(MobileRouterContext)
  if (state === undefined) {
    throw new Error('useMobileRouter must be used within an MobileRouterProvider')
  }
  return { state, dispatch }
}

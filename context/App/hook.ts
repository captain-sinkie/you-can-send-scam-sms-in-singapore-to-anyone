// packages
import React from 'react'
// context
import { AppContext } from '.'
// interface
import { AppStateType } from './interface'

export const useApp = (): {
  state: AppStateType
  dispatch: React.Dispatch<{ type: string; payload?: any }>
} => {
  const { state, dispatch } = React.useContext(AppContext)
  if (state === undefined) {
    throw new Error('useNotebook must be used within an AppProvider')
  }
  return { state, dispatch }
}

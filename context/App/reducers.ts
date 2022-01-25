// interfaces
import { AppStateType } from './interface'
// constants
import { SET_MESSAGES } from './constants'

export default function reducer(state: AppStateType, action: { type: string; payload: any }) {
  switch (action.type) {
    case SET_MESSAGES: {
      return { ...state, messages: action.payload.messages } as AppStateType
    }

    default:
      return state as AppStateType
  }
}

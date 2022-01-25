// interfaces
import { AppStateType } from './interface'
// constants
import { SET_MESSAGES, INSERT_MESSAGE } from './constants'

export default function reducer(state: AppStateType, action: { type: string; payload: any }) {
  switch (action.type) {
    case SET_MESSAGES: {
      return { ...state, messages: action.payload.messages } as AppStateType
    }

    case INSERT_MESSAGE: {
      return { ...state, messages: [...state.messages, action.payload.message] }
    }

    default:
      return state as AppStateType
  }
}

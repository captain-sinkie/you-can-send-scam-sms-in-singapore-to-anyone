// interfaces
import { NewMessageStateType } from './interface'
// constants
import { CLEAR_NEW_MESSAGE, SET_NEW_MESSAGE_CONTENT, SET_NEW_MESSAGE_SENDER_ID } from './constants'

export default function reducer(
  state: NewMessageStateType,
  action: { type: string; payload: any },
) {
  switch (action.type) {
    case SET_NEW_MESSAGE_CONTENT: {
      return { ...state, content: action.payload.content }
    }

    case SET_NEW_MESSAGE_SENDER_ID: {
      return { ...state, senderId: action.payload.senderId }
    }

    case CLEAR_NEW_MESSAGE: {
      return { ...state, senderId: '', content: '' }
    }

    default:
      return state
  }
}

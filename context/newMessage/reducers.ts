// interfaces
import { NewMessageStateType } from './interface'
// constants
import { SET_NEW_MESSAGE_CONTENT } from './constants'

export default function reducer(
  state: NewMessageStateType,
  action: { type: string; payload: any },
) {
  switch (action.type) {
    case SET_NEW_MESSAGE_CONTENT: {
      return { ...state, content: action.payload.content }
    }

    default:
      return state
  }
}

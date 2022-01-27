// interfaces
import { AppStateType } from './interface'
// constants
import { SET_MESSAGES, INSERT_MESSAGE } from './constants'

export default function reducer(state: AppStateType, action: { type: string; payload: any }) {
  switch (action.type) {
    case SET_MESSAGES: {
      const { senderId, messages } = action.payload
      const { chats } = state
      const index = chats.findIndex((chat) => chat.senderId == action.payload.senderId)
      if (index != -1) {
        chats[index] = { senderId, messages }
      } else {
        chats.push({ senderId, messages })
      }

      return { ...state, chats } as AppStateType
    }

    case INSERT_MESSAGE: {
      const { senderId, message } = action.payload

      const { chats } = state
      const index = chats.findIndex((chat) => chat.senderId == action.payload.senderId)
      if (index != -1) {
        chats[index] = { senderId, messages: [...chats[index].messages, message] }
      } else {
        chats.unshift({ senderId, messages: [message] })
      }

      return { ...state, chats }
    }

    default:
      return state as AppStateType
  }
}

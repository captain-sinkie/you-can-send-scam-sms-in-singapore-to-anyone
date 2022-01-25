// packages
import { Dispatch } from 'react'
// constants
import { SET_MESSAGES, INSERT_MESSAGE } from './constants'
// interfaces
import { AppStateType, Chat, Message } from './interface'

export const setMessagesDispatch = (
  dispatch: Dispatch<{ type: string; payload: Chat }>,
  senderId: string,
  messages: Message[],
) => {
  dispatch({
    type: SET_MESSAGES,
    payload: { senderId, messages },
  })
}

type insertMessageDispatchPayloadType = {
  senderId: string
  message: Message
}

export const insertMessageDispatch = (
  dispatch: Dispatch<{ type: string; payload: insertMessageDispatchPayloadType }>,
  senderId: string,
  content: string,
) => {
  const message = { content, time: new Date() }

  dispatch({
    type: INSERT_MESSAGE,
    payload: { senderId, message },
  })
}

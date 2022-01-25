// packages
import { Dispatch } from 'react'
// constants
import { SET_MESSAGES, INSERT_MESSAGE } from './constants'
// interfaces
import { AppStateType, Message } from './interface'

export const setMessagesDispatch = (
  dispatch: Dispatch<{ type: string; payload: Pick<AppStateType, 'messages'> }>,
  messages: Message[],
) => {
  dispatch({
    type: SET_MESSAGES,
    payload: { messages },
  })
}

export const insertMessageDispatch = (
  dispatch: Dispatch<{ type: string; payload: { message: Message } }>,
  content: string,
) => {
  const message = { content, time: new Date() }

  dispatch({
    type: INSERT_MESSAGE,
    payload: { message },
  })
}

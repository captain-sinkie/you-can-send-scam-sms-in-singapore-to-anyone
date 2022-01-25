// packages
import { Dispatch } from 'react'
// constants
import { SET_MESSAGES } from './constants'
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

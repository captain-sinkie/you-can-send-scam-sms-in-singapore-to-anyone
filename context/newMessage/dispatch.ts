// packages
import { Dispatch } from 'react'
// constants
import { SET_NEW_MESSAGE_CONTENT, SET_NEW_MESSAGE_SENDER_ID, CLEAR_NEW_MESSAGE } from './constants'
// interfaces
import { NewMessageStateType } from './interface'

export const setNewMessageContentDispatch = (
  dispatch: Dispatch<{ type: string; payload: Pick<NewMessageStateType, 'content'> }>,
  content: string,
) => {
  dispatch({
    type: SET_NEW_MESSAGE_CONTENT,
    payload: { content },
  })
}

export const setNewMessageSenderIdDispatch = (
  dispatch: Dispatch<{ type: string; payload: Pick<NewMessageStateType, 'senderId'> }>,
  senderId: string,
) => {
  dispatch({
    type: SET_NEW_MESSAGE_SENDER_ID,
    payload: { senderId },
  })
}

export const clearNewMessageDispatch = (dispatch: Dispatch<{ type: string }>) => {
  dispatch({ type: CLEAR_NEW_MESSAGE })
}

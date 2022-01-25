// packages
import { Dispatch } from 'react'
// constants
import { SET_NEW_MESSAGE_CONTENT } from './constants'
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

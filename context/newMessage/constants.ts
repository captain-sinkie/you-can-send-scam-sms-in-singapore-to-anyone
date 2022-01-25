import { NewMessageStateType } from './interface'

export const SET_NEW_MESSAGE_CONTENT = 'SET_NEW_MESSAGE_CONTENT'
export const SET_NEW_MESSAGE_SENDER_ID = 'SET_NEW_MESSAGE_SENDER_ID'
export const CLEAR_NEW_MESSAGE = 'CLEAR_NEW_MESSAGE'

export const INITIAL_STATE: NewMessageStateType = {
  content: '',
  senderId: '',
}

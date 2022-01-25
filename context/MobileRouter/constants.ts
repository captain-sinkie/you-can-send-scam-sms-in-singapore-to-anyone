import { MobileRouterStateType } from './interface'

export const SET_ROUTE = 'SET_ROUTE'
export const SET_SENDER_ID = 'SET_SENDER_ID'

export const INITIAL_STATE: MobileRouterStateType = {
  route: 'chat',
  senderId: 'OCBC',
}

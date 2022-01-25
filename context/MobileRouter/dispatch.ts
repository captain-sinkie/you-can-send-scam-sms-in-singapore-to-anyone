// packages
import { Dispatch } from 'react'
// constants
import { SET_ROUTE, SET_SENDER_ID } from './constants'
// interfaces
import { MobileRouterStateType } from './interface'

type setRouteDispatchPayload = {
  senderId?: string
  route: 'home' | 'chat'
}

export const setRouteDispatch = (
  dispatch: Dispatch<{ type: string; payload: MobileRouterStateType }>,
  payload: setRouteDispatchPayload,
) => {
  const { route, senderId = '' } = payload
  dispatch({
    type: SET_ROUTE,
    payload: { route, senderId },
  })
}

export const setSenderIdDispatch = (
  dispatch: Dispatch<{ type: string; payload: Pick<MobileRouterStateType, 'senderId'> }>,
  senderId: string,
) => {
  dispatch({
    type: SET_SENDER_ID,
    payload: { senderId },
  })
}

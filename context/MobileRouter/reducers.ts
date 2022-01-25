// interfaces
import { MobileRouterStateType } from './interface'
// constants
import { SET_ROUTE, SET_SENDER_ID } from './constants'

export default function reducer(
  state: MobileRouterStateType,
  action: { type: string; payload: any },
) {
  switch (action.type) {
    case SET_ROUTE: {
      const { route, senderId } = action.payload
      return { ...state, route, senderId }
    }

    case SET_SENDER_ID: {
      return { ...state, senderId: action.payload.senderId }
    }

    default:
      return state as MobileRouterStateType
  }
}

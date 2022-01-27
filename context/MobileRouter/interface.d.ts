export type Route = 'home' | 'chat' | 'lockscreen'

export interface MobileRouterStateType {
  route: Route
  senderId: string
}

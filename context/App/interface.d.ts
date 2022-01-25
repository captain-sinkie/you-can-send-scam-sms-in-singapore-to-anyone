export interface Message {
  content: string
  time: Date
}

export interface AppStateType {
  messages: Message[]
}

export interface Message {
  content: string
  time: Date
}

export interface Chat {
  senderId: string
  messages: Message[]
}

export interface AppStateType {
  chats: Chat[]
}

import { User, Chat as ChatModel, Message as MessageModel } from "./models"

export type Chat = Pick<ChatModel, "id"> & {
    participants: Pick<User, "id" | "avatar" | "username">[]
    lastMessage: Pick<MessageModel, "id" | "content"> & {
        sender: Pick<User, "id">
    } | null
}

export type Message = Pick<MessageModel, "id" | "content" | "createdAt"> & {
    sender: Pick<User, "id" | "avatar" | "username">
}

export type GetChatsResponse = {
    chats: Chat[]
    currentPage: number
    nextPage: number | null
}

export type CreateChatResponse = {
    chat: Chat
}

export type GetChatMessagesResponse = {
    messages: Message[]
}

export type CreateChatMessageResponse = {
    chatMessage: Message
}
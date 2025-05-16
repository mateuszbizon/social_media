import { Chat } from "@/types/chatResponse"
import { User } from "@/types/models"
import { create } from 'zustand'

type ChatUser = Pick<User, "id" | "avatar" | "username">

type ChatState = {
    selectedChat: Chat | null
    setSelectedChat: (chat: Chat | null) => void
    chatUser: ChatUser | null
    setChatUser: (user: ChatUser | null) => void
}

const useChatStore = create<ChatState>()(set => ({
    selectedChat: null,
    setSelectedChat: (chat) => set(() => ({
        selectedChat: chat
    })),
    chatUser: null,
    setChatUser: (user) => set(() => ({
        chatUser: user
    })),
}))

export default useChatStore
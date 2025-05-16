import { Chat } from "@/types/chatResponse"
import { create } from 'zustand'

type ChatState = {
    selectedChat: Chat | null
    setSelectedChat: (chat: Chat | null) => void
}

const useChatStore = create<ChatState>()(set => ({
    selectedChat: null,
    setSelectedChat: (chat) => set(() => ({
        selectedChat: chat
    }))
}))

export default useChatStore
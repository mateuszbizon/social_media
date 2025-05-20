import { CreateChatMessageResponse, CreateChatResponse, GetChatMessagesResponse, GetChatsResponse } from "@/types/chatResponse";
import { API } from ".";
import { ChatMessageSchema, ChatSchema } from "@/types";

export async function getChats(page: number) {
    const { data } = await API.get<GetChatsResponse>(`/chats/get-chats?page=${page}`)

    return data
}

export async function createChat(chat: ChatSchema) {
    const { data } = await API.post<CreateChatResponse>("/chats/create-chat", chat)   

    return data
}

export async function getChatMessages(chatId: string, cursorId?: string) {
    const { data } = await API.get<GetChatMessagesResponse>(`/chats/get-chat-messages/${chatId}?cursorId=${cursorId}`)

    return data
}

export async function createChatMessage({ chatId, chatMessage }: { chatId: string, chatMessage: ChatMessageSchema }) {
    const { data } = await API.post<CreateChatMessageResponse>(`/chats/create-message/${chatId}`, chatMessage)

    return data
}
import { CreateChatResponse, GetChatMessagesResponse, GetChatsResponse } from "@/types/chatResponse";
import { API } from ".";
import { ChatSchema } from "@/types";

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
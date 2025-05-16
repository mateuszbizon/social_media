import { CreateChatResponse, GetChatsResponse } from "@/types/chatResponse";
import { API } from ".";

export async function getChats(page: number) {
    const { data } = await API.get<GetChatsResponse>(`/chats/get-chats?page=${page}`)

    return data
}

export async function createChat(userIds: string[]) {
    const { data } = await API.post<CreateChatResponse>("/chats/create-chat", userIds)   

    return data
}
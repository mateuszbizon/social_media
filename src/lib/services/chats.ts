import { GetChatsResponse } from "@/types/chatResponse";
import { API } from ".";

export async function getChats(page: number) {
    const { data } = await API.get<GetChatsResponse>(`/chats/get-chats?page=${page}`)

    return data
}
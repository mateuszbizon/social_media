import { GetChatsResponse } from "@/types/chatResponse";
import { API } from ".";

export async function getChats() {
    const { data } = await API.get<GetChatsResponse>("/chats/get-chats")

    return data
}
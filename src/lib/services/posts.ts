import { GetUserPostsResponse } from "@/types/postResponse";
import { API } from ".";

export async function getUserPosts(page: number, sort: string, userId: string) {
    const { data } = await API.get<GetUserPostsResponse>(`/post/get-user-posts/${userId}?page=${page}&sort=${sort}`)

    return data
}
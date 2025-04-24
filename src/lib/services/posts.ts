import { GetPostResponse, GetUserPostsResponse } from "@/types/postResponse";
import { API } from ".";
import { ServiceResult } from "@/types";
import { handleApiError } from "../utils";

export async function getUserPosts(page: number, sort: string, userId: string) {
    const { data } = await API.get<GetUserPostsResponse>(`/post/get-user-posts/${userId}?page=${page}&sort=${sort}`)

    return data
}

export async function getSinglePost(postId: string): Promise<ServiceResult<GetPostResponse>> {
    try {
        const { data } = await API.get(`/post/get-post/${postId}`)

        return {
            data
        }
    } catch (error) {
        return handleApiError(error)
    }
}
import { GetPostCommentsResponse } from "@/types/commentResponse"
import { API } from "."

export async function getPostComments(page: number, sort: string, postId: string) {
    const { data } = await API.get<GetPostCommentsResponse>(`/comment/get-post-comments/${postId}?page=${page}&sort=${sort}`)

    return data
}
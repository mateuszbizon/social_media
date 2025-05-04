import { GetCommentRepliesResponse } from "@/types/replyResponse"
import { API } from "."

export async function getCommentReplies(commentId: string, page: number) {
    const { data } = await API.get<GetCommentRepliesResponse>(`/reply/get-comment-replies/${commentId}?page=${page}`)

    return data
}
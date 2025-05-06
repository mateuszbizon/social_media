import { CreateCommentReplyReponse, GetCommentRepliesResponse } from "@/types/replyResponse"
import { API } from "."
import { PostCommentSchema } from "../validations/postCommentSchema"

export async function getCommentReplies(commentId: string, page: number) {
    const { data } = await API.get<GetCommentRepliesResponse>(`/reply/get-comment-replies/${commentId}?page=${page}`)

    return data
}

export async function createCommentReply({ commentId, replyingToId, comment }: { commentId: string, replyingToId: string, comment: PostCommentSchema }) {
    const { data } = await API.post<CreateCommentReplyReponse>(`/reply/create-reply/${commentId}/${replyingToId}`, comment)

    return data
}
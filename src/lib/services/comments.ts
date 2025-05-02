import { CreatePostCommentResponse, GetPostCommentsResponse } from "@/types/commentResponse"
import { API } from "."
import { PostCommentSchema } from "../validations/postCommentSchema"

export async function getPostComments(page: number, sort: string, postId: string) {
    const { data } = await API.get<GetPostCommentsResponse>(`/comment/get-post-comments/${postId}?page=${page}&sort=${sort}`)

    return data
}

export async function createPostComment({ commentData, postId }: { commentData: PostCommentSchema, postId: string }) {
    const { data } = await API.post<CreatePostCommentResponse>(`/comment/create-comment/${postId}`, commentData)

    return data
}
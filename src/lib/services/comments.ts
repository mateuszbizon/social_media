import { CreatePostCommentResponse, DeletePostCommentResponse, GetPostCommentsResponse } from "@/types/commentResponse"
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

export async function deletePostComment(commentId: string) {
    const { data } = await API.delete<DeletePostCommentResponse>(`/comment/delete-comment/${commentId}`)

    return data
}

export async function likePostComment(commentId: string) {
    const { data } = await API.patch(`/comment/like-comment/${commentId}`)

    return data
}
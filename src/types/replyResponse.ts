import { Reply, User } from "./models"

export type CommentReply = Pick<Reply, "id" | "content" | "createdAt"> & {
    likeCount: number
    author: Pick<User, "username" | "avatar" | "id">
    replyingTo: Pick<User, "id" | "username">
    isLiked: boolean
}

export type GetCommentRepliesResponse = {
    replies: CommentReply[]
    currentPage: number
    totalPages: number
    totalReplies: number
    nextPage: number | null
}

export type CreateCommentReplyReponse = {
    reply: CommentReply
}

export type DeleteCommentReplyResponse = {
    reply: Reply
}
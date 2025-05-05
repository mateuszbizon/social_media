import { Reply, ReplyLike, User } from "./models"

export type CommentReply = Pick<Reply, "id" | "content" | "createdAt"> & {
    likes: Pick<ReplyLike, "userId">[]
    author: Pick<User, "username" | "avatar" | "id">
    replyingTo: Pick<User, "id" | "username">
}

export type GetCommentRepliesResponse = {
    replies: CommentReply[]
    currentPage: number
    totalPages: number
    totalReplies: number
    nextPage: number | null
}
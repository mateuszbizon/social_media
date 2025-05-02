import { CommentLike, User, Comment } from "./models"

export type PostComment = Pick<Comment, "id" | "content" | "createdAt"> & {
    likes: Pick<CommentLike, "userId">[]
    author: Pick<User, "username" | "avatar" | "id">
    replyCount: number
}

export type GetPostCommentsResponse = {
    comments: PostComment[]
    totalPages: number
    currentPage: number
    totalComments: number
    nextPage: number | null
}

export type CreatePostCommentResponse = {
    comment: PostComment
}

export type DeletePostCommentResponse = {
    comment: Comment
}
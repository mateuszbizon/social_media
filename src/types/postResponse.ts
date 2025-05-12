import { Post, User } from "./models"

export type UserPost = Pick<Post, "id" | "image" | "content" | "createdAt"> & {
    likeCount: number
    commentCount: number
}

export type FeedPost = Pick<Post, "id" | "image" | "content" | "createdAt"> & {
    author: Pick<User, "username" | "avatar" | "id">
    likeCount: number
    commentCount: number
    isLiked: boolean
}

export type GetUserPostsResponse = {
    posts: UserPost[]
    currentPage: number
    totalPosts: number
    nextPage: number | null
}

export type GetPostResponse = {
    post: Pick<Post, "id" | "content" | "image" | "createdAt">
    author: Pick<User, "username" | "avatar" | "id">
    commentsCount: number
    likesCount: number
    isLiked: boolean
}

export type CreatePostResponse = {
    post: Post
}

export type GetFeedResponse = {
    posts: FeedPost[]
    nextPage: number | null
    currentPage: number
}
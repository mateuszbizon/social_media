import { Post, PostLike, User } from "./models"

export type UserPost = Pick<Post, "id" | "image" | "content" | "createdAt"> & {
    likeCount: number
    commentCount: number
}

export type FeedPost = Pick<Post, "id" | "image" | "content" | "createdAt"> & {
    author: Pick<User, "username" | "avatar" | "id">
    likes: Pick<PostLike, "userId">[]
    commentCount: number
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
    likes: Pick<PostLike, "userId">[]
}

export type CreatePostResponse = {
    post: Post
}

export type GetFeedResponse = {
    posts: FeedPost[]
    nextPage: number | null
}
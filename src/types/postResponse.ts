import { Post } from "./models"

export type UserPost = Pick<Post, "id" | "image" | "content" | "createdAt"> & {
    likeCount: number
    commentCount: number
} 

export type GetUserPostsResponse = {
    posts: UserPost[]
    currentPage: number
    totalPosts: number
    nextPage: number | null
}
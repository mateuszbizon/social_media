import { Post } from "./models"

export type GetUserPostsResponse = {
    posts: {
        id: Post["id"]
        content: Post["content"]
        image: Post["image"]
        createdAt: Post["createdAt"]
        likeCount: number
        commentCount: number
    }[]
    currentPage: number
    totalPosts: number
    nextPage: number | null
}
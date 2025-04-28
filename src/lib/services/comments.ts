import { API } from "."

export async function getPostComments(page: string, sort: string, postId: string) {
    const { data } = await API.get(`/comment/get-post-comments/${postId}?page=${page}&sort=${sort}`)

    return data
}
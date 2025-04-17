import { User } from "./models"

export type CheckUserAuthResponse = {
    user: User
}

export type SignInResponse = {
    user: User
    token: string
}

export type GetUserProfileResponse = {
    user: User
    postsCount: number
    followersCount: number
    followingCount: number
}

export type SearchUser = Pick<User, "username" | "firstName" | "lastName" | "avatar"> & {
    followersCount: number
}

export type SearchUsersResponse = {
    users: SearchUser[]
    currentPage: number
    totalUsers: number
    nextPage: number | null
}
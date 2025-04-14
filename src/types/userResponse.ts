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
import { User } from "./models"

export type CheckUserAuthResponse = {
    user: User
}

export type SignInResponse = {
    user: User
    token: string
}
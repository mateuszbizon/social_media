import { GetUserProfileResponse, SignInResponse } from "@/types/userResponse";
import { API } from ".";
import { SignInSchema } from "../validations/signInSchema";
import { AxiosError } from "axios";

export async function signIn(userData: SignInSchema): Promise<SignInResponse> {
    const { data } = await API.post(`/users/sign-in`, userData)

    return data
}

export async function getUserProfile(username: string) {
    try {
        const { data } = await API.get<GetUserProfileResponse>(`/users/get-user-profile/${username}`)

        return {
            success: true,
            data
        }
    } catch (error) {
        console.error(error)

        if (error instanceof AxiosError) {
            return {
                success: false,
                status: error.status
            }
        }

        return {
            success: false,
            status: undefined
        }
    }
}
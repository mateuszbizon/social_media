import { GetUserProfileResponse, SearchUsersResponse, SignInResponse, UpdateUserProfileResponse } from "@/types/userResponse";
import { API } from ".";
import { SignInSchema } from "../validations/signInSchema";
import { ServiceResult } from "@/types";
import { handleApiError } from "../utils";

export async function signIn(userData: SignInSchema): Promise<SignInResponse> {
    const { data } = await API.post(`/users/sign-in`, userData)

    return data
}

export async function getUserProfile(username: string): Promise<ServiceResult<GetUserProfileResponse>> {
    try {
        const { data } = await API.get<GetUserProfileResponse>(`/users/get-user-profile/${username}`)

        return {
            data
        }
    } catch (error) {
        console.error(error)

        return handleApiError(error)
    }
}

export async function searchUsers(page: number, query: string) {
    const { data } = await API.get<SearchUsersResponse>(`/users/search-users?page=${page}&query=${query}`)

    return data
}

export async function updateUserProfile(formData: FormData) {
    const { data } = await API.patch<UpdateUserProfileResponse>(`/users/update-user-profile`, formData)

    return data
}
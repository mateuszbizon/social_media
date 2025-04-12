import { CheckUserAuthResponse } from "@/types/userResponse";
import { API } from ".";

export async function checkUserAuth(): Promise<CheckUserAuthResponse> {
    const { data } = await API.get("/auth/check-user-auth")

    return data
}
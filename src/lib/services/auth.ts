import { API } from ".";

export async function checkUserAuth() {
    const { data } = await API.get("/auth/check-user-auth")

    return data
}
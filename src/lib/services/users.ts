import { API } from ".";
import { SignInSchema } from "../validations/signInSchema";

export async function signIn(userData: SignInSchema) {
    const { data } = await API.post(`/users/sign-in`, userData)

    return data
}
import axios from "axios"

export const API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL
})

API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token")

    if (token) {
        req.headers.Authorization = `Bearer ${token}`
    }

    return req
})
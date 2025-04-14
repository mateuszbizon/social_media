"use client"

import { API } from "@/lib/services"
import { checkUserAuth } from "@/lib/services/auth"
import { User } from "@/types/models"
import { createContext, ReactNode, useContext, useEffect, useLayoutEffect, useState } from "react"

type AuthContextType = {
    user: User | null
    saveUser: (user: User, token: string) => void
    logoutUser: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuthContext() {
    const context = useContext(AuthContext)

    if (!context) throw new Error("useAuthContext must be used within AuthContext")

    return context
}

function AuthContextProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null)

    function saveUser(user: User, token: string) {
        setUser(user)
        localStorage.setItem("token", token)
    }

    function logoutUser() {
        setUser(null)
        localStorage.removeItem("token")
    }

    useEffect(() => {
        const handleCheckUserAuth = async () => {
            try {
                const data = await checkUserAuth()

                setUser(data.user)
            } catch (error) {
                logoutUser()
            }
        }

        handleCheckUserAuth()
    }, [])

    useLayoutEffect(() => {
        const authInterceptor = API.interceptors.request.use(config => {
            const token = localStorage.getItem("token")

            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }

            return config
        })

        return () => {
            API.interceptors.request.eject(authInterceptor)
        }
    }, [user])

  return (
    <AuthContext.Provider value={{ user, saveUser, logoutUser }}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
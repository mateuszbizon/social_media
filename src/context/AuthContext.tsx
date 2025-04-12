"use client"

import { checkUserAuth } from "@/lib/services/auth"
import { User } from "@/types/models"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"

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
            } catch (error) {
                logoutUser()
            }
        }

        handleCheckUserAuth()
    }, [])

  return (
    <AuthContext.Provider value={{ user, saveUser, logoutUser }}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
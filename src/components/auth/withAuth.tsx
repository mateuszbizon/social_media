"use client"

import { useAuthContext } from '@/context/AuthContext'
import { User } from '@/types/models'
import { useRouter } from 'next/navigation'
import { ComponentType, useEffect } from 'react'

type WithAuthProps = {
    user: User
}

function withAuth<P extends WithAuthProps>(Component: ComponentType<P>) {
  return function AuthenticatedComponent(props: Omit<P, keyof WithAuthProps>) {
    const { user, isAuthLoading } = useAuthContext()
    const router = useRouter()

    useEffect(() => {
        if (!user && !isAuthLoading) {
            router.push("/sign-in")
        }
    }, [user, isAuthLoading])

    return (
        <Component {...(props as P)} user={user} />
    )
  }
}

export default withAuth
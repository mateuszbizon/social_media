import UserProfile from '@/components/users/UserProfile'
import { getUserProfile } from '@/lib/services/users'
import { notFound } from 'next/navigation'
import React from 'react'

type Props = {
    params: Promise<{ username: string }>
}

async function UserProfilePage({ params }: Props) {
    const { username } = await params
    const userProfileResult = await getUserProfile(username)

    if (userProfileResult.status == 404) return notFound()

  return (
    <div>
        <div>
            {userProfileResult.data && <UserProfile userProfile={userProfileResult.data} />}
        </div>
    </div>
  )
}

export default UserProfilePage
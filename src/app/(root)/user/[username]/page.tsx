import UserPosts from '@/components/posts/UserPosts'
import UserProfile from '@/components/users/UserProfile'
import { MESSAGES } from '@/constants/messages'
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

    if (userProfileResult.error) throw new Error(userProfileResult.error)

  return (
    <div>
        <div>
            {userProfileResult.data && (
                <>
                    <div className='mb-20'>
                        <UserProfile userProfile={userProfileResult.data} />
                    </div>
                    <UserPosts userId={userProfileResult.data.user.id} />
                </>
            )}
        </div>
    </div>
  )
}

export default UserProfilePage
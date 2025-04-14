import { getUserProfile } from '@/lib/services/users'
import React from 'react'

type Props = {
    params: Promise<{ username: string }>
}

async function UserProfilePage({ params }: Props) {
    const { username } = await params
    const userProfileResult = await getUserProfile(username)

  return (
    <div>UserProfilePage {username}</div>
  )
}

export default UserProfilePage
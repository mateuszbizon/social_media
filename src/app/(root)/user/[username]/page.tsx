import React from 'react'

type Props = {
    params: Promise<{ username: string }>
}

async function UserProfilePage({ params }: Props) {
    const { username } = await params

  return (
    <div>UserProfilePage {username}</div>
  )
}

export default UserProfilePage
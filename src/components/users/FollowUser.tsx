"use client"

import { useAuthContext } from '@/context/AuthContext'
import { Follow } from '@/types/models'
import React, { useState } from 'react'
import { Button } from '../ui/button'

type FollowUserProps = {
    userToFollowId: string
    userFollowers: Pick<Follow, "followerId">[]
}

function FollowUser({ userToFollowId, userFollowers }: FollowUserProps) {
    const { user, isAuthor } = useAuthContext()
    const checkIsFollowed = userFollowers.some(follow => follow.followerId === user?.id)
    const [isFollowed, setIsFollowed] = useState(checkIsFollowed)

    function followUser() {
        if (isFollowed) {
            setIsFollowed(false)
        } else {
            setIsFollowed(true)
        }
    }

    if (!user || isAuthor(userToFollowId)) return null

  return (
    <Button variant={isFollowed ? "outline" : "default"} size={"sm"} onClick={followUser}>
        {isFollowed ? "Unfollow" : "Follow"}
    </Button>
  )
}

export default FollowUser
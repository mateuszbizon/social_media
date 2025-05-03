"use client"

import { useAuthContext } from '@/context/AuthContext'
import useLikePost from '@/lib/hooks/services/posts/useLikePost'
import { Heart } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '../ui/button'

type PostLikeProps = {
    likes: { userId: string }[]
    setLikesCount: React.Dispatch<React.SetStateAction<number>>
    postId: string
}

function PostLike({ likes, postId, setLikesCount}: PostLikeProps) {
    const { user } = useAuthContext()
    const { handleLikePost } = useLikePost()
    const isLikedCheck = likes.some(like => like.userId === user?.id)
    const [isLiked, setIsLiked] = useState(isLikedCheck)

    async function handleLike() {
        if (!user) return

        if (isLiked) {
            setLikesCount(prev => prev - 1)
            setIsLiked(false)
        } else {
            setLikesCount(prev => prev + 1)
            setIsLiked(true)
        }

        await handleLikePost(postId)
    }

    if (!user) return <Heart className='text-black-2' />

  return (
    <Button variant={"transparent"} size={"link"} className={'hover:bg-transparent text-black-2 hover:text-red-2/50'} onClick={handleLike}>
        <Heart className={`size-6 ${isLiked && "like-icon-liked"}`} />
    </Button>
  )
}

export default PostLike
"use client"

import { useAuthContext } from '@/context/AuthContext'
import { Heart } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import useLikePostComment from '@/lib/hooks/services/comments/useLikePostComment'

type PostCommentLikeProps = {
    likes: { userId: string }[]
    setLikesCount: React.Dispatch<React.SetStateAction<number>>
    commentId: string
}

function PostCommentLike({ likes, setLikesCount, commentId }: PostCommentLikeProps) {
    const { user } = useAuthContext()
    const { handleLikePostComment } = useLikePostComment()
    const isLikedCheck = likes.some(like => like.userId === user?.id)
    const [isLiked, setIsLiked] = useState(isLikedCheck)

    async function onLike() {
        if (!user) return

        if (isLiked) {
            setLikesCount(prev => prev - 1)
            setIsLiked(false)
        } else {
            setLikesCount(prev => prev + 1)
            setIsLiked(true)
        }

        await handleLikePostComment(commentId)
    }

    if (!user) return <Heart className='size-4 text-black-2' />

  return (
    <Button variant={"transparent"} size={"link"} className={'hover:bg-transparent text-black-2 hover:text-red-2/50'} onClick={onLike}>
        <Heart className={`${isLiked && "fill-red-2 stroke-red-2 transition duration-200"}`} />
    </Button>
  )
}

export default PostCommentLike
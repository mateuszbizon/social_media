"use client"

import { useAuthContext } from '@/context/AuthContext'
import { Heart } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import useLikePostComment from '@/lib/hooks/services/comments/useLikePostComment'

type PostCommentLikeProps = {
    isLiked: boolean
    setLikesCount: React.Dispatch<React.SetStateAction<number>>
    commentId: string
}

function PostCommentLike({ isLiked: isLikedProp, setLikesCount, commentId }: PostCommentLikeProps) {
    const { user } = useAuthContext()
    const { handleLikePostComment } = useLikePostComment()
    const [isLiked, setIsLiked] = useState(isLikedProp)

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
        <Heart className={`${isLiked && "like-icon-liked"}`} />
    </Button>
  )
}

export default PostCommentLike
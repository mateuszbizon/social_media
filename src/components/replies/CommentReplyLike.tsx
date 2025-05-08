"use client"

import { useAuthContext } from '@/context/AuthContext'
import { Heart } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '../ui/button'

type CommentReplyLikeProps = {
    likes: { userId: string }[]
    replyId: string
    setLikesCount: React.Dispatch<React.SetStateAction<number>>
}

function CommentReplyLike({ likes, replyId, setLikesCount }: CommentReplyLikeProps) {
    const { user } = useAuthContext()
    const isLikedCheck = likes.some(like => like.userId === user?.id)
    const [isLiked, setIsLiked] = useState(isLikedCheck)

    function likeReply() {
        if (!user) return

        if (isLiked) {
            setLikesCount(prev => prev - 1)
            setIsLiked(false)
        } else {
            setLikesCount(prev => prev + 1)
            setIsLiked(true)
        }
    }

    if (!user) return <Heart className='size-4 text-black-2' />

  return (
    <Button variant={"transparent"} size={"link"} className={'hover:bg-transparent text-black-2 hover:text-red-2/50'} onClick={likeReply}>
        <Heart className={`${isLiked && "like-icon-liked"}`} />
    </Button>
  )
}

export default CommentReplyLike
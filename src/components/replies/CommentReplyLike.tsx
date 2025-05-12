"use client"

import { useAuthContext } from '@/context/AuthContext'
import { Heart } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import useLikeCommentReply from '@/lib/hooks/services/replies/useLikeCommentReply'

type CommentReplyLikeProps = {
    isLiked: boolean
    replyId: string
    setLikesCount: React.Dispatch<React.SetStateAction<number>>
}

function CommentReplyLike({ isLiked: isLikedProp, replyId, setLikesCount }: CommentReplyLikeProps) {
    const { user } = useAuthContext()
    const { handleLikeCommentReply } = useLikeCommentReply()
    const [isLiked, setIsLiked] = useState(isLikedProp)

    async function likeReply() {
        if (!user) return

        if (isLiked) {
            setLikesCount(prev => prev - 1)
            setIsLiked(false)
        } else {
            setLikesCount(prev => prev + 1)
            setIsLiked(true)
        }

        await handleLikeCommentReply(replyId)
    }

    if (!user) return <Heart className='size-4 text-black-2' />

  return (
    <Button variant={"transparent"} size={"link"} className={'hover:bg-transparent text-black-2 hover:text-red-2/50'} onClick={likeReply}>
        <Heart className={`${isLiked && "like-icon-liked"}`} />
    </Button>
  )
}

export default CommentReplyLike
"use client"

import { PostLike as PostLikeType } from '@/types/models'
import { GetPostResponse } from '@/types/postResponse'
import { Heart } from 'lucide-react'
import React, { useState } from 'react'

type PostLikeProps = {
    likes: GetPostResponse["likes"]
    authorId: string
}

function PostLike({ likes: likesArray, authorId }: PostLikeProps) {
    const [likes, setLikes] = useState(likesArray)
    const isLiked = likes.some(like => like.userId === authorId)

    function handleLike() {
        if (isLiked) {
            setLikes(likes.filter(like => like.userId !== authorId))
        } else {
            const newLike: Pick<PostLikeType, "userId"> = {
                userId: authorId,
            }
            setLikes([...likes, newLike])
        }
    }

  return (
    <div className='flex items-center gap-3'>
        <button onClick={handleLike} className='cursor-pointer'>
            <Heart className={`${isLiked && "fill-red-2 stroke-red-2 transition duration-200"}`} />
        </button>
        <span className='text-black-2 font-medium text-lg'>{likes.length}</span>
    </div>
  )
}

export default PostLike
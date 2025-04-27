"use client"

import useLikePost from '@/lib/hooks/services/posts/useLikePost'
import { PostLike as PostLikeType } from '@/types/models'
import { GetPostResponse } from '@/types/postResponse'
import { Heart } from 'lucide-react'
import React, { useState } from 'react'

type PostLikeProps = {
    likes: GetPostResponse["likes"]
    authorId: string
    postId: string
}

function PostLike({ likes: likesArray, authorId, postId }: PostLikeProps) {
    const [likes, setLikes] = useState(likesArray)
    const { handleLikePost } = useLikePost()
    const isLiked = likes.some(like => like.userId === authorId)

    async function handleLike() {
        if (isLiked) {
            setLikes(likes.filter(like => like.userId !== authorId))
        } else {
            const newLike: Pick<PostLikeType, "userId"> = {
                userId: authorId,
            }
            setLikes([...likes, newLike])
        }

        await handleLikePost(postId)
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
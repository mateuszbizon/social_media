"use client"

import React from 'react'
import { Button } from '../ui/button'
import { Trash2 } from 'lucide-react'
import { useAuthContext } from '@/context/AuthContext'

type PostCommentDeleteProps = {
    commentId: string
    authorId: string
}

function PostCommentDelete({ commentId, authorId }: PostCommentDeleteProps) {
    const { isAuthor } = useAuthContext()

    if (!isAuthor(authorId)) return null

  return (
    <>
        <Button variant={"transparent"} size={"link"} className='hover:bg-transparent text-red-2 hover:text-red-3'>
            <Trash2  />
        </Button>
    </>
  )
}

export default PostCommentDelete
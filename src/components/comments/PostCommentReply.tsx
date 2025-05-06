"use client"

import React from 'react'
import { Button } from '../ui/button'

type PostCommentReplyProps = {
    toggleReplyForm: () => void
}

function PostCommentReply({ toggleReplyForm }: PostCommentReplyProps) {
  return (
    <Button onClick={toggleReplyForm} variant={"transparent"} size={"link"} className='text-black-2 hover:text-gray-2 hover:bg-transparent text-sm'>
        Reply
    </Button>
  )
}

export default PostCommentReply
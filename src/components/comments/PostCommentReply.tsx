"use client"

import useReplyStore, { Reply } from '@/lib/store/replyStore'
import React from 'react'
import { Button } from '../ui/button'

type PostCommentReplyProps = {
    reply: Reply
}

function PostCommentReply({ reply }: PostCommentReplyProps) {
    const { reply: replyStore, setReply, clearReply } = useReplyStore()

    function addReply() {
        if (replyStore) {
            if (replyStore.commentId === reply.commentId) {
                clearReply()
            } else {
                setReply(reply)
            }

            return
        }

        setReply(reply)
    }

  return (
    <Button onClick={addReply} variant={"transparent"} size={"link"} className='text-black-2 hover:text-gray-2 hover:bg-transparent text-sm'>
        Reply
    </Button>
  )
}

export default PostCommentReply
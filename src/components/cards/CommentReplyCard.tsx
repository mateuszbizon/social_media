"use client"

import { CommentReply } from '@/types/replyResponse'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import moment from 'moment'
import { buttonVariants } from '../ui/button'

type CommentReplyCardProps = {
    reply: CommentReply
}

function CommentReplyCard({ reply }: CommentReplyCardProps) {
    const [likesCount, setLikesCount] = useState(reply.likes.length)

  return (
    <div className='flex space-x-2'>
        <div>
            <Link href={`/user/${reply.author.username}`} target='_blank'>
                <div className='relative size-10 rounded-full overflow-hidden'>
                    <Image src={reply.author.avatar ?? "/user_empty.jpg"} alt='Author image' fill className='object-cover' />
                </div>
            </Link>
        </div>

        <div className='space-y-1'>
            <p className='space-x-2 text-black-2 text-sm'>
                <Link href={`/user/${reply.author.username}`} target='_blank' className={`${buttonVariants({ variant: "link", size: "link" })} text-sm`}>
                    <span>{reply.author.username}</span>
                </Link>
                <span>
                    {reply.content}
                </span>
            </p>
            <div className='flex gap-3 text-gray-2 text-sm'>
                <span>{moment(reply.createdAt.toString()).fromNow()}</span>
                <span className='font-medium'>{likesCount} likes</span>
            </div>
        </div>
    </div>
  )
}

export default CommentReplyCard
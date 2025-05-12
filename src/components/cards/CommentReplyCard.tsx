"use client"

import { CommentReply } from '@/types/replyResponse'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import moment from 'moment'
import { buttonVariants } from '../ui/button'
import PostCommentReply from '../comments/PostCommentReply'
import CommentReplyForm from '../forms/CommentReplyForm'
import useReply from '@/lib/hooks/useReply'
import CommentReplyDelete from '../replies/CommentReplyDelete'
import CommentReplyLike from '../replies/CommentReplyLike'

type CommentReplyCardProps = {
    reply: CommentReply
    commentId: string
}

function CommentReplyCard({ reply, commentId }: CommentReplyCardProps) {
    const [likesCount, setLikesCount] = useState(reply.likeCount)
    const { replyFormShow, toggleReplyForm, closeReplyForm } = useReply()

  return (
    <div className='space-y-2'>
        <div className='flex space-x-2'>
            <div>
                <Link href={`/user/${reply.author.username}`} target='_blank'>
                    <div className='relative size-10 rounded-full overflow-hidden'>
                        <Image src={reply.author.avatar ?? "/user_empty.jpg"} alt='Author image' fill className='object-cover' />
                    </div>
                </Link>
            </div>

            <div className='space-y-1'>
                <Link href={`/user/${reply.author.username}`} target='_blank' className={`${buttonVariants({ variant: "link", size: "link" })} text-sm text-black-2`}>
                    {reply.author.username}
                </Link>
                <p className='space-x-2 text-black-2 text-sm'>
                    <Link href={`/user/${reply.replyingTo.username}`} target='_blank' className={`text-primary font-medium`}>
                        @{reply.replyingTo.username}
                    </Link>
                    <span>
                        {reply.content}
                    </span>
                </p>
                <div className='flex gap-3 text-gray-2 text-sm'>
                    <span>{moment(reply.createdAt.toString()).fromNow()}</span>
                    <span className='font-medium'>{likesCount} likes</span>
                    <CommentReplyLike replyId={reply.id} isLiked={reply.isLiked} setLikesCount={setLikesCount} />
                    <PostCommentReply toggleReplyForm={toggleReplyForm} />
                    <CommentReplyDelete replyId={reply.id} authorId={reply.author.id} />
                </div>
            </div>
        </div>

        <div className={`${replyFormShow ? "block" : "hidden"}`}>
            <CommentReplyForm commentId={commentId} replyingToId={reply.author.id} closeReplyForm={closeReplyForm} />
        </div>
    </div>
  )
}

export default CommentReplyCard
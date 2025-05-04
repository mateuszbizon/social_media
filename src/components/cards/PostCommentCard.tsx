"use client"

import { PostComment } from '@/types/commentResponse'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import { Button, buttonVariants } from '../ui/button'
import moment from "moment"
import PostCommentDelete from '../comments/PostCommentDelete'
import PostCommentLike from '../comments/PostCommentLike'
import CommentReplies from '../replies/CommentReplies'
import { ChevronDown } from 'lucide-react'

type PostCommentCardProps = {
    comment: PostComment
}

function PostCommentCard({ comment }: PostCommentCardProps) {
    const [likesCount, setLikesCount] = useState(comment.likes.length)
    const [showReplies, setshowReplies] = useState(false)

  return (
    <div className='flex justify-between items-center'>
        <div className='flex space-x-2'>
            <div>
                <Link href={`/user/${comment.author.username}`} target='_blank'>
                    <div className='relative size-10 rounded-full overflow-hidden'>
                        <Image src={comment.author.avatar ?? "/user_empty.jpg"} alt='Author image' fill className='object-cover' />
                    </div>
                </Link>
            </div>

            <div className='space-y-1'>
                <p className='space-x-2 text-black-2 text-sm'>
                    <Link href={`/user/${comment.author.username}`} target='_blank' className={`${buttonVariants({ variant: "link", size: "link" })} text-sm`}>
                        <span>{comment.author.username}</span>
                    </Link>
                    <span>
                        {comment.content}
                    </span>
                </p>
                <div className='flex gap-3 text-gray-2 text-sm'>
                    <span>{moment(comment.createdAt.toString()).fromNow()}</span>
                    <span className='font-medium'>{likesCount} likes</span>
                    <PostCommentLike likes={comment.likes} setLikesCount={setLikesCount} commentId={comment.id} />
                    <PostCommentDelete commentId={comment.id} authorId={comment.author.id} />
                </div>
                {comment.replyCount > 0 && (
                    <>
                        {showReplies ? (
                            <CommentReplies commentId={comment.id} />
                        ) : (
                            <Button variant={"transparent"} size={"sm"} className='text-black-2' onClick={() => setshowReplies(true)}>
                                Show replies ({comment.replyCount}) <ChevronDown />
                            </Button>
                        )}
                    </>
                )}
            </div>
        </div>
    </div>
  )
}

export default PostCommentCard
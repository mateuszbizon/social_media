import { PostComment } from '@/types/commentResponse'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { buttonVariants } from '../ui/button'

type PostCommentCardProps = {
    comment: PostComment
}

function PostCommentCard({ comment }: PostCommentCardProps) {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex space-x-2'>
            <Link href={`/user/${comment.author.username}`} target='_blank'>
                <div className='relative size-10 rounded-full overflow-hidden'>
                    <Image src={comment.author.avatar ?? "/user_empty.jpg"} alt='Author image' fill className='object-cover' />
                </div>
            </Link>
            
            <div className='space-y-1'>
                <p className='space-x-2 text-black-2 text-sm'>
                    <Link href={`/user/${comment.author.username}`} target='_blank' className={`${buttonVariants({ variant: "link", size: "link" })} text-sm`}>
                        <span className='font-medium'>{comment.author.username}</span>
                    </Link>
                    <span>
                        {comment.content}
                    </span>
                </p>
                <p className='text-gray-2 line-clamp-1 text-sm'>{comment.createdAt.toString()}</p>
            </div>
        </div>
    </div>
  )
}

export default PostCommentCard
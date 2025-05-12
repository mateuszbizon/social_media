"use client"

import { FeedPost } from '@/types/postResponse'
import Link from 'next/link'
import Image from "next/image"
import React, { useState } from 'react'
import moment from 'moment'
import PostLike from '../posts/PostLike'
import { MessageCircle } from 'lucide-react'

type FeedPostCardProps = {
    post: FeedPost
}

function FeedPostCard({ post }: FeedPostCardProps) {
    const [likesCount, setLikesCount] = useState(post.likes.length)

  return (
    <div className='bg-white p-5 rounded-2xl space-y-3 border border-gray-2/50'>
        <div className='flex items-center space-x-2'>
            <Link href={`/user/${post.author.username}`} target='_blank'>
                <div className='relative size-12 rounded-full overflow-hidden'>
                    <Image src={post.author.avatar ?? "/user_empty.jpg"} alt='Author image' fill className='object-cover' />
                </div>
            </Link>
            <div className='space-y-1'>
                <Link href={`/user/${post.author.username}`} target='_blank'>
                    <p className='text-black-2 font-medium line-clamp-1'>{post.author.username}</p>
                </Link>
                <p className='text-gray-2 line-clamp-1 text-sm'>{moment(post.createdAt.toString()).fromNow()}</p>
            </div>
        </div>

        {post.image && (
            <div className='relative w-full aspect-video rounded-2xl overflow-hidden md:hidden'>
                <Image src={post.image} alt='Post image' fill className='object-cover' />
            </div>
        )}

        <p className='font-medium text-black-2'>{post.content}</p>

        <div className='flex items-center gap-5'>
            <div className='flex gap-3 items-center'>
                <PostLike likes={post.likes} postId={post.id} setLikesCount={setLikesCount} />
                <span className='text-black-2 font-medium text-lg'>{likesCount}</span>
            </div>
            <div className='flex gap-3 items-center'>
                <MessageCircle />
                <span className='text-black-2 font-medium text-lg'>{post.commentCount}</span>
            </div>
        </div>

        <Link href={`/post/${post.id}`} target='_blank' className='text-black-2'>
            Show post details
        </Link>
    </div>
  )
}

export default FeedPostCard
import { UserPost } from '@/types/postResponse'
import { Heart, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type UserPostCardProps = {
    post: UserPost
}

function UserPostCard({ post }: UserPostCardProps) {
    const isImage = post.image ? true : false

  return (
    <Link href={`/post/${post.id}`} className='group'>
        {isImage ? (
            <div className='relative size-full'>
                <Image src={post.image!} alt='Post image' fill className='object-cover rounded-xl' />
            </div>
        ) : (
            <div className='size-full border border-gray-2 flex justify-center items-center p-5 rounded-xl'>
                <p className='text-lg text-black-2 line-clamp-8'>{post.content}</p>
            </div>
        )}

        <div className='absolute inset-0 flex justify-center items-center gap-5 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl'>
            <div className='text-white flex flex-col items-center gap-3'>
                <Heart className='size-6 fill-white' />
                <span className='text-xl font-medium'>{post.likeCount}</span>
            </div>
            <div className='text-white flex flex-col items-center gap-3'>
                <MessageCircle className='size-6 fill-white' />
                <span className='text-xl font-medium'>{post.commentCount}</span>
            </div>
        </div>
    </Link>
  )
}

export default UserPostCard
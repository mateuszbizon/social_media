import { GetPostResponse } from '@/types/postResponse'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import PostLike from './PostLike'
import { MessageCircle } from 'lucide-react'
import PostComments from '../comments/PostComments'

type SinglePostProps = GetPostResponse

function SinglePost({ post, author, commentsCount, likes }: SinglePostProps) {
  return (
    <div className='space-y-5 rounded-2xl p-5 border border-gray-2'>
        <div className={`grid gap-5 ${post.image && "md:grid-cols-2"}`}>
            <div className='space-y-5'>
                <div className='flex justify-between gap-2'>
                    <div className='flex items-center space-x-2'>
                        <Link href={`/user/${author.username}`} target='_blank'>
                            <div className='relative size-12 rounded-full overflow-hidden'>
                                <Image src={author.avatar ?? "/user_empty.jpg"} alt='Author image' fill className='object-cover' />
                            </div>
                        </Link>
                        <div className='space-y-1'>
                            <Link href={`/user/${author.username}`} target='_blank'>
                                <p className='text-black-2 font-medium line-clamp-1'>{author.username}</p>
                            </Link>
                            <p className='text-gray-2 line-clamp-1 text-sm'>{post.createdAt.toString()}</p>
                        </div>
                    </div>
                </div>

                <p className='font-medium text-black-2'>{post.content}</p>
                
                {post.image && (
                    <div className='relative w-full aspect-video rounded-2xl overflow-hidden md:hidden'>
                        <Image src={post.image} alt='Post image' fill className='object-cover' />
                    </div>
                )}
            </div>
            {post.image && (
                <div className='hidden md:block'>
                    <div className='relative w-full max-w-[400px] mx-auto aspect-video rounded-2xl overflow-hidden'>
                        <Image src={post.image} alt='Post image' fill className='object-cover' />
                    </div>
                </div>
            )}
        </div>

        <div className='space-y-5'>
            <div className='flex items-center gap-5'>
                <PostLike likes={likes} postId={post.id} />
                <div className='flex gap-3 items-center'>
                    <MessageCircle />
                    <span className='text-black-2 font-medium text-lg'>{commentsCount}</span>
                </div>
            </div>

            <PostComments postId={post.id} />
        </div>
    </div>
  )
}

export default SinglePost
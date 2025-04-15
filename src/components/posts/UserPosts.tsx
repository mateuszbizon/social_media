"use client"

import useGetUserPosts from '@/lib/hooks/services/posts/useGetUserPosts'
import React, { useEffect } from 'react'
import { useInView } from "react-intersection-observer"

type UserPostsProps = {
    userId: string
}

function UserPosts({ userId }: UserPostsProps) {
    const { data, isPending, status, fetchNextPage, isFetchingNextPage, error } = useGetUserPosts({
        userId
    })
    const { ref, inView } = useInView()

    useEffect(() => {
        if (inView) {
            fetchNextPage()
        }
    }, [inView, fetchNextPage])

    if (isPending) return <div>Loading...</div>

    if (status === "error") return <div>{error?.message}</div>

  return (
    <div>
        <div className='space-y-5'>
            {data?.pages.map(page => (
                <div key={page.currentPage} className='grid grid-cols-3 gap-5'>
                    {page.posts.map(post => (
                        <div key={post.id} className='w-full aspect-square bg-gray-2'>
                            <p className='line-clamp-2 text-black-2'>{post.content}</p>
                        </div>
                    ))}
                </div>
            ))}

            <div ref={ref}>{isFetchingNextPage && <div>Loading...</div>}</div>
        </div>
    </div>
  )
}

export default UserPosts
"use client"

import useGetUserPosts from '@/lib/hooks/services/posts/useGetUserPosts'
import { UserPostsQueryParams } from '@/types'
import React, { useEffect, useState } from 'react'
import { useInView } from "react-intersection-observer"
import { Button } from '../ui/button'
import UserPostsLoading from '../loadings/UserPostsLoading'

type UserPostsProps = {
    userId: string
}

function UserPosts({ userId }: UserPostsProps) {
    const [postsSort, setPostsSort] = useState<UserPostsQueryParams["sort"]>("desc")
    const { data, isPending, status, fetchNextPage, isFetchingNextPage, error } = useGetUserPosts({
        userId,
        sort: postsSort
    })
    const { ref, inView } = useInView()

    useEffect(() => {
        if (inView) {
            fetchNextPage()
        }
    }, [inView, fetchNextPage])

    if (status === "error") return <div>{error?.message}</div>

  return (
    <div>
        <div className='flex gap-2 mb-5'>
            <Button variant={postsSort === "desc" ? "default" : "outline"} onClick={() => setPostsSort("desc")}>
                Latest
            </Button>
            <Button variant={postsSort === "asc" ? "default" : "outline"} onClick={() => setPostsSort("asc")}>
                Oldest
            </Button>
        </div>
        {isPending && <UserPostsLoading />}
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
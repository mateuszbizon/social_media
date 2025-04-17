"use client"

import useGetUserPosts from '@/lib/hooks/services/posts/useGetUserPosts'
import { UserPostsQueryParams } from '@/types'
import React, { useEffect, useState } from 'react'
import { useInView } from "react-intersection-observer"
import { Button } from '../ui/button'
import UserPostsLoading from '../loadings/UserPostsLoading'
import UserPostCard from '../cards/UserPostCard'
import CircleLoading from '../ui/circleLoading'
import MainError from '../errors/MainError'
import FlatList from '../common/FlatList'

type UserPostsProps = {
    userId: string
}

function UserPosts({ userId }: UserPostsProps) {
    const [postsSort, setPostsSort] = useState<UserPostsQueryParams["sort"]>("desc")
    const { data, isPending, isError, fetchNextPage, isFetchingNextPage, error } = useGetUserPosts({
        userId,
        sort: postsSort
    })
    const { ref, inView } = useInView()

    useEffect(() => {
        if (inView) {
            fetchNextPage()
        }
    }, [inView, fetchNextPage])

    if (isError) return <MainError message={error?.message || ""} />

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
                <FlatList
                    data={page.posts}
                    renderItem={(post) => (
                        <UserPostCard post={post} />
                    )}
                    key={page.currentPage}
                    keyExtractor={(post) => post.id}
                    className='grid sm:grid-cols-2 md:grid-cols-3 gap-5'
                    itemListProps={() => ({
                        className: "relative w-full aspect-square"
                    })}
                />
            ))}

            <div ref={ref}>{isFetchingNextPage && <CircleLoading className='mx-auto' />}</div>
        </div>
    </div>
  )
}

export default UserPosts
"use client"

import UserPostCard from '@/components/cards/UserPostCard'
import FlatList from '@/components/common/FlatList'
import MainError from '@/components/errors/MainError'
import UserPostsLoading from '@/components/loadings/UserPostsLoading'
import { Button } from '@/components/ui/button'
import CircleLoading from '@/components/ui/circleLoading'
import useGetLikedPosts from '@/lib/hooks/services/posts/useGetLikedPosts'
import { UserPostsQueryParams } from '@/types'
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

function LikedPosts() {
    const [postsSort, setPostsSort] = useState<UserPostsQueryParams["sort"]>("desc")
    const { data, isError, error, isPending, isFetchingNextPage, fetchNextPage } = useGetLikedPosts({
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

export default LikedPosts
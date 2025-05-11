"use client"

import useGetFeed from '@/lib/hooks/services/posts/useGetFeed'
import React, { useEffect } from 'react'
import CircleLoading from '../ui/circleLoading'
import MainError from '../errors/MainError'
import { useInView } from 'react-intersection-observer'
import FlatList from '../common/FlatList'

function FeedPosts() {
    const { data, isError, error, isFetchingNextPage, fetchNextPage, isPending } = useGetFeed()
    const { ref, inView } = useInView()

    useEffect(() => {
        if (inView) {
            fetchNextPage()
        }
    }, [inView, fetchNextPage])

    if (isPending) return <CircleLoading className='mx-auto w-16' />

    if (isError) return <MainError message={error?.message || ""} />

  return (
    <div className='w-full max-w-[500px] mx-auto space-y-5'>
        {data?.pages.map(page => (
            <FlatList 
                data={page.posts}
                key={page.currentPage}
                keyExtractor={(post) => post.id}
                renderItem={(post) => (
                    <div>
                        {post.content}
                    </div>
                )}
                className='space-y-5'
            />
        ))}

        <div ref={ref}>{isFetchingNextPage && <CircleLoading className='mx-auto' />}</div>
    </div>
  )
}

export default FeedPosts
"use client"

import useGetCommentReplies from '@/lib/hooks/services/replies/useGetCommentReplies'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import CircleLoading from '../ui/circleLoading'
import FlatList from '../common/FlatList'

type CommentRepliesProps = {
    commentId: string
}

function CommentReplies({ commentId }: CommentRepliesProps) {
    const { data, isError, error, fetchNextPage, isFetchingNextPage, isPending } = useGetCommentReplies({
        commentId
    })
    const { ref, inView } = useInView()

    useEffect(() => {
        if (inView) {
            fetchNextPage()
        }
    }, [inView, fetchNextPage])

    if (isPending) return <CircleLoading className='mx-auto' />

    if (isError) return <div className='text-black-2 font-medium text-center'>{error?.message}</div>

  return (
    <div className='space-y-5'>
        {data?.pages.map(page => (
            <FlatList
                data={page.replies}
                renderItem={(reply) => (
                    <div>
                        {reply.content}
                    </div>
                )}
                keyExtractor={(reply) => reply.id}
                key={page.currentPage}
                className='space-y-5'
            />
        ))}

        <div ref={ref}>{isFetchingNextPage && <CircleLoading className='mx-auto' />}</div>
    </div>
  )
}

export default CommentReplies
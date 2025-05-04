"use client"

import useGetCommentReplies from '@/lib/hooks/services/replies/useGetCommentReplies'
import React from 'react'
import CircleLoading from '../ui/circleLoading'
import FlatList from '../common/FlatList'
import { Button } from '../ui/button'
import CommentReplyCard from '../cards/CommentReplyCard'

type CommentRepliesProps = {
    commentId: string
}

function CommentReplies({ commentId }: CommentRepliesProps) {
    const { data, isError, error, fetchNextPage, isFetchingNextPage, isPending, hasNextPage } = useGetCommentReplies({
        commentId
    })

    if (isPending) return <CircleLoading className='mx-auto w-8' />

    if (isError) return <div className='text-black-2 font-medium text-center'>{error?.message}</div>

  return (
    <div className='space-y-5'>
        {data?.pages.map(page => (
            <FlatList
                data={page.replies}
                renderItem={(reply) => (
                    <CommentReplyCard reply={reply} />
                )}
                keyExtractor={(reply) => reply.id}
                key={page.currentPage}
                className='space-y-5'
            />
        ))}

        {hasNextPage && (
            <div className='flex justify-center'>
                <Button size={"sm"} onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
                    {isFetchingNextPage ? "Loading..." : "Show more"}
                </Button>
            </div>
        )}
    </div>
  )
}

export default CommentReplies
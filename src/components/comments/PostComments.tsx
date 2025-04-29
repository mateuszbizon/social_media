"use client"

import useGetPostComments from '@/lib/hooks/services/comments/useGetPostComments'
import { PostCommentsQueryParams } from '@/types'
import React, { useEffect, useState } from 'react'
import CircleLoading from '../ui/circleLoading'
import { Button } from '../ui/button'
import FlatList from '../common/FlatList'
import { useInView } from 'react-intersection-observer'
import PostCommentCard from '../cards/PostCommentCard'

type PostCommentsProps = {
    postId: string
}

function PostComments({ postId }: PostCommentsProps) {
    const [commentsSort, setCommentsSort] = useState<PostCommentsQueryParams["sort"]>("popular")
    const { data, isPending, isError, isFetchingNextPage, fetchNextPage, error } = useGetPostComments({
        postId,
        sort: commentsSort
    })
    const { ref, inView } = useInView()

    useEffect(() => {
        if (inView) {
            fetchNextPage()
        }
    }, [inView, fetchNextPage])

    if (isError) return <div className='text-black-2 font-medium text-center'>{error?.message}</div>

  return (
    <div>
        <div className='flex gap-2 mb-5'>
            <Button variant={commentsSort === "popular" ? "default" : "outline"} size={"sm"} onClick={() => setCommentsSort("popular")}>
                Popular
            </Button>
            <Button variant={commentsSort === "desc" ? "default" : "outline"} size={"sm"} onClick={() => setCommentsSort("desc")}>
                Latest
            </Button>
        </div>
        {isPending && <CircleLoading className='mx-auto' />}
        <div className='space-y-5'>
            {data?.pages.map(page => (
                <FlatList
                    data={page.comments}
                    renderItem={(comment) => (
                        <PostCommentCard comment={comment} />
                    )}
                    keyExtractor={(comment) => comment.id}
                    key={page.currentPage}
                    className='space-y-5'
                    renderEmptyListComponent={() => (
                        <p className='text-black-2 font-medium text-center'>No comments yet</p>
                    )}
                />
            ))}

            <div ref={ref}>{isFetchingNextPage && <CircleLoading className='mx-auto' />}</div>
        </div>
    </div>
  )
}

export default PostComments
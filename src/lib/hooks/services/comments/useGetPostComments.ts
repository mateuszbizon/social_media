import { getPostComments } from '@/lib/services/comments'
import { PostCommentsQueryParams } from '@/types'
import { useInfiniteQuery } from '@tanstack/react-query'
import React from 'react'

type Props = {
    postId: string
    sort: PostCommentsQueryParams["sort"]
}

function useGetPostComments({ postId, sort }: Props) {
    const { data, error, fetchNextPage, isFetchingNextPage, isPending, isError } = useInfiniteQuery({
        queryKey: ["postComments", sort],
        queryFn: ({ pageParam }) =>  getPostComments(pageParam, sort, postId),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.nextPage
    })

  return {
    data,
    error,
    fetchNextPage,
    isFetchingNextPage,
    isPending,
    isError,
  }
}

export default useGetPostComments
import { getCommentReplies } from '@/lib/services/replies'
import { useInfiniteQuery } from '@tanstack/react-query'

type Props = {
    commentId: string
}

function useGetCommentReplies({ commentId }: Props) {
    const { data, isError, error, fetchNextPage, isFetchingNextPage, isPending } = useInfiniteQuery({
        queryKey: ['getCommentReplies'],
        queryFn: ({ pageParam }) => getCommentReplies(commentId, pageParam),
        getNextPageParam: (lastPage) => lastPage.nextPage,
        initialPageParam: 1
    })

  return {
    data,
    isError,
    error,
    fetchNextPage,
    isFetchingNextPage,
    isPending,
  }
}

export default useGetCommentReplies
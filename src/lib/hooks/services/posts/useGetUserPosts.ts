import { getUserPosts } from '@/lib/services/posts'
import { useInfiniteQuery } from '@tanstack/react-query'

type Props = {
    userId: string
}

function useGetUserPosts({ userId }: Props) {
    const { data, error, status, fetchNextPage, isFetchingNextPage, isPending } = useInfiniteQuery({
        queryKey: ["userPosts"],
        queryFn: ({ pageParam }) => getUserPosts(pageParam, "desc", userId),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.nextPage
    })

  return {
    data,
    error,
    status,
    fetchNextPage,
    isFetchingNextPage,
    isPending,
  }
}

export default useGetUserPosts
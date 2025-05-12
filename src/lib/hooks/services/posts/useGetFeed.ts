import { getFeed } from '@/lib/services/posts'
import { useInfiniteQuery } from '@tanstack/react-query'

function useGetFeed() {
    const { data, isError, error, isFetchingNextPage, fetchNextPage, isPending } = useInfiniteQuery({
        queryKey: ["getFeed"],
        queryFn: ({ pageParam }) => getFeed(pageParam),
        getNextPageParam: (lastPage) => lastPage.nextPage,
        initialPageParam: 1
    })

  return {
    data,
    isError,
    error,
    isFetchingNextPage,
    fetchNextPage,
    isPending,
  }
}

export default useGetFeed
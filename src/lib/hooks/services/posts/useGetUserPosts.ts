import { getUserPosts } from '@/lib/services/posts'
import { useInfiniteQuery } from '@tanstack/react-query'

function useGetUserPosts() {
    const { data, error, status, fetchNextPage, isFetchingNextPage, isPending } = useInfiniteQuery({
        queryKey: ["userPosts"],
        queryFn: ({ pageParam }) => getUserPosts(pageParam, "", ""),
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
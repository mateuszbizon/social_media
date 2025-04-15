import { getUserPosts } from '@/lib/services/posts'
import { UserPostsQueryParams } from '@/types'
import { useInfiniteQuery } from '@tanstack/react-query'

type Props = {
    userId: string
    sort: UserPostsQueryParams["sort"]
}

function useGetUserPosts({ userId, sort }: Props) {
    const { data, error, status, fetchNextPage, isFetchingNextPage, isPending } = useInfiniteQuery({
        queryKey: ["userPosts", sort],
        queryFn: ({ pageParam }) => getUserPosts(pageParam, sort, userId),
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
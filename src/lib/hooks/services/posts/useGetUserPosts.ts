import { getUserPosts } from '@/lib/services/posts'
import { UserPostsQueryParams } from '@/types'
import { useInfiniteQuery } from '@tanstack/react-query'

type Props = {
    userId: string
    sort: UserPostsQueryParams["sort"]
}

function useGetUserPosts({ userId, sort }: Props) {
    const { data, error, fetchNextPage, isFetchingNextPage, isPending, isError } = useInfiniteQuery({
        queryKey: ["userPosts", sort],
        queryFn: ({ pageParam }) => getUserPosts(pageParam, sort, userId),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.nextPage
    })

  return {
    data,
    error,
    fetchNextPage,
    isFetchingNextPage,
    isPending,
    isError
  }
}

export default useGetUserPosts
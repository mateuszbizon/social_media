import { getLikedPosts } from '@/lib/services/posts'
import { UserPostsQueryParams } from '@/types'
import { useInfiniteQuery } from '@tanstack/react-query'

type Props = {
    sort: UserPostsQueryParams["sort"]
}

function useGetLikedPosts({ sort }: Props) {
    const { data, isError, error, isPending, isFetchingNextPage, fetchNextPage } = useInfiniteQuery({
        queryKey: ["getLikedPosts", sort],
        queryFn: ({ pageParam }) => getLikedPosts(pageParam, sort),
        getNextPageParam: (post) => post.nextPage,
        initialPageParam: 1
    })

  return {
    data,
    isError,
    error,
    isPending,
    isFetchingNextPage,
    fetchNextPage,
  }
}

export default useGetLikedPosts
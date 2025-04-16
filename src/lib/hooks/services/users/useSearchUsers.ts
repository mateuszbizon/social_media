import { searchUsers } from '@/lib/services/users'
import { SearchUsersQueryParams } from '@/types'
import { useInfiniteQuery } from '@tanstack/react-query'

type Props = {
    query: SearchUsersQueryParams["query"]
}

function useSearchUsers({ query }: Props) {
    const { data, isPending, isError, error, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ["searchUsers", query],
        queryFn: ({ pageParam }) => searchUsers(pageParam, query),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.nextPage
    })

  return {
    data,
    isPending,
    isError,
    error,
    fetchNextPage,
    isFetchingNextPage,
  }
}

export default useSearchUsers
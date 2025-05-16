import { getChats } from '@/lib/services/chats'
import { useInfiniteQuery } from '@tanstack/react-query'

function useGetChats() {
    const { data, isError, error, isFetchingNextPage, fetchNextPage, isPending } = useInfiniteQuery({
        queryKey: ["getChats"],
        queryFn: ({ pageParam }) => getChats(pageParam),
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

export default useGetChats
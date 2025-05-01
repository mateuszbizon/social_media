import { getBasicPost } from '@/lib/services/posts'
import { useQuery } from '@tanstack/react-query'

type Props = {
    postId: string
}

function useGetBasicPost({ postId }: Props) {
    const { data, isError, error, isPending } = useQuery({
        queryKey: ['getBasicPost'],
        queryFn: () => getBasicPost(postId)
    })

  return {
    data,
    isError,
    error,
    isPending,
  }
}

export default useGetBasicPost
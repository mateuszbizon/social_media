import { likePost } from '@/lib/services/posts'
import { useMutation } from '@tanstack/react-query'

function useLikePost() {
    const { mutateAsync: handleLikePost } = useMutation({
        mutationFn: likePost
    })

  return {
    handleLikePost
  }
}

export default useLikePost
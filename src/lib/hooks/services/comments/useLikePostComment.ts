import { likePostComment } from '@/lib/services/comments'
import { useMutation } from '@tanstack/react-query'

function useLikePostComment() {
    const { mutateAsync: handleLikePostComment } = useMutation({
        mutationFn: likePostComment
    })

  return {
    handleLikePostComment,
  }
}

export default useLikePostComment
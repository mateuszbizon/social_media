import { likeCommentReply } from '@/lib/services/replies'
import { useMutation } from '@tanstack/react-query'

function useLikeCommentReply() {
    const { mutateAsync: handleLikeCommentReply } = useMutation({
        mutationFn: likeCommentReply
    })

  return {
    handleLikeCommentReply
  }
}

export default useLikeCommentReply
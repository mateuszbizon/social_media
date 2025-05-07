import { MESSAGES } from '@/constants/messages'
import { deleteCommentReply } from '@/lib/services/replies'
import { ErrorResponse } from '@/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

function useDeleteCommentReply() {
    const queryClient = useQueryClient()
    const { mutateAsync: handleDeleteCommentReply, isPending } = useMutation({
        mutationFn: deleteCommentReply,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['getCommentReplies']
            })
        },
        onError: (error: AxiosError<ErrorResponse>) => {
            toast.error(error.response?.data.message || MESSAGES.network.fail)
        }
    })

  return {
    handleDeleteCommentReply,
    isPending,
  }
}

export default useDeleteCommentReply
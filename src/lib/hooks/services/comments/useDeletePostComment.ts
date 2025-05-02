import { MESSAGES } from '@/constants/messages'
import { deletePostComment } from '@/lib/services/comments'
import { ErrorResponse } from '@/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

function useDeletePostComment() {
    const queryClient = useQueryClient()
    const { mutateAsync: handleDeletePostComment, isPending } = useMutation({
        mutationFn: deletePostComment,
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["postComments"]
            })
        },
        onError: (error: AxiosError<ErrorResponse>) => {
            toast.error(error?.response?.data.message || MESSAGES.network.fail)
        }
    })

  return {
    handleDeletePostComment,
    isPending,
  }
}

export default useDeletePostComment
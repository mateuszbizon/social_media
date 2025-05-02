import { MESSAGES } from '@/constants/messages'
import { deletePost } from '@/lib/services/posts'
import { ErrorResponse } from '@/types'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

function useDeletePost() {
    const router = useRouter()
    const { mutateAsync: handleDeletePost, isPending } = useMutation({
        mutationFn: deletePost,
        onSuccess: () => {
            router.back()
            toast.success(MESSAGES.post.deleted)
        },
        onError: (error: AxiosError<ErrorResponse>) => {
            toast.error(error.response?.data.message ?? MESSAGES.network.fail)
        }
    })

  return {
    handleDeletePost,
    isPending,
  }
}

export default useDeletePost
import { MESSAGES } from '@/constants/messages'
import { updatePost } from '@/lib/services/posts'
import { ErrorResponse } from '@/types'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

function useUpdatePost() {
    const router = useRouter()
    const { mutateAsync: handleUpdatePost } = useMutation({
        mutationFn: updatePost,
        onSuccess: (data) => {
            toast.success(MESSAGES.post.updated)
            router.push(`/post/${data.post.id}`)
        },
        onError: (error: AxiosError<ErrorResponse>) => {
            toast.error(error.response?.data.message || MESSAGES.network.fail)
        }
    })

  return {
    handleUpdatePost,
  }
}

export default useUpdatePost
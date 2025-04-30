import { MESSAGES } from '@/constants/messages'
import { createPost } from '@/lib/services/posts'
import { ErrorResponse } from '@/types'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

function useCreatePost() {
    const router = useRouter()
    const { mutateAsync: handleCreatePost } = useMutation({
        mutationFn: createPost,
        onSuccess: (data) => {
            toast.success(MESSAGES.post.created)
            router.push(`/post/${data.id}`)
        },
        onError: (error: AxiosError<ErrorResponse>) => {
            toast.error(error.response?.data.message)
        }
    })

  return {
    handleCreatePost,
  }
}

export default useCreatePost
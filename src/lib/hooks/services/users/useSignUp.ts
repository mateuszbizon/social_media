import { MESSAGES } from '@/constants/messages'
import { signUp } from '@/lib/services/users'
import { ErrorResponse } from '@/types'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

function useSignUp() {
    const router = useRouter()
    const { mutateAsync: handleSignUp, isPending } = useMutation({
        mutationFn: signUp,
        onSuccess: () => {
            toast.success(MESSAGES.user.signUp)
            router.push("/sign-in")
        },
        onError: (error: AxiosError<ErrorResponse>) => {
            toast.error(error.response?.data.message || MESSAGES.network.fail)
        }
    })

  return {
    handleSignUp,
    isPending,
  }
}

export default useSignUp
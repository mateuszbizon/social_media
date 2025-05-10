import { useAuthContext } from '@/context/AuthContext'
import { signIn } from '@/lib/services/users'
import { ErrorResponse } from '@/types'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import useRedirectAfterLogin from '../../useRedirectAfterLogin'

function useSignIn() {
    const router = useRouter()
    const { saveUser } = useAuthContext()
    const redirectTo = useRedirectAfterLogin()
    const { mutateAsync: handleSignIn } = useMutation({
        mutationFn: signIn,
        onSuccess: (data) => {
            saveUser(data.user, data.token)
            router.replace(redirectTo)
        },
        onError: (error: AxiosError<ErrorResponse>) => {
            const errorMessage = error.response?.data.message

            if (error.status == 400) {
                toast.error(errorMessage)
                return
            }

            toast.error(errorMessage)
        }
    })

  return {
    handleSignIn
  }
}

export default useSignIn
import { useAuthContext } from '@/context/AuthContext'
import { signIn } from '@/lib/services/users'
import { ErrorResponse } from '@/types'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

function useSignIn() {
    const { saveUser } = useAuthContext()
    const { mutateAsync: handleSignIn } = useMutation({
        mutationFn: signIn,
        onSuccess: (data) => {
            saveUser(data.user, data.token)
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
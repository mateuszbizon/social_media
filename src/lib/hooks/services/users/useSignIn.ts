import { useAuthContext } from '@/context/AuthContext'
import { signIn } from '@/lib/services/users'
import { ErrorResponse } from '@/types'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

function useSignIn() {
    const { saveUser } = useAuthContext()
    const { mutateAsync: handleSignIn } = useMutation({
        mutationFn: signIn,
        onSuccess: (data) => {
            saveUser(data.user, data.token)
        },
        onError: (error: AxiosError<ErrorResponse>) => {
            console.log(error.response?.data.message)
        }
    })

  return {
    handleSignIn
  }
}

export default useSignIn
import { MESSAGES } from '@/constants/messages'
import { updateUserPassword } from '@/lib/services/users'
import { ErrorResponse } from '@/types'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

function useUpdateUserPassword() {
    const { mutateAsync: handleUpdateUserPassword, isSuccess } = useMutation({
        mutationFn: updateUserPassword,
        onSuccess: () => {
            toast.success(MESSAGES.user.passwordUpdated)
        },
        onError: (error: AxiosError<ErrorResponse>) => {
            if (!error.response) {
                toast.error(MESSAGES.network.fail)
                return
            }

            toast.error(error.response.data.message)
        }
    })

  return {
    handleUpdateUserPassword,
  }
}

export default useUpdateUserPassword
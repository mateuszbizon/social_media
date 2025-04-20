import { MESSAGES } from '@/constants/messages'
import { useAuthContext } from '@/context/AuthContext'
import { updateUserProfile } from '@/lib/services/users'
import { ErrorResponse } from '@/types'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

function useUpdateUserProfile() {
    const { saveUser } = useAuthContext()
    const { mutateAsync: handleUpdateUserProfile } = useMutation({
        mutationFn: updateUserProfile,
        onSuccess: (data) => {
            saveUser(data.user, data.token)
            toast.success(MESSAGES.user.profileUpdated)
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
    handleUpdateUserProfile,
  }
}

export default useUpdateUserProfile
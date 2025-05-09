import { MESSAGES } from '@/constants/messages'
import { followUser } from '@/lib/services/users'
import { ErrorResponse } from '@/types'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

function useFollowUser() {
    const { mutateAsync: handleFollowUser } = useMutation({
        mutationFn: followUser,
        onError: (error: AxiosError<ErrorResponse>) => {
            toast.error(error.response?.data.message ?? MESSAGES.network.fail)
        }
    })

  return {
    handleFollowUser,
  }
}

export default useFollowUser
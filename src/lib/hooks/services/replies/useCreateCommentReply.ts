import { MESSAGES } from '@/constants/messages'
import { createCommentReply } from '@/lib/services/replies'
import { ErrorResponse } from '@/types'
import { GetCommentRepliesResponse } from '@/types/replyResponse'
import { InfiniteData, useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

type Props = {
    commentId: string
}

function useCreateCommentReply({ commentId }: Props) {
    const queryClient = useQueryClient()

    const { mutateAsync: handleCreateCommentReply } = useMutation({
        mutationFn: createCommentReply,
        onSuccess: (data) => {
            queryClient.setQueryData<InfiniteData<GetCommentRepliesResponse>>(['getCommentReplies', commentId], (oldData) => {
                if (!oldData) return oldData

                return {
                    ...oldData,
                    pages: oldData.pages.map((page, index) => {
                        if (index == 0) {
                            return {
                                ...page,
                                replies: [data.reply, ...page.replies]
                            }
                        }

                        return page
                    })
                }
            })
        },
        onError: (error: AxiosError<ErrorResponse>) => {
            toast.error(error.response?.data.message ?? MESSAGES.network.fail)
        }
    })

  return {
    handleCreateCommentReply,
  }
}

export default useCreateCommentReply
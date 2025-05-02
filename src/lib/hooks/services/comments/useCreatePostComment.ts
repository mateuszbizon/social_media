import { MESSAGES } from '@/constants/messages'
import { createPostComment } from '@/lib/services/comments'
import { ErrorResponse, PostCommentsQueryParams } from '@/types'
import { GetPostCommentsResponse } from '@/types/commentResponse'
import { InfiniteData, useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

type Props = {
    postId: string
    sort: PostCommentsQueryParams["sort"]
}

function useCreatePostComment({ postId, sort }: Props) {
    const queryClient = useQueryClient()
    const { mutateAsync: handleCreatePostComment } = useMutation({
        mutationFn: createPostComment,
        onSuccess: (data) => {
            queryClient.setQueryData<InfiniteData<GetPostCommentsResponse>>(["postComments", sort, postId], (oldData) => {
                if (!oldData) return oldData

                return {
                    ...oldData,
                    pages: oldData.pages.map((page, index) => {
                        if (index == 0) {
                            return {
                                ...page,
                                comments: [data.comment, ...page.comments]
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
    handleCreatePostComment,
  }
}

export default useCreatePostComment
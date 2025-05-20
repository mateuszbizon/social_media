import { MESSAGES } from '@/constants/messages'
import { useAuthContext } from '@/context/AuthContext'
import { createChatMessage } from '@/lib/services/chats'
import { ErrorResponse } from '@/types'
import { GetChatMessagesResponse, Message } from '@/types/chatResponse'
import { InfiniteData, useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { error } from 'console'
import { useId } from 'react'
import { toast } from 'react-toastify'

type Props = {
    chatId: string
}

function useCreateChatMessage({ chatId }: Props) {
    const { user } = useAuthContext()
    const id = useId()
    const queryClient = useQueryClient()
    const { mutateAsync: handleCreateChatMessage } = useMutation({
        mutationFn: createChatMessage,
        onMutate: (data) => {
            if (!user) return

            const optimisticMessage: Message = {
                id,
                content: data.chatMessage.content,
                createdAt: new Date(),
                sender: {
                    id: user.id,
                    avatar: user.avatar,
                    username: user.username
                }
            }

            queryClient.setQueryData<InfiniteData<GetChatMessagesResponse>>(["chatMessages", chatId], (oldData) => {
                if (!oldData) return oldData

                return {
                    ...oldData,
                    pages: oldData.pages.map((page, index) => {
                        if (index !== 0) return page

                        return {
                            ...page,
                            messages: [optimisticMessage, ...page.messages]
                        }
                    }),
                }
            })

            return {
                optimisticMessage
            }
        },
        onError: (error: AxiosError<ErrorResponse>, variables, context) => {
            if (context?.optimisticMessage) {
                queryClient.setQueryData<InfiniteData<GetChatMessagesResponse>>(["chatMessages", chatId], (oldData) => {
                    if (!oldData) return oldData

                    return {
                        ...oldData,
                        pages: oldData.pages.map((page, index) => {
                            if (index !== 0) return page

                            return {
                                ...page,
                                messages: page.messages.filter((message) => message.id !== context.optimisticMessage.id)
                            }
                        }),
                    }
                })
            }

            toast.error(error.response?.data.message || MESSAGES.network.fail)
        }
    })

  return {
    handleCreateChatMessage,
  }
}

export default useCreateChatMessage
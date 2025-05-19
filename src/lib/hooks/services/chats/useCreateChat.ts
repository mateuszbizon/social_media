import { MESSAGES } from '@/constants/messages'
import { useAuthContext } from '@/context/AuthContext'
import { createChat } from '@/lib/services/chats'
import { getOtherChatUser } from '@/lib/utils'
import useChatStore from '@/store/chatStore'
import { ErrorResponse } from '@/types'
import { GetChatsResponse } from '@/types/chatResponse'
import { InfiniteData, useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

function useCreateChat() {
    const queryClient = useQueryClient()
    const { user } = useAuthContext()
    const { setSelectedChat, setChatUser } = useChatStore()
    const { mutateAsync: handleCreateChat, isPending } = useMutation({
        mutationFn: createChat,
        onSuccess: (data) => {
            queryClient.setQueryData<InfiniteData<GetChatsResponse>>(["getChats"], (oldData) => {
                if (!oldData) return oldData

                return {
                    ...oldData,
                    pages: oldData.pages.map((page, index) => {
                        if (index == 0) {
                            return {
                                ...page,
                                chats: [data.chat, ...page.chats]
                            }
                        }

                        return page
                    })
                }
            })

            setSelectedChat(data.chat)

            const otherChatUser = getOtherChatUser(data.chat.participants, user?.id!)
            setChatUser(otherChatUser)
        },
        onError: (error: AxiosError<ErrorResponse>) => {
            toast.error(error.response?.data.message || MESSAGES.network.fail)
        }
    })

  return {
    handleCreateChat,
    isPending,
  }
}

export default useCreateChat
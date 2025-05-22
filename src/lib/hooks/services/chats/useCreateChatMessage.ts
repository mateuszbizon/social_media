import { MESSAGES } from '@/constants/messages'
import { useAuthContext } from '@/context/AuthContext'
import socket from '@/lib/config/socket'
import { createChatMessage } from '@/lib/services/chats'
import { ErrorResponse } from '@/types'
import { GetChatMessagesResponse, Message } from '@/types/chatResponse'
import { InfiniteData, useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useEffect, useId, useState } from 'react'
import { toast } from 'react-toastify'
import useDebounce from '../../useDebounce'

type Props = {
    chatId: string
}

function useCreateChatMessage({ chatId }: Props) {
    const { user } = useAuthContext()
    const id = useId()
    const queryClient = useQueryClient()
    const [newMessage, setNewMessage] = useState("")
    const [typing, setTyping] = useState(false)
    const [isTyping, setIsTyping] = useState(false)
    const debouncedTyping = useDebounce(newMessage, 5000)

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
        },
        onSuccess: (data, variables, context) => {
            socket.emit("sendMessage", { chatId, message: context.optimisticMessage })
        }
    })

    useEffect(() => {
        socket.on("receiveMessage", (message: Message) => {
            if (user?.id === message.sender.id) return

            queryClient.setQueryData<InfiniteData<GetChatMessagesResponse>>(["chatMessages", chatId], (oldData) => {
                if (!oldData) return oldData

                return {
                    ...oldData,
                    pages: oldData.pages.map((page, index) => {
                        if (index !== 0) return page

                        return {
                            ...page,
                            messages: [message, ...page.messages]
                        }
                    }),
                }
            })
        })

        socket.on("typing", () => {
            setIsTyping(true)
        })

        socket.on("stopTyping", () => {
            setIsTyping(false)
        })
    }, [])

    useEffect(() => {
        if (!typing) return

        socket.emit("stopTyping", { chatId })
        setTyping(false)
    }, [debouncedTyping])

  return {
    handleCreateChatMessage,
    newMessage,
    setNewMessage,
    typing,
    setTyping,
    isTyping,
  }
}

export default useCreateChatMessage
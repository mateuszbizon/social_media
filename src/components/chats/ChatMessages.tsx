"use client"

import useGetChatMessages from '@/lib/hooks/services/chats/useGetChatMessages'
import React from 'react'
import CircleLoading from '../ui/circleLoading'
import MainError from '../errors/MainError'
import FlatList from '../common/FlatList'
import ChatMessageCard from '../cards/ChatMessageCard'

type ChatMessagesProps = {
    chatId: string
}

function ChatMessages({ chatId }: ChatMessagesProps) {
    const { data, isError, error, isFetchingNextPage, fetchNextPage, isPending } = useGetChatMessages({
        chatId
    })

    if (isPending) return <CircleLoading className='mx-auto' />

    if (isError) return <MainError message={error?.message || ""} />

  return (
    <div className='grow overflow-y-auto p-2 flex flex-col-reverse gap-3'>
        {data?.pages.map(page => (
            <FlatList
                data={page.messages}
                keyExtractor={item => item.id}
                renderItem={item => (
                    <ChatMessageCard message={item} />
                )}
                renderEmptyListComponent={() => (
                    <p className='text-center text-black-2'>No chats sent yet</p>
                )}
                className='flex flex-col-reverse gap-3'
            />
        ))}
    </div>
  )
}

export default ChatMessages
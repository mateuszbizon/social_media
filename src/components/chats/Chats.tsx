"use client"

import useGetChats from '@/lib/hooks/services/chats/useGetChats'
import React, { useEffect, useState } from 'react'
import CircleLoading from '../ui/circleLoading'
import MainError from '../errors/MainError'
import FlatList from '../common/FlatList'
import { useInView } from 'react-intersection-observer'
import ChatCard from '../cards/ChatCard'
import { Button } from '../ui/button'
import CreateChatDialog from './CreateChatDialog'

function Chats() {
    const { data, isError, error, isFetchingNextPage, fetchNextPage, isPending } = useGetChats()
    const [createChatOpen, setCreateChatOpen] = useState(false)
    const { ref, inView } = useInView()

    useEffect(() => {
        if (inView) {
            fetchNextPage()
        }
    }, [inView, fetchNextPage])

  return (
    <aside className='md:w-[250px] w-full h-screen bg-white md:border-r md:border-r-gray-2/50 overflow-y-auto py-20 md:py-10 space-y-5'>
        <div className='px-2'>
            <Button size={"sm"} onClick={() => setCreateChatOpen(true)}>
                Create new chat
            </Button>
        </div>
        <CreateChatDialog createChatOpen={createChatOpen} setCreateChatOpen={setCreateChatOpen} />
        {isPending && <CircleLoading className='mx-auto' />}
        {isError && <MainError message={error?.message || ""} />}
        <div className='space-y-5'>
            {data?.pages.map(page => (
                <FlatList
                    data={page.chats}
                    key={page.currentPage}
                    keyExtractor={(item) => item.id}
                    className='space-y-5'
                    renderItem={(chat) => (
                        <ChatCard chat={chat} />
                    )}
                    renderEmptyListComponent={() => (
                        <p className='text-center text-black-2'>No chats yet</p>
                    )}
                />
            ))}

            <div ref={ref}>{isFetchingNextPage && <CircleLoading className='mx-auto w-8' />}</div>
        </div>
    </aside>
  )
}

export default Chats
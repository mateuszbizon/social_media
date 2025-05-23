"use client"

import useChatStore from '@/store/chatStore'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import Image from "next/image"
import Link from 'next/link'
import CreateChatDialog from './CreateChatDialog'
import ChatMessages from './ChatMessages'
import CreateChatMessage from './CreateChatMessage'
import { ArrowLeft } from 'lucide-react'

function SingleChat() {
    const { selectedChat, setSelectedChat, chatUser } = useChatStore()
    const [createChatOpen, setCreateChatOpen] = useState(false)

  return (
    <div className='h-screen py-14 md:py-0'>
        {!selectedChat && (
            <div className='size-full flex flex-col items-center justify-center gap-3'>
                <h2 className='heading2'>Your messages</h2>
                <Button onClick={() => setCreateChatOpen(true)}>
                    Start new chat
                </Button>
                <CreateChatDialog createChatOpen={createChatOpen} setCreateChatOpen={setCreateChatOpen} />
            </div>
        )}
        {selectedChat && (
            <div className='flex flex-col h-full'>
                <div className='flex p-3 bg-white items-center gap-3 border-b border-b-gray-2/50'>
                    <Button variant={"transparent"} size={"icon"} className='md:hidden' onClick={() => setSelectedChat(null)}>
                        <ArrowLeft />
                    </Button>
                    <Link href={`/user/${chatUser?.username}`} target='_blank'>
                        <div className='relative size-10 md:size-14 rounded-full overflow-hidden'>
                            <Image src={chatUser?.avatar ?? "/user_empty.jpg"} alt='User avatar' fill className='object-cover' />
                        </div>
                    </Link>
                    <Link href={`/user/${chatUser?.username}`} target='_blank'>
                        <p className='line-clamp-1 text-sm: md:text-base'>{chatUser?.username}</p>
                    </Link>
                </div>
                <ChatMessages chatId={selectedChat.id} />
                <div className='mt-auto'>
                    <CreateChatMessage chatId={selectedChat.id} />
                </div>
            </div>
        )}
    </div>
  )
}

export default SingleChat
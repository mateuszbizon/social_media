"use client"

import { useAuthContext } from '@/context/AuthContext'
import { getOtherChatUser } from '@/lib/utils'
import useChatStore from '@/store/chatStore'
import { Chat } from '@/types/chatResponse'
import Image from 'next/image'
import React from 'react'

type ChatCardProps = {
    chat: Chat
}

function ChatCard({ chat }: ChatCardProps) {
    const { user } = useAuthContext()
    const { selectedChat, setSelectedChat, setChatUser } = useChatStore()
    const otherChatUser = getOtherChatUser(chat.participants, user?.id!)
    const isChatSelected = selectedChat?.id === chat.id

    function selectChat() {
        setSelectedChat(chat)
        setChatUser(otherChatUser)
    }

  return (
    <div className='flex flex-col'>
        <button 
            className={`flex gap-1 p-2 ${isChatSelected ? "bg-gray-2/50" : "hover:bg-gray-2/20"} cursor-pointer`} 
            onClick={selectChat}
        >
            <div className='relative size-10 rounded-full overflow-hidden'>
                <Image src={otherChatUser.avatar ?? "/user_empty.jpg"} alt='User avatar' fill className='object-cover' />
            </div>
            <div className='space-y-1'>
                <p className='text-black-2 font-medium text-sm line-clamp-1'>{otherChatUser.username}</p>
                <p className='text-black-2 line-clamp-1 text-sm text-left'>message</p>
            </div>
        </button>
    </div>
  )
}

export default ChatCard
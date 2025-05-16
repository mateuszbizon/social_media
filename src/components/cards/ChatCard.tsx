"use client"

import { useAuthContext } from '@/context/AuthContext'
import { getOtherChatUser } from '@/lib/utils'
import { Chat } from '@/types/chatResponse'
import Image from 'next/image'
import React from 'react'

type ChatCardProps = {
    chat: Chat
}

function ChatCard({ chat }: ChatCardProps) {
    const { user } = useAuthContext()
    const otherChatUser = getOtherChatUser(chat.participants, user?.id!)

  return (
    <div className='flex gap-1 p-1 rounded-xl hover:bg-gray-2/20 cursor-pointer'>
        <div className='relative size-10 rounded-full overflow-hidden'>
            <Image src={otherChatUser.avatar ?? "/user_empty.jpg"} alt='User avatar' fill className='object-cover' />
        </div>
        <div className='space-y-1'>
            <p className='text-black-2 font-medium text-sm line-clamp-1'>{otherChatUser.username}</p>
            <p className='text-gray-2 line-clamp-1 text-sm'>message</p>
        </div>
    </div>
  )
}

export default ChatCard
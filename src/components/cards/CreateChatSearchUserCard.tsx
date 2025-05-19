"use client"

import useChatStore from '@/store/chatStore'
import { SearchUser } from '@/types/userResponse'
import Image from 'next/image'
import React from 'react'

type CreateChatSearchUserCardProps = {
    user: SearchUser
}

function CreateChatSearchUserCard({ user }: CreateChatSearchUserCardProps) {
    const { selectedUserForNewChat } = useChatStore()
    const userSelected = selectedUserForNewChat?.id === user.id

  return (
    <div className={`flex items-center gap-3 border ${userSelected ? "border-primary bg-primary/20" : "border-gray-2/50"}`}>
        <div className='relative size-10 rounded-full overflow-hidden'>
            <Image src={user.avatar ?? "/user_empty.jpg"} alt='User avatar' fill className='object-cover' />
        </div>
        <p className='text-black-2 text-sm line-clamp-1'>{user.username}</p>
    </div>

  )
}

export default CreateChatSearchUserCard
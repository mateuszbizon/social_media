"use client"

import useChatStore from '@/store/chatStore'
import { SearchUser } from '@/types/userResponse'
import Image from 'next/image'
import React from 'react'

type CreateChatSearchUserCardProps = {
    user: SearchUser
}

function CreateChatSearchUserCard({ user }: CreateChatSearchUserCardProps) {
    const { selectedUserForNewChat, setSelectedUserForNewChat } = useChatStore()
    const userSelected = selectedUserForNewChat?.id === user.id

    function handleSelectUser() {
        if (userSelected) return

        setSelectedUserForNewChat(user)
    }

  return (
    <div className='flex flex-col'>
        <button 
            className={`flex items-center gap-3 p-2 rounded-xl border ${userSelected ? "border-primary bg-primary/20" : "border-transparent hover:border-gray-2/70 cursor-pointer"} transition duration-300`} 
            onClick={handleSelectUser}
        >
            <div className='relative size-10 rounded-full overflow-hidden'>
                <Image src={user.avatar ?? "/user_empty.jpg"} alt='User avatar' fill className='object-cover' />
            </div>
            <p className='text-black-2 text-sm line-clamp-1'>{user.username}</p>
        </button>
    </div>

  )
}

export default CreateChatSearchUserCard
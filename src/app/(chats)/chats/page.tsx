"use client"

import withAuth from '@/components/auth/withAuth'
import Chats from '@/components/chats/Chats'
import SingleChat from '@/components/chats/SingleChat'
import useWidth from '@/lib/hooks/useWidth'
import useChatStore from '@/store/chatStore'
import React from 'react'

function ChatsPage() {
    const { selectedChat } = useChatStore()
    const { isMobile } = useWidth()

  return (
    <div className='flex'>
        <div className={`${isMobile ? selectedChat ? "hidden" : "w-full" : "block"}`}>
            <Chats />
        </div>
        <div className={`${isMobile ? selectedChat ? "block" : "hidden" : "block"} grow`}>
            <SingleChat />
        </div>
    </div>
  )
}

export default withAuth(ChatsPage)
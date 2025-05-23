"use client"

import withAuth from '@/components/auth/withAuth'
import Chats from '@/components/chats/Chats'
import SingleChat from '@/components/chats/SingleChat'
import useChatStore from '@/store/chatStore'
import React, { useEffect, useState } from 'react'

function ChatsPage() {
    const { selectedChat } = useChatStore()
    const [width, setWidth] = useState(window.innerWidth)
    const isMobile = width < 768

    const handleResize = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

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
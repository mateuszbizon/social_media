"use client"

import withAuth from '@/components/auth/withAuth'
import Chats from '@/components/chats/Chats'
import SingleChat from '@/components/chats/SingleChat'
import React from 'react'

function ChatsPage() {
  return (
    <div className='flex'>
        <Chats />
        <div className='grow'>
            <SingleChat />
        </div>
    </div>
  )
}

export default withAuth(ChatsPage)
"use client"

import withAuth from '@/components/auth/withAuth'
import Chats from '@/components/chats/Chats'
import React from 'react'

function ChatsPage() {
  return (
    <div className='flex'>
        <Chats />
    </div>
  )
}

export default withAuth(ChatsPage)
"use client"

import React from 'react'
import { Button } from '../ui/button'
import useChatStore from '@/store/chatStore'

function CreateChat() {
    const { selectedUserForNewChat } = useChatStore()

    function createChat() {
        if (!selectedUserForNewChat) return

        //todo: create chat
    }

  return (
    <Button onClick={createChat} className='w-full' disabled={!selectedUserForNewChat}>
        Create chat
    </Button>
  )
}

export default CreateChat
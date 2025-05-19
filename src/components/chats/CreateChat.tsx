"use client"

import React from 'react'
import { Button } from '../ui/button'
import useChatStore from '@/store/chatStore'
import useCreateChat from '@/lib/hooks/services/chats/useCreateChat'

function CreateChat() {
    const { selectedUserForNewChat } = useChatStore()
    const { handleCreateChat, isPending } = useCreateChat()

    async function createChat() {
        if (!selectedUserForNewChat) return

        const userIds = [selectedUserForNewChat.id]

        await handleCreateChat({
            userIds
        })
    }

  return (
    <Button onClick={createChat} className='w-full' disabled={!selectedUserForNewChat}>
        {isPending ? "Creating..." : "Create chat"}
    </Button>
  )
}

export default CreateChat
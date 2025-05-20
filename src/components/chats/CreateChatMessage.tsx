"use client"

import React, { KeyboardEvent, useState } from 'react'
import { Textarea } from '../ui/textarea'
import useCreateChatMessage from '@/lib/hooks/services/chats/useCreateChatMessage'

type CreateChatMessageProps = {
    chatId: string
}

function CreateChatMessage({ chatId }: CreateChatMessageProps) {
    const [newMessage, setNewMessage] = useState("")
    const { handleCreateChatMessage } = useCreateChatMessage({
        chatId
    })

    async function createNewMessage(e: KeyboardEvent<HTMLTextAreaElement>) {
        if (e.key === "Enter" && !e.shiftKey && newMessage !== "") {
            setNewMessage("")
            await handleCreateChatMessage({
                chatId,
                chatMessage: {
                    content: newMessage
                }
            })
        }
    }

  return (
    <div>
        <Textarea value={newMessage} className='resize-none' onKeyUp={createNewMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder='Type your message'></Textarea>
    </div>
  )
}

export default CreateChatMessage
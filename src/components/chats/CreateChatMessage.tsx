"use client"

import React, { KeyboardEvent } from 'react'
import { Textarea } from '../ui/textarea'
import useCreateChatMessage from '@/lib/hooks/services/chats/useCreateChatMessage'
import socket from '@/lib/config/socket'

type CreateChatMessageProps = {
    chatId: string
}

function CreateChatMessage({ chatId }: CreateChatMessageProps) {
    const { handleCreateChatMessage, typing, setTyping, isTyping, newMessage, setNewMessage } = useCreateChatMessage({
        chatId
    })

    async function createNewMessage(e: KeyboardEvent<HTMLTextAreaElement>) {
        if (!typing) {
            setTyping(true)
            socket.emit("typing", { chatId })
        }

        if (e.key === "Enter" && !e.shiftKey && newMessage !== "") {
            setNewMessage("")

            socket.emit("stopTyping", { chatId })
            setTyping(false)
            
            await handleCreateChatMessage({
                chatId,
                chatMessage: {
                    content: newMessage
                }
            })
        }
    }

  return (
    <div className='space-y-3'>
        {isTyping && <p className='text-sm text-black-2'>Someone is typing...</p>}
        <Textarea value={newMessage} className='resize-none' onKeyUp={createNewMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder='Type your message'></Textarea>
    </div>
  )
}

export default CreateChatMessage
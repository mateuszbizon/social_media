"use client"

import { useAuthContext } from '@/context/AuthContext'
import { Message } from '@/types/chatResponse'
import React from 'react'

type ChatMessageCardProps = {
    message: Message
}

function ChatMessageCard({ message }: ChatMessageCardProps) {
    const { user } = useAuthContext()
    const isSender = message.sender.id === user?.id

  return (
    <div className={`flex ${isSender ? "justify-end" : "justify-start"}`}>
        <p className={`px-3 py-2 ${isSender ? "bg-primary text-white" : "bg-gray-2/50 text-black"} rounded-2xl max-w-[calc(100%-2rem)]`}>{message.content}</p>
    </div>
  )
}

export default ChatMessageCard
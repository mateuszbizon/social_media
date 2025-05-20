import { Message } from '@/types/chatResponse'
import React from 'react'

type ChatMessageCardProps = {
    message: Message
}

function ChatMessageCard({ message }: ChatMessageCardProps) {
  return (
    <div className='flex justify-end'>
        <p className='px-3 py-2 bg-primary rounded-2xl text-white'>{message.content}</p>
    </div>
  )
}

export default ChatMessageCard
"use client"

import useChatStore from '@/store/chatStore'
import React from 'react'
import { Button } from '../ui/button'
import Image from "next/image"
import Link from 'next/link'

function SingleChat() {
    const { selectedChat, chatUser } = useChatStore()

  return (
    <div className='h-screen py-14 md:py-0'>
        {!selectedChat && (
            <div className='size-full flex flex-col items-center justify-center gap-3'>
                <h2 className='heading2'>Your messages</h2>
                <Button>
                    Start new chat
                </Button>
            </div>
        )}
        {selectedChat && (
            <>
                <div className='flex p-3 bg-white items-center gap-3'>
                    <Link href={`/user/${chatUser?.username}`} target='_blank'>
                        <div className='relative size-14 rounded-full overflow-hidden'>
                            <Image src={chatUser?.avatar ?? "/user_empty.jpg"} alt='User avatar' fill className='object-cover' />
                        </div>
                    </Link>
                    <Link href={`/user/${chatUser?.username}`} target='_blank'>
                        <p className='line-clamp-1'>{chatUser?.username}</p>
                    </Link>
                </div>
            </>
        )}
    </div>
  )
}

export default SingleChat
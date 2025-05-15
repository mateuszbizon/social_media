import MobileNavigation from '@/components/common/MobileNavigation'
import Sidebar from '@/components/common/Sidebar'
import React from 'react'

function ChatLayout({ chats, singleChat }: { chats: React.ReactNode, singleChat: React.ReactNode }) {
  return (
    <main className='flex'>
        <Sidebar />
        <div>
            {chats}
        </div>
        <div>
            {singleChat}
        </div>
        <MobileNavigation />
    </main>
  )
}

export default ChatLayout
import Sidebar from '@/components/common/Sidebar'
import React from 'react'

function ChatLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className='flex'>
        <Sidebar />
        <div className='grow'>
            {children}
        </div>
    </main>
  )
}

export default ChatLayout
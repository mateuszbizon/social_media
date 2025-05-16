import MobileNavigation from '@/components/common/MobileNavigation'
import Sidebar from '@/components/common/Sidebar'
import React from 'react'

function ChatLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className='flex'>
        <Sidebar />
        <div className='grow'>
            {children}
        </div>
        <MobileNavigation />
    </main>
  )
}

export default ChatLayout
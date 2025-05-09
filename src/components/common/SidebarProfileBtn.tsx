"use client"

import { useAuthContext } from '@/context/AuthContext'
import { useSidebar } from '@/context/SidebarContext'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

function SidebarProfileBtn() {
    const { isOpen } = useSidebar()
    const { user } = useAuthContext()
    const pathname = usePathname()
    const currentPath = pathname === `/user/${user?.username}`

  return (
    <Button variant={"transparent"} className='w-full justify-start' asChild>
        <Link href={`/user/${user?.username}`}>
            <div className='relative size-6 rounded-full overflow-hidden'>
                <Image src={user?.avatar ?? "/user_empty.jpg"} fill alt='Logged user avatar' className='object-cover' />
            </div>
            {isOpen && <span className={`hidden md:block ${currentPath && "font-bold"}`}>Profile</span>}
        </Link>
    </Button>
  )
}

export default SidebarProfileBtn
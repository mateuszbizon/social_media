"use client"

import { useAuthContext } from '@/context/AuthContext'
import { useSidebar } from '@/context/SidebarContext'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'

function SidebarProfileBtn() {
    const { isOpen } = useSidebar()
    const { user } = useAuthContext()

  return (
    <Button variant={"transparent"} className='w-full justify-start' asChild>
        <Link href={`/user/${user?.username}`}>
            <div className='relative size-6 rounded-full overflow-hidden'>
                <Image src={user?.avatar ?? "/user_empty.jpg"} fill alt='Logged user avatar' className='object-cover' />
            </div>
            {isOpen && <span className='hidden md:block'>Profile</span>}
        </Link>
    </Button>
  )
}

export default SidebarProfileBtn
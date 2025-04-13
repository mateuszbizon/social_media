"use client"

import { useAuthContext } from '@/context/AuthContext'
import { useSidebar } from '@/context/SidebarContext'
import React from 'react'
import { Button } from '../ui/button'
import { LogIn, LogOut } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function SidebarAuthBtn() {
    const { isOpen } = useSidebar()
    const { logoutUser, user } = useAuthContext()
    const currentPath = usePathname()

  return (
    <>
        {user ? (
            <Button variant={"transparent"} className='w-full justify-start' onClick={logoutUser}>
                <LogOut className='size-6' />{isOpen && <span className='hidden md:block'>Logout</span>}
            </Button>
        ) : (
            <Button variant={"transparent"} className='w-full justify-start' asChild>
                <Link href={"/sign-in"}>
                    <LogIn className='size-6' />{isOpen && <span className='hidden md:block'>Sign in</span>}
                </Link>
            </Button>
        )}
    </>
  )
}

export default SidebarAuthBtn
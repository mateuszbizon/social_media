"use client"

import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { House, LogOut, Search } from 'lucide-react'
import { useSidebar } from '@/context/SidebarContext'
import { SidebarItem } from '@/types'

const SIDEBAR_ITEMS: SidebarItem[] = [
    {
        name: "Home",
        icon: <House className='size-6' />,
        isLink: true,
        href: "/"
    },
    {
        name: "Search",
        icon: <Search className='size-6' />,
        isLink: false,
        action: "searchUsers"
    }
]

function Sidebar() {
    const { isOpen, toggleSidebar, chooseAction } = useSidebar()

  return (
    <aside className={`hidden md:flex flex-col ${isOpen ? "w-[250px]" : "w-[81px]"} h-screen sticky top-0 bg-white border-r border-r-gray-2 px-3 py-10 transition-all`}>
        <h1 className='text-2xl font-semibold gradient-text pl-4'>{isOpen ? "Matgram" : "M"}</h1>
        <ul className='mt-10 space-y-4'>
            {SIDEBAR_ITEMS.map(item => (
                <li key={item.name}>
                    {item.isLink ? (
                        <Button variant={"transparent"} className='w-full justify-start' asChild>
                            <Link href={`${item.href}`}>{item.icon}{isOpen && <span>{item.name}</span>}</Link>
                        </Button>
                    ) : (
                        <Button variant={"transparent"} className='w-full justify-start' onClick={() => chooseAction(item.action)}>
                            {item.icon}{isOpen && <span>{item.name}</span>}
                        </Button>
                    )}
                </li>
            ))}
        </ul>
        <div className='mt-auto'>
            <Button variant={"transparent"} className='w-full justify-start'>
                <LogOut className='size-6' />{isOpen && <span>Logout</span>}
            </Button>
        </div>
    </aside>
  )
}

export default Sidebar
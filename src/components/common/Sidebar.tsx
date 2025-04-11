"use client"

import React from 'react'
import { Button } from '../ui/button'
import { House, LogOut, Search } from 'lucide-react'
import { useSidebar } from '@/context/SidebarContext'
import { SidebarItem } from '@/types'
import SidebarCard from '../cards/SidebarCard'
import SearchUsers from './SearchUsers'

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
    const { isOpen } = useSidebar()

  return (
    <>
        <aside className={`hidden md:flex flex-col ${isOpen ? "w-[250px]" : "w-[81px]"} h-screen sticky top-0 bg-white border-r border-r-gray-2 px-3 py-10 transition-all z-1`}>
            <h1 className='text-2xl font-bold gradient-text pl-4'>{isOpen ? "Matgram" : "M"}</h1>
            <ul className='mt-10 space-y-4'>
                {SIDEBAR_ITEMS.map(item => (
                    <li key={item.name}>
                        <SidebarCard item={item} />
                    </li>
                ))}
            </ul>
            <div className='mt-auto'>
                <Button variant={"transparent"} className='w-full justify-start'>
                    <LogOut className='size-6' />{isOpen && <span>Logout</span>}
                </Button>
            </div>
        </aside>
        <SearchUsers />
    </>
  )
}

export default Sidebar
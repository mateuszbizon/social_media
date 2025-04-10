"use client"

import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { House, LogOut, Search } from 'lucide-react'
import { useSidebar } from '@/context/SidebarContext'

function Sidebar() {
    const { isOpen, toggleSidebar } = useSidebar()

  return (
    <aside className={`hidden md:flex flex-col ${isOpen ? "w-[250px]" : "w-[81px]"} h-screen sticky top-0 bg-white border-r border-r-gray-2 px-3 py-10 transition-all`}>
        <h1 className='text-2xl font-semibold gradient-text pl-4'>{isOpen ? "Matgram" : "M"}</h1>
        <ul className='mt-10 space-y-4'>
            <li>
                <Button variant={"transparent"} className='w-full justify-start' asChild>
                    <Link href={"/"}><House className='size-6' />{isOpen && <span>Home</span>}</Link>
                </Button>
            </li>
            <li>
                <Button variant={"transparent"} className='w-full justify-start' onClick={toggleSidebar}>
                    <Search className='size-6' />{isOpen && <span>Search</span>}
                </Button>
            </li>
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
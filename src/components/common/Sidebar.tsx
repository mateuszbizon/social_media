"use client"

import React from 'react'
import { useSidebar } from '@/context/SidebarContext'
import SidebarCard from '../cards/SidebarCard'
import SearchUsers from './SearchUsers'
import { SIDEBAR_ITEMS } from '@/constants/sidebarItems'
import SidebarAuthBtn from './SidebarAuthBtn'

function Sidebar() {
    const { isOpen } = useSidebar()

  return (
    <>
        <aside className={`hidden md:flex flex-col ${isOpen ? "w-[250px]" : "w-[81px]"} h-screen sticky top-0 bg-white border-r border-r-gray-2 px-3 py-10 transition-all z-3`}>
            <h1 className='text-2xl font-bold gradient-text pl-4'>{isOpen ? "Matgram" : "M"}</h1>
            <ul className='mt-10 space-y-4'>
                {SIDEBAR_ITEMS.map(item => (
                    <li key={item.name}>
                        <SidebarCard item={item} />
                    </li>
                ))}
            </ul>
            <div className='mt-auto'>
                <SidebarAuthBtn />
            </div>
        </aside>
        <SearchUsers />
    </>
  )
}

export default Sidebar
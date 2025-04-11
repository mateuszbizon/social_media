"use client"

import { useSidebar } from '@/context/SidebarContext'
import React from 'react'

function SearchUsers() {
    const { isSearchUsersOpen } = useSidebar()

  return (
    <div className={`fixed top-0 bottom-0 left-0 ${isSearchUsersOpen ? "translate-x-[81px]" : "-translate-x-full"} bg-white w-[350px] border-r border-r-gray-2 rounded-r-2xl p-10 z-0 transition-transform`}>
        <h2 className='text-black-2 text-xl font-bold'>Search</h2>
    </div>
  )
}

export default SearchUsers
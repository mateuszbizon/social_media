"use client"

import { useSidebar } from '@/context/SidebarContext'
import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

function SearchUsers() {
    const { isSearchUsersOpen, toggleSearchUsers } = useSidebar()

  return (
    <div className={`fixed top-0 bottom-0 left-0 ${isSearchUsersOpen ? "translate-x-0 md:translate-x-[81px]" : "-translate-x-full"} bg-white w-full max-w-[350px] md:border-r border-r-gray-2 md:rounded-r-2xl py-7 md:py-10 px-5 z-2  transition-transform`}>
        <div className='flex gap-5 items-center'>
            <Button variant={"transparent"} size={"icon"} onClick={toggleSearchUsers}>
                <ArrowLeft className='size-6' />
            </Button>
            <h2 className='text-black-2 text-xl font-bold'>Search</h2>
        </div>
    </div>
  )
}

export default SearchUsers
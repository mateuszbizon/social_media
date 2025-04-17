"use client"

import { useSidebar } from '@/context/SidebarContext'
import { ArrowLeft } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import SearchBar from './SearchBar'
import useDebounce from '@/lib/hooks/useDebounce'
import SearchedUsers from '../users/SearchedUsers'

function SearchUsers() {
    const { isSearchUsersOpen, toggleSearchUsers } = useSidebar()
    const [search, setSearch] = useState("")
    const debouncedSearch = useDebounce(search)

    function changeSearch(value: string) {
        setSearch(value)
    }

  return (
    <div className={`fixed top-0 bottom-0 left-0 ${isSearchUsersOpen ? "translate-x-0 md:translate-x-[81px]" : "-translate-x-full"} bg-white w-full max-w-[350px] md:border-r border-r-gray-2 md:rounded-r-2xl py-7 md:py-10 px-5 z-2  transition-transform`}>
        <div className='flex gap-5 items-center mb-10'>
            <Button variant={"transparent"} size={"icon"} onClick={toggleSearchUsers}>
                <ArrowLeft className='size-6' />
            </Button>
            <h2 className='text-black-2 text-xl font-bold'>Search</h2>
        </div>
        <div className='mb-5'>
            <SearchBar onChange={changeSearch} />
        </div>
        <SearchedUsers searchValue={debouncedSearch} />
    </div>
  )
}

export default SearchUsers
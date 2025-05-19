"use client"

import React, { Dispatch, SetStateAction, useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import SearchBar from '../common/SearchBar'
import useDebounce from '@/lib/hooks/useDebounce'
import CreateChatSearchedUsers from './CreateChatSearchedUsers'
import CreateChat from './CreateChat'

type CreateChatDialogProps = {
    createChatOpen: boolean
    setCreateChatOpen: Dispatch<SetStateAction<boolean>>
}

function CreateChatDialog({ createChatOpen, setCreateChatOpen }: CreateChatDialogProps) {
    const [searchValue, setSearchValue] = useState("")
    const debouncedSearch = useDebounce(searchValue)

    function onChangeValue(value: string) {
        setSearchValue(value)
    }

    function closeCreateChat() {
        setCreateChatOpen(false)
    }

  return (
    <Dialog open={createChatOpen} onOpenChange={setCreateChatOpen}>
        <DialogContent className='h-[calc(100%-2rem)] flex flex-col'>
            <DialogHeader>
                <DialogTitle>New chat</DialogTitle>
            </DialogHeader>
            <SearchBar onChange={onChangeValue} />
            <div className='grow overflow-y-auto'>
                <CreateChatSearchedUsers searchQuery={debouncedSearch} />
            </div>
            <div className='mt-auto'>
                <CreateChat closeCreateChat={closeCreateChat} />
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default CreateChatDialog
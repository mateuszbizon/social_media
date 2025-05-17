"use client"

import React, { Dispatch, SetStateAction, useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import SearchBar from '../common/SearchBar'
import useDebounce from '@/lib/hooks/useDebounce'

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

  return (
    <Dialog open={createChatOpen} onOpenChange={setCreateChatOpen}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>New message</DialogTitle>
            </DialogHeader>
            <SearchBar onChange={onChangeValue} />
        </DialogContent>
    </Dialog>
  )
}

export default CreateChatDialog
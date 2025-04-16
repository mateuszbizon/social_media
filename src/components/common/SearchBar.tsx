"use client"

import React, { ChangeEvent, useState } from 'react'
import { Input } from '../ui/input'

type SearchBarProps = {
    onChange: (searchValue: string) => void
}

function SearchBar({ onChange }: SearchBarProps) {
    const [value, setValue] = useState("")

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value)
        onChange(e.target.value)
    }

  return (
    <Input onChange={handleChange} value={value} placeholder='Search...' />
  )
}

export default SearchBar
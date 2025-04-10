"use client"

import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { House, LogOut, Search } from 'lucide-react'

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)
    const [canToggle, setCanToggle] = useState(false)

    useEffect(() => {
        const checkSidebar = () => {
            const width = window.innerWidth

            if (width < 1280) {
                setIsOpen(false)
                setCanToggle(false)
            } else {
                setIsOpen(true)
                setCanToggle(true)
            }
        }

        checkSidebar()
        window.addEventListener("resize", checkSidebar)

        return () => {
            window.removeEventListener("resize", checkSidebar)
        }
    }, [])

    function toggleSidebar() {
        if (!canToggle) return

        setIsOpen(prev => !prev)
    }

  return (
    <aside className={`hidden md:flex flex-col ${isOpen ? "w-[250px]" : "w-auto"} h-screen sticky top-0 bg-white border-r border-r-gray-2 px-3 py-10`}>
        <h1 className='text-2xl font-semibold gradient-text pl-4'>{isOpen ? "Matgram" : "M"}</h1>
        <ul className='mt-10 space-y-4'>
            <li>
                <Button variant={"transparent"} className='w-full justify-start' asChild>
                    <Link href={"/"}><House className='size-6' />{isOpen && <span>Home</span>}</Link>
                </Button>
            </li>
            <li>
                <Button variant={"transparent"} className='w-full justify-start' onClick={toggleSidebar}>
                    <Search className='size-6' />{isOpen && <span>Home</span>}
                </Button>
            </li>
        </ul>
        <div className='mt-auto'>
            <Button variant={"transparent"} className='w-full justify-start'>
                <LogOut className='size-6' />{isOpen && <span>Home</span>}
            </Button>
        </div>
    </aside>
  )
}

export default Sidebar
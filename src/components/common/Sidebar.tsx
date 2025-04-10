import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { House, LogOut, Search } from 'lucide-react'

function Sidebar() {
  return (
    <aside className='flex flex-col w-[250px] h-screen sticky top-0 bg-white border-r border-r-gray-2 px-3 py-10'>
        <h1 className='text-2xl font-semibold gradient-text pl-4'>Matgram</h1>
        <ul className='mt-10 space-y-4'>
            <li>
                <Button variant={"transparent"} className='w-full justify-start' asChild>
                    <Link href={"/"}><House className='size-6' /><span>Home</span></Link>
                </Button>
            </li>
            <li>
                <Button variant={"transparent"} className='w-full justify-start'>
                    <Search className='size-6' /><span>Search</span>
                </Button>
            </li>
        </ul>
        <div className='mt-auto'>
            <Button variant={"transparent"} className='w-full justify-start'>
                <LogOut className='size-6' />Logout
            </Button>
        </div>
    </aside>
  )
}

export default Sidebar
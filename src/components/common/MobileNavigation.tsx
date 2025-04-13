"use client"

import React from 'react'
import SidebarCard from '../cards/SidebarCard'
import { SIDEBAR_ITEMS } from '@/constants/sidebarItems'
import SidebarAuthBtn from './SidebarAuthBtn'

function MobileNavigation() {
  return (
    <>
        <div className='fixed top-0 w-full p-3 bg-white flex items-center justify-between md:hidden z-1'>
            <h1 className='text-xl font-bold gradient-text'>Matgram</h1>
            <div>
                <SidebarAuthBtn />
            </div>
        </div>

        <div className='fixed bottom-0 w-full p-3 bg-white md:hidden z-1'>
            <nav>
                <ul className='flex justify-center items-center'>
                    {SIDEBAR_ITEMS.map(item => ((
                        <li key={item.name}>
                            <SidebarCard item={item} />
                        </li>
                    )))}
                </ul>
            </nav>
        </div>
    </>
  )
}

export default MobileNavigation
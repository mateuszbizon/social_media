import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { useSidebar } from '@/context/SidebarContext'
import { SidebarItem } from '@/types'
import { usePathname } from 'next/navigation'

type SidebarCardProps = {
    item: SidebarItem
}

function SidebarCard({ item }: SidebarCardProps) {
    const { isOpen, chooseAction } = useSidebar()
    const pathname = usePathname()
    const currentPath = item.isLink && pathname.includes(item.href)
    const Icon = item.icon

  return (
    <>
        {item.isLink ? (
            <Button variant={"transparent"} className='w-full justify-start' asChild>
                <Link href={`${item.href}`}>
                    <Icon className='size-6' strokeWidth={currentPath ? "2.5px" : "1.5px"} />
                    {isOpen && <span className={`${currentPath && "font-bold"} hidden md:block`}>{item.name}</span>}
                </Link>
            </Button>
        ) : (
            <Button variant={"transparent"} className='w-full justify-start' onClick={() => chooseAction(item.action)}>
                <Icon className='size-6' strokeWidth={currentPath ? "2.5px" : "1.5px"} />
                {isOpen && <span className='hidden md:block'>{item.name}</span>}
            </Button>
        )}
    </>
  )
}

export default SidebarCard
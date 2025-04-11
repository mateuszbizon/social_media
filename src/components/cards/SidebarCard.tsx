import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { useSidebar } from '@/context/SidebarContext'
import { SidebarItem } from '@/types'

type SidebarCardProps = {
    item: SidebarItem
}

function SidebarCard({ item }: SidebarCardProps) {
    const { isOpen, chooseAction } = useSidebar()

  return (
    <>
        {item.isLink ? (
            <Button variant={"transparent"} className='w-full justify-start' asChild>
                <Link href={`${item.href}`}>{item.icon}{isOpen && <span>{item.name}</span>}</Link>
            </Button>
        ) : (
            <Button variant={"transparent"} className='w-full justify-start' onClick={() => chooseAction(item.action)}>
                {item.icon}{isOpen && <span>{item.name}</span>}
            </Button>
        )}
    </>
  )
}

export default SidebarCard
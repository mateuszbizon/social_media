"use client"

import SidebarProvider from '@/context/SidebarContext'
import React, { ReactNode } from 'react'

type ProvidersProps = {
    children: ReactNode
}

function Providers({ children }: ProvidersProps) {
  return (
    <SidebarProvider>
        {children}
    </SidebarProvider>
  )
}

export default Providers
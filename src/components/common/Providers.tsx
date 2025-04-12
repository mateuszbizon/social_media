"use client"

import AuthContextProvider from '@/context/AuthContext'
import SidebarProvider from '@/context/SidebarContext'
import React, { ReactNode } from 'react'

type ProvidersProps = {
    children: ReactNode
}

function Providers({ children }: ProvidersProps) {
  return (
    <AuthContextProvider>
        <SidebarProvider>
            {children}
        </SidebarProvider>
    </AuthContextProvider>
  )
}

export default Providers
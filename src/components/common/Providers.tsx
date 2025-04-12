"use client"

import AuthContextProvider from '@/context/AuthContext'
import SidebarProvider from '@/context/SidebarContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { ReactNode } from 'react'

type ProvidersProps = {
    children: ReactNode
}

function Providers({ children }: ProvidersProps) {
    const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
            <SidebarProvider>
                {children}
            </SidebarProvider>
        </AuthContextProvider>
    </QueryClientProvider>
  )
}

export default Providers
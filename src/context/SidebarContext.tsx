"use client"

import { createContext, ReactNode, useContext, useEffect, useState } from "react"

type SidebarContextType = {
    isOpen: boolean
    toggleSidebar: () => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export function useSidebar() {
    const context = useContext(SidebarContext)

    if (!context) throw new Error("useSidebar function must be used within SidebarContext")

    return context
}

function SidebarProvider({ children }: { children: ReactNode }) {
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
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
        {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider
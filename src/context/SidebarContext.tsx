"use client"

import { SidebarAction } from "@/types"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"

type SidebarContextType = {
    isOpen: boolean
    isSearchUsersOpen: boolean
    toggleSidebar: () => void
    chooseAction: (action: SidebarAction) => void
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
    const [isSearchUsersOpen, setIsSearchUsersOpen] = useState(false)

    useEffect(() => {
        const checkSidebar = () => {
            const width = window.innerWidth

            if (width < 1280) {
                setIsOpen(false)
                setCanToggle(false)
                return
            }

            if (isSearchUsersOpen) {
                setIsOpen(false)
                setCanToggle(false)
                return
            }

            setIsOpen(true)
            setCanToggle(true)
        }

        checkSidebar()
        window.addEventListener("resize", checkSidebar)

        return () => {
            window.removeEventListener("resize", checkSidebar)
        }
    }, [isSearchUsersOpen])

    function chooseAction(action: SidebarAction) {
        switch (action) {
            case "searchUsers":
                toggleSearchUsers()
                break;
        
            default:
                break;
        }
    }

    function toggleSearchUsers() {
        setIsSearchUsersOpen(prev => !prev)
    }

    function toggleSidebar() {
        if (!canToggle) return

        setIsOpen(prev => !prev)
    }

  return (
    <SidebarContext.Provider value={{ isOpen, isSearchUsersOpen, toggleSidebar, chooseAction }}>
        {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider
import { ReactNode } from "react"

export type SidebarAction = "searchUsers"

export type SidebarItem = {
    name: string
    icon: ReactNode
} & ({
    isLink: true
    href: string
} | {
    isLink: false
    action: SidebarAction
})
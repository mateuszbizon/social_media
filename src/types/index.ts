import { LucideIcon } from "lucide-react"

export type SidebarAction = "searchUsers"

export type SidebarItem = {
    name: string
    icon: LucideIcon
} & ({
    isLink: true
    href: string
} | {
    isLink: false
    action: SidebarAction
})
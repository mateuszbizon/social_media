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

export type ErrorResponse = {
    message: string
}

export type UserPostsQueryParams = {
    sort: "asc" | "desc"
}

export type SearchUsersQueryParams = {
    query: string
}

export type ServiceError = {
    status?: number
    error?: string
}

export type ServiceResult<T> = {
    data?: T
} & ServiceError
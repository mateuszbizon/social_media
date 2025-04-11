import { SidebarItem } from "@/types";
import { House, Search } from "lucide-react";

export const SIDEBAR_ITEMS: SidebarItem[] = [
    {
        name: "Home",
        icon: House,
        isLink: true,
        href: "/"
    },
    {
        name: "Search",
        icon: Search,
        isLink: false,
        action: "searchUsers"
    }
]
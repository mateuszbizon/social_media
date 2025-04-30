import { SidebarItem } from "@/types";
import { CirclePlus, House, Search } from "lucide-react";

export const SIDEBAR_ITEMS: SidebarItem[] = [
    {
        name: "Home",
        icon: House,
        isLink: true,
        href: "/",
        needAuth: false,
    },
    {
        name: "Search",
        icon: Search,
        isLink: false,
        action: "searchUsers",
        needAuth: false,
    },
    {
        name: "Create post",
        icon: CirclePlus,
        isLink: true,
        href: "/create-post",
        needAuth: true
    }
]
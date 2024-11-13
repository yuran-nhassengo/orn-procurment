import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/Components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "home",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "inbox",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "calendar",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "search",
    icon: Search,
  },
  {
    title: "Settings",
    url: "settings",
    icon: Settings,
  },
]

export function AppSidebar({onSelect}:{onSelect:(page:string) =>void}) {
  return (
    <div  >
            <Sidebar className="flex flex-1 pt-20">
            <SidebarContent>
                <SidebarGroup>
                <SidebarGroupLabel >Perguntas Frequentes</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton 
                        
                        asChild>
                            <a href="#"
                              onClick={(e)=>{
                                e.preventDefault()
                                onSelect(item.url)
                              }}
                            >
                            <item.icon />
                            <span>{item.title}</span>
                            </a>
                        </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                    </SidebarMenu>
                </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            </Sidebar>
    </div>
  )
}

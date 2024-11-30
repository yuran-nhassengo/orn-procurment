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
    icon: Home,  // Ícone para Home
  },
  {
    title: "Inbox",
    url: "inbox",
    icon: Inbox,  // Ícone para Inbox (caixa de entrada)
  },
  {
    title: "Projetos",
    url: "calendar",
    icon: Calendar,  // Ícone para Projetos
  },
  {
    title: "Produtos",
    url: "search",
    icon: Calendar,  // Ícone para Produtos (materiais elétricos)
  },
  {
    title: "Consultoria",
    url: "settings",
    icon: Calendar,  // Ícone para Consultoria
  },
  {
    title: "Procurement",
    url: "procurement",
    icon: Settings,  // Ícone para Procurement (aquisição de materiais)
  },
];

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

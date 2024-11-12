import { AppSidebar } from "@/Components/AppSideBar";
import { SidebarProvider, SidebarTrigger } from "@/Components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div >
    <SidebarProvider>
      <AppSidebar  />
      <main className=" flex pt-24">
         <SidebarTrigger /> 
        {children}
      </main>
    </SidebarProvider>
    </div>
  )
}

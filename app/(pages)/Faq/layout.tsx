"use client";

import { AppSidebar } from "@/Components/AppSideBar";
import { SidebarProvider, SidebarTrigger } from "@/Components/ui/sidebar";
import { useState } from "react";
import Faq from "./page";

const OtherContent = ({ title }: { title: string }) => (
  <div>
    <h2>{title}</h2>
    <p>Este é o conteúdo para {title}.</p>
  </div>
);

export default function Layout({ children }: { children: React.ReactNode }) {
  const [selectedPage,setSelectedPage] = useState<string>("home");
  
  const renderContent = () => {
    // Renderizando diretamente o Faq para as páginas válidas
    if (["home", "inbox", "calendar", "search", "settings","procurement"].includes(selectedPage)) {
      return <Faq page={selectedPage} />;
    }

    // Caso não seja uma página válida, pode retornar algum conteúdo padrão
    return <OtherContent title={selectedPage} />;
  };


  return (
    <div >
    <SidebarProvider>
      <AppSidebar onSelect={setSelectedPage}  />
      <main className=" flex pt-24">
         <SidebarTrigger /> 
        {renderContent()}
      </main>
    </SidebarProvider>
    </div>
  )
}
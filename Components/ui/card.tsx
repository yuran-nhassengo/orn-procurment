import React from "react";

// Componente Card
export const Card = ({ children }: { children: React.ReactNode }) => (
  <div className=" rounded-lg overflow-hidden">
    {children}
  </div>
);

// Componente CardContent
export const CardContent = ({ children }: { children: React.ReactNode }) => (
  <div className="p-0  py-10">
    {children}
  </div>
);
    
import React from "react";

// Componente Card
export const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    {children}
  </div>
);

// Componente CardContent
export const CardContent = ({ children }: { children: React.ReactNode }) => (
  <div className="p-6">
    {children}
  </div>
);
    
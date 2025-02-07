"use client";

import Sidebar from "@/ui/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      {/* Sidebar qui s'adapte en fonction de l'écran */}
      <Sidebar />

      {/* Contenu principal qui s'ajuste en fonction de la sidebar */}
      <div className="flex-1 flex flex-col">
        {/* Contenu principal avec un bon espace */}
        <div className="flex-1 overflow-auto bg-slate-100">
          <div className="ml-20 mr-14 my-4">{children}</div>
        </div>
      </div>
    </div>
  );
}

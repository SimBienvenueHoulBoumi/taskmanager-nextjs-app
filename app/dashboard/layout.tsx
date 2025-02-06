"use client";

import Sidebar from "@/components/Sidebar"; // Import du composant Sidebar

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-screen bg-gray-100">
      <Sidebar />
      {/* Contenu principal qui ne bouge pas */}
      <div className="w-full p-4 overflow-y-auto ml-14">{children}</div>
    </div>
  );
}

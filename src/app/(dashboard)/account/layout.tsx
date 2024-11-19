"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Toaster } from "sonner";
import { redirect } from "next/navigation";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="bg-gray-50 antialiased">
      {/* <div className="bg-gray-50 antialiased dark:bg-gray-900"> */}
      <Header onToggleSidebar={toggleSidebar} />
      <div className="flex">
        <div className={`${isSidebarVisible ? "block" : "hidden"} md:block`}>
          <Sidebar onToggleSidebar={toggleSidebar} />
        </div>

        <main className="flex-grow h-screen overflow-hidden overflow-y-auto pt-14 md:pl-72">
          {children}
        </main>
      </div>
      <Toaster richColors />
    </div>
  );
}

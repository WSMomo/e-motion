import { TopHeader } from './components/TopHeader';
import { SideNav } from './components/SideNav';
import React from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background flex flex-col text-on-surface">
      <TopHeader />
      
      <div className="flex flex-1">
        <SideNav />
        <main className="flex-1 min-h-[calc(100vh-5rem)] overflow-y-auto relative z-10 bg-surface-container-low">
           {children}
        </main>
      </div>
    </div>
  );
}

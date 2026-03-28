'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, Activity, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export function SideNav() {
  const pathname = usePathname();

  const links = [
    { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Teams', href: '/dashboard/teams', icon: Users },
    { name: 'Signals', href: '/dashboard/signals', icon: Activity },
    { name: 'Privacy Center', href: '/dashboard/privacy', icon: Shield },
  ];

  return (
    <aside className="w-full md:w-64 bg-surface-container-lowest border-r border-outline-variant/15 flex-shrink-0 hidden md:flex min-h-[calc(100vh-5rem)] relative z-20">
      <nav className="flex-1 p-4 space-y-2 mt-2 font-inter text-sm font-medium">
        {links.map((link) => {
          const isActive = pathname === link.href;
          const Icon = link.icon;
          return (
            <Link 
              key={link.name}
              href={link.href} 
              className={`flex items-center space-x-3 px-4 py-3 rounded-2xl transition-all duration-300 relative ${
                isActive 
                  ? 'text-primary' 
                  : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
              }`}
            >
              {isActive && (
                 <motion.div
                   layoutId="active-nav"
                   className="absolute inset-0 bg-primary/10 rounded-2xl -z-10"
                   transition={{ type: "spring", stiffness: 300, damping: 30 }}
                 />
              )}
              <Icon className="w-5 h-5 relative z-10" />
              <span className="relative z-10">{link.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

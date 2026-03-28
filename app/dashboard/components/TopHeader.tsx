'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Moon, Sun, LogOut, Menu, X, LayoutDashboard, Users, Activity, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const mobileLinks = [
  { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Teams', href: '/dashboard/teams', icon: Users },
  { name: 'Signals', href: '/dashboard/signals', icon: Activity },
  { name: 'Privacy Center', href: '/dashboard/privacy', icon: Shield },
];

export function TopHeader() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <header className="h-20 md:h-28 lg:h-32 bg-surface-container-lowest border-b border-outline-variant/15 flex items-center justify-between px-4 lg:px-6 sticky top-0 z-50">
        <div className="hidden md:block flex-1" /> {/* Left spacer - Desktop only */}

        {/* Logo - left aligned on mobile, centered on desktop */}
        <Link href="/" className="flex items-center justify-start md:justify-center cursor-pointer flex-shrink-0">
          <div className="relative w-40 h-16 sm:w-56 sm:h-20 lg:w-[400px] lg:h-28 flex items-center">
            <Image src="/images/logo.webp" alt="e-motion logo" fill className="object-contain" priority sizes="(max-width: 768px) 160px, 400px" />
          </div>
        </Link>

        {/* Right nav - desktop elements */}
        <div className="hidden md:flex flex-1 justify-end items-center space-x-6">
          {mounted && (
            <button 
               onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
               className="p-2 rounded-full hover:bg-surface-container-low transition-colors text-on-surface-variant flex items-center justify-center"
               aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          )}
          
          <div className="flex items-center space-x-3 border-l border-outline-variant/20 pl-6">
            <div className="text-right hidden sm:block">
              <div className="font-inter text-sm font-semibold">People Ops</div>
              <div className="font-inter text-xs text-on-surface-variant">Global Access</div>
            </div>
            <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-medium">
              HR
            </div>
            <Link href="/">
               <button aria-label="Sign Out" className="p-2 ml-2 text-on-surface-variant hover:text-red-500 hover:bg-red-500/10 rounded-full transition-colors flex items-center justify-center">
                 <LogOut className="w-5 h-5" />
               </button>
            </Link>
          </div>
        </div>

        {/* Mobile Hamburger toggle */}
        <div className="flex md:hidden items-center">
          <button 
             onClick={() => setIsMobileOpen(true)}
             className="p-2 text-on-surface rounded-md hover:bg-surface-container-low focus:outline-none"
             aria-label="Open mobile menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Sliding Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex md:hidden bg-background/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="ml-auto w-3/4 max-w-sm h-full bg-surface-container-lowest border-l border-outline-variant/20 flex flex-col p-6 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="font-inter font-bold text-lg">Menu</span>
                <button 
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 text-on-surface rounded-md hover:bg-surface-container-low"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Theme toggle mobile */}
              <div className="mb-6 pb-6 border-b border-outline-variant/10">
                {mounted && (
                  <button 
                     onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                     className="flex items-center space-x-3 w-full p-3 rounded-xl hover:bg-surface-container-high transition-colors text-on-surface-variant"
                  >
                    {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    <span className="font-inter text-sm font-medium">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                  </button>
                )}
              </div>

              {/* Links */}
              <nav className="flex-1 space-y-2 font-inter text-sm font-medium">
                {mobileLinks.map((link) => {
                  const isActive = pathname === link.href;
                  const Icon = link.icon;
                  return (
                    <Link 
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                        isActive ? 'bg-primary/10 text-primary' : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{link.name}</span>
                    </Link>
                  );
                })}
              </nav>

              {/* Sign out mobile */}
              <div className="mt-auto pt-6 border-t border-outline-variant/10">
                <Link href="/" onClick={() => setIsMobileOpen(false)} className="flex items-center space-x-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-500/10 transition-colors">
                   <LogOut className="w-5 h-5" />
                   <span className="font-inter text-sm font-medium">Sign Out</span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

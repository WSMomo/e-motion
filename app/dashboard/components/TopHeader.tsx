'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Moon, Sun, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function TopHeader() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="h-28 lg:h-32 bg-surface-container-lowest border-b border-outline-variant/15 flex items-center justify-between px-6 sticky top-0 z-50">
      <div className="flex-1" /> {/* Left spacer */}

      <Link href="/" className="flex items-center justify-center cursor-pointer flex-shrink-0">
        <div className="relative w-72 h-24 lg:w-[400px] lg:h-28 flex items-center justify-center">
          <Image src="/images/logo.webp" alt="e-motion logo" fill className="object-contain" priority sizes="(max-width: 768px) 288px, 400px" />
        </div>
      </Link>

      <div className="flex-1 flex justify-end items-center space-x-6">
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
    </header>
  );
}

'use client';

import React, { useState } from 'react';

interface PrivacyMaskProps {
  children: React.ReactNode;
  reason?: string;
  defaultRevealed?: boolean;
}

export function PrivacyMask({ 
  children, 
  reason = "Aggregated data. Individual metrics hidden by privacy policy.",
  defaultRevealed = false
}: PrivacyMaskProps) {
  const [revealed, setRevealed] = useState(defaultRevealed);

  return (
    <div 
      className="relative group rounded-xl overflow-hidden"
      onMouseEnter={() => setRevealed(true)}
      onMouseLeave={() => setRevealed(defaultRevealed)}
    >
      <div className={`transition-all duration-300 ${!revealed ? 'blur-md opacity-40 select-none pointer-events-none' : ''}`}>
        {children}
      </div>
      
      {!revealed && (
        <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
          <div className="bg-surface-container-high bg-opacity-90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-outline-variant/15 flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-on-surface-variant" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-xs font-inter font-medium text-on-surface-variant">
              {reason}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

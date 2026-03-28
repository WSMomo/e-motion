'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: ButtonVariant;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', className = '', children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-inter font-medium transition-colors focus:ring-2 focus:ring-primary focus:outline-none disabled:opacity-50 disabled:pointer-events-none rounded-2xl px-6 py-2.5 text-sm";
    
    const variants = {
      primary: "bg-primary text-on-primary shadow-lg shadow-primary/20",
      secondary: "bg-surface-container-high text-on-surface hover:bg-surface-container-low border border-outline-variant/20",
      tertiary: "bg-transparent text-primary hover:bg-surface-container-low"
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface CardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  children: React.ReactNode;
  elevation?: 'lowest' | 'low' | 'high';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = '', elevation = 'lowest', ...props }, ref) => {
    const elevations = {
      lowest: "bg-surface-container-lowest",
      low: "bg-surface-container-low border border-outline-variant/10",
      high: "bg-surface-container-high shadow-ambient border border-outline-variant/5"
    };

    return (
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`rounded-3xl ${elevations[elevation]} ${className}`}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
Card.displayName = 'Card';

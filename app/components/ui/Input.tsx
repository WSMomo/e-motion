import React, { useId } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, className = '', ...props }, ref) => {
    const defaultId = useId();
    const id = props.id || defaultId;

    return (
      <div className="flex flex-col">
        <label htmlFor={id} className="text-xs font-inter font-medium text-on-surface-variant mb-[0.7rem] uppercase tracking-wide">
          {label}
        </label>
        <input
          id={id}
          ref={ref}
          className={`bg-surface-container-lowest border border-outline-variant/15 text-on-surface text-sm rounded-md block w-full p-3 outline-none transition-all duration-200 focus:ring-0 focus:border-2 focus:border-primary disabled:opacity-50 hover:border-outline-variant/30 ${className}`}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';

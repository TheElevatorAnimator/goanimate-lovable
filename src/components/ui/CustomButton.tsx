
import React from 'react';
import { cn } from '@/lib/utils';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        className={cn(
          'uppercase tracking-wider transition-all duration-200 active:translate-y-1 pixel-border',
          {
            'bg-dream-purple text-white hover:bg-opacity-90': variant === 'primary',
            'bg-dream-blue text-white hover:bg-opacity-90': variant === 'secondary',
            'bg-dream-orange text-white hover:bg-opacity-90': variant === 'accent',
            'bg-transparent border-2 border-dream-purple text-dream-purple hover:bg-dream-purple hover:bg-opacity-10': 
              variant === 'outline',
            'text-sm px-3 py-1': size === 'sm',
            'text-base px-4 py-2': size === 'md',
            'text-lg px-6 py-3': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

CustomButton.displayName = 'CustomButton';

export default CustomButton;

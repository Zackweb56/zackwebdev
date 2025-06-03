import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  align?: 'left' | 'center';
  marginBottom?: string;
}

const SectionTitle = React.forwardRef<HTMLHeadingElement, SectionTitleProps>(
  ({ className, children, align = 'center', marginBottom = 'mb-16', ...props }, ref) => {
    return (
      <div className={cn(marginBottom, align === 'center' ? "text-center" : "text-left")}>
        <h2
          ref={ref}
          className={cn(
            "text-4xl md:text-5xl font-bold mb-6 relative inline-block text-white",
            className
          )}
          {...props}
        >
          {children}
          {/* Creative underline with gradient and glow effect */}
          <div className="absolute -bottom-4 left-0 w-1/2">
            <div className="h-1 bg-gradient-to-r from-[#ff8800] via-[#ffc233] to-[#ff8800] shadow-[0_0_8px_[#ffc233]]"></div>
          </div>
        </h2>
      </div>
    );
  }
);

SectionTitle.displayName = "SectionTitle";

export { SectionTitle }; 
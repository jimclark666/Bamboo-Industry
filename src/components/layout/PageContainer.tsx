import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

type PageContainerProps = {
  children: ReactNode;
  size?: 'default' | 'wide';
  className?: string;
};

export function PageContainer({ children, size = 'default', className }: PageContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        size === 'wide' ? 'max-w-[1320px]' : 'max-w-[1200px]',
        className
      )}
    >
      {children}
    </div>
  );
}

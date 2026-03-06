import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

type ButtonBaseProps = {
  children: ReactNode;
  href?: string;
  disabled?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variantClass: string;
};

const sizeClassMap = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-11 px-5 text-base'
} as const;

export function ButtonBase({
  children,
  href,
  disabled = false,
  className,
  size = 'md',
  variantClass
}: ButtonBaseProps) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-md border font-medium transition-colors duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40',
    'disabled:cursor-not-allowed disabled:opacity-50',
    sizeClassMap[size],
    variantClass,
    className
  );

  if (href && !disabled) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled} type="button">
      {children}
    </button>
  );
}

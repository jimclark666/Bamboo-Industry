import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

type TextButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  iconRight?: ReactNode;
};

export function TextButton({ children, href, className, iconRight }: TextButtonProps) {
  const classes = cn(
    'inline-flex items-center gap-1 text-sm font-medium text-brand-600 transition-colors hover:text-brand-500',
    className
  );

  if (href) {
    return (
      <Link className={classes} href={href}>
        <span>{children}</span>
        {iconRight}
      </Link>
    );
  }

  return (
    <button className={classes} type="button">
      <span>{children}</span>
      {iconRight}
    </button>
  );
}

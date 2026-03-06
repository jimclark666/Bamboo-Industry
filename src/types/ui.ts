import type { ReactNode } from 'react';

export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonBaseProps = {
  children: ReactNode;
  href?: string;
  disabled?: boolean;
  className?: string;
  size?: ButtonSize;
};

export type StatusTagTone = 'neutral' | 'success' | 'warning' | 'danger' | 'info';

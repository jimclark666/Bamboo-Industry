import { cn } from '@/utils/cn';
import type { StatusTagTone } from '@/types/ui';

type StatusTagProps = {
  label: string;
  tone?: StatusTagTone;
  size?: 'sm' | 'md';
  className?: string;
};

const toneClassMap: Record<StatusTagTone, string> = {
  neutral: 'border-neutral-300 bg-neutral-100 text-neutral-700',
  success: 'border-[#b8dfbf] bg-[#e6f5df] text-[#2f7040]',
  warning: 'border-[#ead9b8] bg-[#fbf5e8] text-[#7c5f31]',
  danger: 'border-[#ebc7c7] bg-[#fbeeee] text-[#8c3f3f]',
  info: 'border-[#c7e5cc] bg-[#ecf8e9] text-[#3f7650]'
};

const sizeClassMap: Record<NonNullable<StatusTagProps['size']>, string> = {
  sm: 'h-6 px-2.5 text-sm',
  md: 'h-7 px-3 text-sm'
};

export function StatusTag({ label, tone = 'neutral', size = 'md', className }: StatusTagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-pill border font-medium tracking-wide',
        toneClassMap[tone],
        sizeClassMap[size],
        className
      )}
    >
      {label}
    </span>
  );
}

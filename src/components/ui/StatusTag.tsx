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
  success: 'border-[#bed7c8] bg-[#e8f4ee] text-[#2f6b4e]',
  warning: 'border-[#ead9b8] bg-[#fbf5e8] text-[#7c5f31]',
  danger: 'border-[#ebc7c7] bg-[#fbeeee] text-[#8c3f3f]',
  info: 'border-[#c0d5cc] bg-[#e8f1ee] text-[#355f4d]'
};

const sizeClassMap = {
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

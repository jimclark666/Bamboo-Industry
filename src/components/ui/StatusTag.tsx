import { cn } from '@/utils/cn';
import type { StatusTagTone } from '@/types/ui';

type StatusTagProps = {
  label: string;
  tone?: StatusTagTone;
  size?: 'sm' | 'md';
  className?: string;
};

const toneClassMap: Record<StatusTagTone, string> = {
  neutral: 'bg-neutral-100 text-neutral-700 border-neutral-300',
  success: 'bg-[#edf4ef] text-[#446b56] border-[#c8dbcf]',
  warning: 'bg-[#f8f3e8] text-[#84663a] border-[#e5d6b7]',
  danger: 'bg-[#f8eded] text-[#8f4d4d] border-[#e5c8c8]',
  info: 'bg-[#edf2f6] text-[#4f6678] border-[#c8d5de]'
};

const sizeClassMap = {
  sm: 'h-6 px-2 text-xs',
  md: 'h-7 px-3 text-xs'
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

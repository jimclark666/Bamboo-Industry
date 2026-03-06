import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

type SectionBlockProps = {
  id?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  headerClassName?: string;
  descriptionClassName?: string;
};

export function SectionBlock({
  id,
  title,
  description,
  children,
  className,
  headerClassName,
  descriptionClassName
}: SectionBlockProps) {
  return (
    <section id={id} className={cn('py-10 md:py-14 lg:py-16', className)}>
      {(title || description) && (
        <header className={cn('mb-6 md:mb-9', headerClassName)}>
          {title && <h2 className="text-[28px] leading-[36px] font-semibold text-neutral-900 md:text-[30px] md:leading-[40px]">{title}</h2>}
          {description && (
            <p className={cn('mt-3 max-w-3xl text-sm leading-[22px] text-neutral-700', descriptionClassName)}>{description}</p>
          )}
        </header>
      )}
      <div>{children}</div>
    </section>
  );
}

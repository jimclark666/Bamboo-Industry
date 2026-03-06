'use client';

import { useEffect, useState } from 'react';
import { SITE_NAME } from '@/constants/site';
import type { NavItem } from '@/types/site';
import { cn } from '@/utils/cn';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { SecondaryButton } from '@/components/ui/SecondaryButton';
import { PageContainer } from './PageContainer';
import Link from 'next/link';

type TopNavProps = {
  items: NavItem[];
  sticky?: boolean;
  showAuthActions?: boolean;
};

export function TopNav({ items, sticky = true, showAuthActions = true }: TopNavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    handler();
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={cn(
        sticky && 'sticky top-0 z-40',
        'border-b border-transparent transition-all',
        scrolled ? 'bg-white/95 shadow-sm backdrop-blur border-neutral-300/70' : 'bg-neutral-100/80'
      )}
    >
      <PageContainer>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link className="text-lg font-semibold text-neutral-900" href="/">
            {SITE_NAME}
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {items.map((item) => (
              <Link className="text-sm text-neutral-700 hover:text-neutral-900" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          {showAuthActions && (
            <div className="flex items-center gap-2">
              <SecondaryButton href="/login" size="sm">
                登录
              </SecondaryButton>
              <PrimaryButton href="/register" size="sm">
                注册
              </PrimaryButton>
            </div>
          )}
        </div>
      </PageContainer>
    </header>
  );
}

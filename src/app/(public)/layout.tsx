import type { ReactNode } from 'react';
import { Footer } from '@/components/layout/Footer';
import { TopNav } from '@/components/layout/TopNav';
import { mockFooterColumns, mockNavItems } from '@/mock/site';

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900">
      <TopNav items={mockNavItems} />
      <main>{children}</main>
      <Footer columns={mockFooterColumns} copyright="© BambooLink. All rights reserved." />
    </div>
  );
}

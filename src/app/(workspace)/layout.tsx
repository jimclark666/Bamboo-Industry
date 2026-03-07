import type { ReactNode } from 'react';
import { TopNav } from '@/components/layout/TopNav';
import { mockNavItems } from '@/mock/site';
import { SidebarNav } from '@/components/workspace/SidebarNav';
import { Topbar } from '@/components/workspace/Topbar';
import { workspaceStyles } from '@/components/workspace/styles';

export default function WorkspaceLayout({ children }: { children: ReactNode }) {
  return (
    <div className={workspaceStyles.shell}>
      <TopNav items={mockNavItems} />
      <div className={workspaceStyles.body}>
        <SidebarNav />
        <main className={workspaceStyles.main}>
          <Topbar />
          {children}
        </main>
      </div>
    </div>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { WORKSPACE_NAV_ITEMS } from '@/constants/workspace';
import { cn } from '@/utils/cn';
import { workspaceStyles } from './styles';

const OVERVIEW_NAV = WORKSPACE_NAV_ITEMS.filter((item) => item.href === '/workspace');
const BUSINESS_NAV = WORKSPACE_NAV_ITEMS.filter((item) => item.href !== '/workspace');

export function SidebarNav() {
  const pathname = usePathname();

  const renderNav = (items: readonly (typeof WORKSPACE_NAV_ITEMS)[number][]) => (
    <nav className={workspaceStyles.navList}>
      {items.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            className={cn(workspaceStyles.navLink, active ? workspaceStyles.navLinkActive : workspaceStyles.navLinkIdle)}
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <aside className={workspaceStyles.sidebar}>
      <p className={workspaceStyles.sidebarTitle}>系统导航</p>
      <section>
        <p className={workspaceStyles.navSectionTitle}>总览</p>
        {renderNav(OVERVIEW_NAV)}
      </section>
      <section className={workspaceStyles.navSection}>
        <p className={workspaceStyles.navSectionTitle}>业务链路</p>
        {renderNav(BUSINESS_NAV)}
      </section>
    </aside>
  );
}

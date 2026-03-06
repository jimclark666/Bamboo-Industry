'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SecondaryButton } from '@/components/ui/SecondaryButton';
import { WORKSPACE_PAGE_TITLES } from '@/constants/workspace';
import { workspaceStyles } from './styles';
import { SystemTag } from './SystemTag';

export function Topbar() {
  const pathname = usePathname();
  const pageTitle = WORKSPACE_PAGE_TITLES[pathname] ?? '工作台';

  return (
    <header className={workspaceStyles.topbar}>
      <div className={workspaceStyles.topbarRow}>
        <div>
          <h1 className={workspaceStyles.topbarTitle}>{pageTitle}</h1>
          <p className={workspaceStyles.topbarMeta}>当前身份：竹企协作账号（占位） · 协作状态：可用</p>
        </div>
        <div className="flex items-center gap-2">
          <SystemTag label="系统状态稳定" tone="success" />
          <SecondaryButton href="/rules" size="sm">
            查看平台规则
          </SecondaryButton>
          <Link className="text-sm text-neutral-700 hover:text-brand-600" href="/login">
            退出入口
          </Link>
        </div>
      </div>
    </header>
  );
}

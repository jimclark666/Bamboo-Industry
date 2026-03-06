'use client';

import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { DashboardSection } from '@/components/workspace/DashboardSection';
import { FilterBar } from '@/components/workspace/FilterBar';
import { InquiryTable } from '@/components/workspace/InquiryTable';
import { MetricCard } from '@/components/workspace/MetricCard';
import { WorkspacePageHeader } from '@/components/workspace/WorkspacePageHeader';
import {
  INQUIRY_NOTES,
  INQUIRY_RECORDS,
  INQUIRY_REGION_OPTIONS,
  INQUIRY_ROLE_OPTIONS,
  INQUIRY_STATUS_OPTIONS,
  INQUIRY_SUMMARY_CARDS
} from '@/constants/workspace';
import { workspaceStyles } from '@/components/workspace/styles';

const PAGE_ACTIONS = [
  { label: '新建询价', tone: 'primary' },
  { label: '导出记录', tone: 'secondary' },
  { label: '报价规则', tone: 'secondary' }
] as const;

export default function InquiryQuotesPage() {
  const searchParams = useSearchParams();
  const linkedResourceName = searchParams.get('resourceName') ?? '';
  const linkedKeyword = searchParams.get('keyword') ?? '';

  const [keyword, setKeyword] = useState(linkedResourceName || linkedKeyword);
  const [region, setRegion] = useState('全部地区');
  const [roleView, setRoleView] = useState('全部视角');
  const [status, setStatus] = useState('全部状态');

  const filteredRecords = useMemo(() => {
    return INQUIRY_RECORDS.filter((item) => {
      const normalizedKeyword = keyword.trim();
      const matchedKeyword =
        normalizedKeyword.length === 0 ||
        item.resourceName.includes(normalizedKeyword) ||
        item.initiator.includes(normalizedKeyword) ||
        item.counterparty.includes(normalizedKeyword);

      const matchedRegion = region === '全部地区' || item.region === region;
      const matchedRole = roleView === '全部视角' || item.roleView === roleView;
      const matchedStatus = status === '全部状态' || item.status === status;

      return matchedKeyword && matchedRegion && matchedRole && matchedStatus;
    });
  }, [keyword, region, roleView, status]);

  return (
    <div className="grid gap-4">
      <WorkspacePageHeader
        actions={PAGE_ACTIONS}
        description="围绕资源协同建立询价与报价记录，沉淀多方沟通过程并同步关键状态。"
        title="询价与报价管理"
      />

      <section className={workspaceStyles.metricGrid}>
        {INQUIRY_SUMMARY_CARDS.map((item) => (
          <MetricCard key={item.title} note={item.note} title={item.title} value={item.value} />
        ))}
      </section>

      <FilterBar
        keyword={keyword}
        keywordPlaceholder="搜索资源名称、发起主体、对接主体"
        onKeywordChange={setKeyword}
        onRegionChange={setRegion}
        onStatusChange={setStatus}
        onTypeChange={setRoleView}
        region={region}
        regionLabel="地区筛选"
        regionOptions={INQUIRY_REGION_OPTIONS}
        status={status}
        statusLabel="状态筛选"
        statusOptions={INQUIRY_STATUS_OPTIONS}
        type={roleView}
        typeLabel="角色视角"
        typeOptions={INQUIRY_ROLE_OPTIONS}
      />

      <InquiryTable items={filteredRecords} />

      <DashboardSection description="报价状态推进前，请核验资源信息、主体身份和关键条款，以便后续履约衔接。" title="流程提示">
        <ul className={workspaceStyles.list}>
          {INQUIRY_NOTES.map((note) => (
            <li className={workspaceStyles.listItem} key={note}>
              {note}
            </li>
          ))}
        </ul>
      </DashboardSection>
    </div>
  );
}

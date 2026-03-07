'use client';

import { Suspense, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { DashboardSection } from '@/components/workspace/DashboardSection';
import { DisputeTable } from '@/components/workspace/DisputeTable';
import { FilterBar } from '@/components/workspace/FilterBar';
import { MetricCard } from '@/components/workspace/MetricCard';
import { WorkspacePageHeader } from '@/components/workspace/WorkspacePageHeader';
import {
  DISPUTE_PRINCIPLES,
  DISPUTE_RECORDS,
  DISPUTE_REGION_OPTIONS,
  DISPUTE_RULE_HINTS,
  DISPUTE_STATUS_OPTIONS,
  DISPUTE_SUMMARY_CARDS,
  DISPUTE_TYPE_OPTIONS
} from '@/constants/workspace';
import { workspaceStyles } from '@/components/workspace/styles';

const PAGE_ACTIONS = [
  { label: '发起争议登记', tone: 'primary' },
  { label: '导出处理记录', tone: 'secondary' },
  { label: '查看平台规则', tone: 'secondary' }
] as const;

function RulesDisputesPageContent() {
  const searchParams = useSearchParams();
  const linkedRef = searchParams.get('relatedRef') ?? '';
  const linkedKeyword = searchParams.get('keyword') ?? '';

  const [keyword, setKeyword] = useState(linkedRef || linkedKeyword);
  const [region, setRegion] = useState('全部地区');
  const [disputeType, setDisputeType] = useState('全部类型');
  const [status, setStatus] = useState('全部状态');

  const filteredRecords = useMemo(() => {
    return DISPUTE_RECORDS.filter((item) => {
      const normalizedKeyword = keyword.trim();
      const matchedKeyword =
        normalizedKeyword.length === 0 ||
        item.relatedName.includes(normalizedKeyword) ||
        item.relatedRef.includes(normalizedKeyword) ||
        item.initiator.includes(normalizedKeyword);
      const matchedRegion = region === '全部地区' || item.region === region;
      const matchedType = disputeType === '全部类型' || item.disputeType === disputeType;
      const matchedStatus = status === '全部状态' || item.status === status;

      return matchedKeyword && matchedRegion && matchedType && matchedStatus;
    });
  }, [keyword, region, disputeType, status]);

  return (
    <div className="grid gap-4">
      <WorkspacePageHeader
        actions={PAGE_ACTIONS}
        description="基于协作链路处理规则与争议事项，确保异常问题可核验、可追溯、可闭环。"
        title="规则与争议处理"
      />

      <section className={workspaceStyles.metricGrid}>
        {DISPUTE_SUMMARY_CARDS.map((item) => (
          <MetricCard key={item.title} note={item.note} title={item.title} value={item.value} />
        ))}
      </section>

      <FilterBar
        keyword={keyword}
        keywordPlaceholder="搜索关联资源、记录编号、发起主体"
        onKeywordChange={setKeyword}
        onRegionChange={setRegion}
        onStatusChange={setStatus}
        onTypeChange={setDisputeType}
        region={region}
        regionLabel="地区筛选"
        regionOptions={DISPUTE_REGION_OPTIONS}
        status={status}
        statusLabel="处理状态"
        statusOptions={DISPUTE_STATUS_OPTIONS}
        type={disputeType}
        typeLabel="争议类型"
        typeOptions={DISPUTE_TYPE_OPTIONS}
      />

      <DisputeTable items={filteredRecords} />

      <div className={workspaceStyles.gridTwo}>
        <DashboardSection description="处理争议前请先核对规则版本与链路上下文，减少重复沟通。" title="规则提示区">
          <ul className={workspaceStyles.list}>
            {DISPUTE_RULE_HINTS.map((item) => (
              <li className={workspaceStyles.listItem} key={item}>
                {item}
              </li>
            ))}
          </ul>
        </DashboardSection>

        <DashboardSection description="平台按照统一原则推进争议处理，保障协作双方权益与系统稳定。" title="处理原则说明区">
          <ul className={workspaceStyles.list}>
            {DISPUTE_PRINCIPLES.map((item) => (
              <li className={workspaceStyles.listItem} key={item}>
                {item}
              </li>
            ))}
          </ul>
        </DashboardSection>
      </div>
    </div>
  );
}

export default function RulesDisputesPage() {
  return (
    <Suspense fallback={<div className="text-sm text-neutral-600">页面加载中...</div>}>
      <RulesDisputesPageContent />
    </Suspense>
  );
}

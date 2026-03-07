'use client';

import { Suspense, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { DashboardSection } from '@/components/workspace/DashboardSection';
import { FilterBar } from '@/components/workspace/FilterBar';
import { FulfillmentTable } from '@/components/workspace/FulfillmentTable';
import { MetricCard } from '@/components/workspace/MetricCard';
import { WorkspacePageHeader } from '@/components/workspace/WorkspacePageHeader';
import {
  FULFILLMENT_NOTES,
  FULFILLMENT_RECORDS,
  FULFILLMENT_REGION_OPTIONS,
  FULFILLMENT_RISK_OPTIONS,
  FULFILLMENT_STAGE_OPTIONS,
  FULFILLMENT_SUMMARY_CARDS
} from '@/constants/workspace';
import { workspaceStyles } from '@/components/workspace/styles';

const PAGE_ACTIONS = [
  { label: '新建履约记录', tone: 'primary' },
  { label: '导出履约台账', tone: 'secondary' },
  { label: '履约规则', tone: 'secondary' }
] as const;

function FulfillmentPageContent() {
  const searchParams = useSearchParams();
  const linkedInquiryId = searchParams.get('inquiryId') ?? '';

  const [keyword, setKeyword] = useState(linkedInquiryId);
  const [region, setRegion] = useState('全部地区');
  const [stage, setStage] = useState('全部阶段');
  const [risk, setRisk] = useState('全部风险');

  const filteredRecords = useMemo(() => {
    return FULFILLMENT_RECORDS.filter((item) => {
      const normalizedKeyword = keyword.trim();
      const matchedKeyword =
        normalizedKeyword.length === 0 ||
        item.resourceName.includes(normalizedKeyword) ||
        item.inquiryId.includes(normalizedKeyword) ||
        item.partners.includes(normalizedKeyword);
      const matchedRegion = region === '全部地区' || item.region === region;
      const matchedStage = stage === '全部阶段' || item.stage === stage;
      const matchedRisk = risk === '全部风险' || item.risk === risk;

      return matchedKeyword && matchedRegion && matchedStage && matchedRisk;
    });
  }, [keyword, region, stage, risk]);

  return (
    <div className="grid gap-4">
      <WorkspacePageHeader
        actions={PAGE_ACTIONS}
        description="统一追踪协作履约阶段，沉淀从备货、运输到验收的全过程记录。"
        title="履约跟踪管理"
      />

      <section className={workspaceStyles.metricGrid}>
        {FULFILLMENT_SUMMARY_CARDS.map((item) => (
          <MetricCard key={item.title} note={item.note} title={item.title} value={item.value} />
        ))}
      </section>

      <FilterBar
        keyword={keyword}
        keywordPlaceholder="搜索资源名称、询价编号、协作主体"
        onKeywordChange={setKeyword}
        onRegionChange={setRegion}
        onStatusChange={setRisk}
        onTypeChange={setStage}
        region={region}
        regionLabel="地区筛选"
        regionOptions={FULFILLMENT_REGION_OPTIONS}
        status={risk}
        statusLabel="风险状态"
        statusOptions={FULFILLMENT_RISK_OPTIONS}
        type={stage}
        typeLabel="履约阶段"
        typeOptions={FULFILLMENT_STAGE_OPTIONS}
      />

      <FulfillmentTable items={filteredRecords} />

      <DashboardSection description="请重点跟踪预警与异常事项，确保履约信息与规则处理记录同步。" title="异常与进度提示">
        <ul className={workspaceStyles.list}>
          {FULFILLMENT_NOTES.map((note) => (
            <li className={workspaceStyles.listItem} key={note}>
              {note}
            </li>
          ))}
        </ul>
      </DashboardSection>
    </div>
  );
}

export default function FulfillmentPage() {
  return (
    <Suspense fallback={<div className="text-sm text-neutral-600">页面加载中...</div>}>
      <FulfillmentPageContent />
    </Suspense>
  );
}

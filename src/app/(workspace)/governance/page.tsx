'use client';

import { Suspense, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { DashboardSection } from '@/components/workspace/DashboardSection';
import { FilterBar } from '@/components/workspace/FilterBar';
import { GovernanceTable } from '@/components/workspace/GovernanceTable';
import { MetricCard } from '@/components/workspace/MetricCard';
import { WorkspacePageHeader } from '@/components/workspace/WorkspacePageHeader';
import {
  GOVERNANCE_PRINCIPLES,
  GOVERNANCE_RECORDS,
  GOVERNANCE_RISK_ALERTS,
  GOVERNANCE_RISK_OPTIONS,
  GOVERNANCE_STATUS_OPTIONS,
  GOVERNANCE_SUBJECT_TYPE_OPTIONS,
  GOVERNANCE_SUMMARY_CARDS
} from '@/constants/workspace';
import { workspaceStyles } from '@/components/workspace/styles';

const PAGE_ACTIONS = [
  { label: '发起治理复核', tone: 'primary' },
  { label: '导出治理台账', tone: 'secondary' },
  { label: '治理策略说明', tone: 'secondary' }
] as const;

function GovernancePageContent() {
  const searchParams = useSearchParams();
  const linkedSubject = searchParams.get('subject') ?? '';

  const [keyword, setKeyword] = useState(linkedSubject);
  const [status, setStatus] = useState('全部状态');
  const [subjectType, setSubjectType] = useState('全部主体');
  const [risk, setRisk] = useState('全部风险');

  const filteredRecords = useMemo(() => {
    return GOVERNANCE_RECORDS.filter((item) => {
      const normalizedKeyword = keyword.trim();
      const matchedKeyword =
        normalizedKeyword.length === 0 || item.subjectName.includes(normalizedKeyword) || item.id.includes(normalizedKeyword);
      const matchedStatus = status === '全部状态' || item.status === status;
      const matchedType = subjectType === '全部主体' || item.subjectType === subjectType;
      const matchedRisk = risk === '全部风险' || item.riskLevel === risk;

      return matchedKeyword && matchedStatus && matchedType && matchedRisk;
    });
  }, [keyword, status, subjectType, risk]);

  return (
    <div className="grid gap-4">
      <WorkspacePageHeader
        actions={PAGE_ACTIONS}
        description="整合资源、询价、履约与争议链路，持续跟踪协作主体风险并执行平台治理策略。"
        title="平台治理中心"
      />

      <section className={workspaceStyles.metricGrid}>
        {GOVERNANCE_SUMMARY_CARDS.map((item) => (
          <MetricCard key={item.title} note={item.note} title={item.title} value={item.value} />
        ))}
      </section>

      <FilterBar
        keyword={keyword}
        keywordPlaceholder="搜索主体名称、主体编号"
        onKeywordChange={setKeyword}
        onRegionChange={setStatus}
        onStatusChange={setRisk}
        onTypeChange={setSubjectType}
        region={status}
        regionLabel="治理状态"
        regionOptions={GOVERNANCE_STATUS_OPTIONS}
        status={risk}
        statusLabel="风险等级"
        statusOptions={GOVERNANCE_RISK_OPTIONS}
        type={subjectType}
        typeLabel="主体类型"
        typeOptions={GOVERNANCE_SUBJECT_TYPE_OPTIONS}
      />

      <GovernanceTable items={filteredRecords} />

      <div className={workspaceStyles.gridTwo}>
        <DashboardSection description="重点关注跨链路风险聚集与治理升级节点，避免异常扩散。" title="风险提醒区">
          <ul className={workspaceStyles.list}>
            {GOVERNANCE_RISK_ALERTS.map((item) => (
              <li className={workspaceStyles.listItem} key={item}>
                {item}
              </li>
            ))}
          </ul>
        </DashboardSection>

        <DashboardSection description="平台治理遵循统一策略，确保治理动作可追溯、可复核。" title="平台策略与处理原则">
          <ul className={workspaceStyles.list}>
            {GOVERNANCE_PRINCIPLES.map((item) => (
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

export default function GovernancePage() {
  return (
    <Suspense fallback={<div className="text-sm text-neutral-600">页面加载中...</div>}>
      <GovernancePageContent />
    </Suspense>
  );
}

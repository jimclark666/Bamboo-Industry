import { StatusTag } from '@/components/ui/StatusTag';
import type { GovernanceRiskLevel } from '@/constants/workspace';

const toneMap: Record<GovernanceRiskLevel, 'success' | 'warning' | 'danger'> = {
  低: 'success',
  中: 'warning',
  高: 'danger'
};

type GovernanceRiskTagProps = {
  level: GovernanceRiskLevel;
};

export function GovernanceRiskTag({ level }: GovernanceRiskTagProps) {
  return <StatusTag label={`风险${level}`} size="sm" tone={toneMap[level]} />;
}

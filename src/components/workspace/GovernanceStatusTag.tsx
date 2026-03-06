import { StatusTag } from '@/components/ui/StatusTag';
import type { GovernanceStatus } from '@/constants/workspace';

const toneMap: Record<GovernanceStatus, 'success' | 'warning' | 'info' | 'danger' | 'neutral'> = {
  正常: 'success',
  关注中: 'info',
  待复核: 'warning',
  限制协作: 'danger',
  已恢复: 'neutral'
};

type GovernanceStatusTagProps = {
  status: GovernanceStatus;
};

export function GovernanceStatusTag({ status }: GovernanceStatusTagProps) {
  return <StatusTag label={status} size="sm" tone={toneMap[status]} />;
}

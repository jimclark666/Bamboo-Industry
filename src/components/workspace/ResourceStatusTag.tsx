import { StatusTag } from '@/components/ui/StatusTag';
import type { ResourceStatus } from '@/constants/workspace';

const toneMap: Record<ResourceStatus, 'warning' | 'success' | 'info' | 'neutral'> = {
  待审核: 'warning',
  可协同: 'success',
  协同中: 'info',
  已下架: 'neutral'
};

type ResourceStatusTagProps = {
  status: ResourceStatus;
};

export function ResourceStatusTag({ status }: ResourceStatusTagProps) {
  return <StatusTag label={status} size="sm" tone={toneMap[status]} />;
}

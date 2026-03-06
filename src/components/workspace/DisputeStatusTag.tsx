import { StatusTag } from '@/components/ui/StatusTag';
import type { DisputeStatus } from '@/constants/workspace';

const toneMap: Record<DisputeStatus, 'warning' | 'info' | 'neutral' | 'success'> = {
  待受理: 'warning',
  核实中: 'info',
  待补充材料: 'warning',
  处理中: 'info',
  已关闭: 'success'
};

type DisputeStatusTagProps = {
  status: DisputeStatus;
};

export function DisputeStatusTag({ status }: DisputeStatusTagProps) {
  return <StatusTag label={status} size="sm" tone={toneMap[status]} />;
}

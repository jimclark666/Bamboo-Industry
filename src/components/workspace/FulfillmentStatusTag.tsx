import { StatusTag } from '@/components/ui/StatusTag';
import type { FulfillmentStage } from '@/constants/workspace';

const toneMap: Record<FulfillmentStage, 'warning' | 'info' | 'success' | 'neutral' | 'danger'> = {
  待确认: 'warning',
  备货中: 'info',
  运输中: 'info',
  待验收: 'warning',
  已完成: 'success',
  异常处理中: 'danger'
};

type FulfillmentStatusTagProps = {
  stage: FulfillmentStage;
};

export function FulfillmentStatusTag({ stage }: FulfillmentStatusTagProps) {
  return <StatusTag label={stage} size="sm" tone={toneMap[stage]} />;
}

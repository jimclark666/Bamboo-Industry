import { StatusTag } from '@/components/ui/StatusTag';
import type { InquiryStatus } from '@/constants/workspace';

const toneMap: Record<InquiryStatus, 'warning' | 'info' | 'success' | 'neutral'> = {
  待响应: 'warning',
  沟通中: 'info',
  已报价: 'success',
  待确认: 'warning',
  已关闭: 'neutral'
};

type InquiryStatusTagProps = {
  status: InquiryStatus;
};

export function InquiryStatusTag({ status }: InquiryStatusTagProps) {
  return <StatusTag label={status} size="sm" tone={toneMap[status]} />;
}

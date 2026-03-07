import { StatusTag } from '@/components/ui/StatusTag';

type SystemTagProps = {
  label: string;
  tone?: 'neutral' | 'success' | 'warning' | 'danger' | 'info';
};

export function SystemTag({ label, tone = 'neutral' }: SystemTagProps) {
  return <StatusTag label={label} size="sm" tone={tone} />;
}

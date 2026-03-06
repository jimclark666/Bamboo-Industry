import { workspaceStyles } from './styles';

type MetricCardProps = {
  title: string;
  value: string;
  note: string;
};

export function MetricCard({ title, value, note }: MetricCardProps) {
  return (
    <article className={workspaceStyles.metricCard}>
      <p className={workspaceStyles.metricTitle}>{title}</p>
      <p className={workspaceStyles.metricValue}>{value}</p>
      <p className={workspaceStyles.metricNote}>{note}</p>
    </article>
  );
}

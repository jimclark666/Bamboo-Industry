import { workspaceStyles } from './styles';

type DashboardStatCardProps = {
  title: string;
  value: string;
  note: string;
};

export function DashboardStatCard({ title, value, note }: DashboardStatCardProps) {
  return (
    <article className={workspaceStyles.statCard}>
      <p className={workspaceStyles.statTitle}>{title}</p>
      <p className={workspaceStyles.statValue}>{value}</p>
      <p className={workspaceStyles.statNote}>{note}</p>
    </article>
  );
}

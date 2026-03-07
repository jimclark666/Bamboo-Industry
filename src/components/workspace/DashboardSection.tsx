import type { ReactNode } from 'react';
import { workspaceStyles } from './styles';

type DashboardSectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function DashboardSection({ title, description, children }: DashboardSectionProps) {
  return (
    <section className={workspaceStyles.sectionCard}>
      <h2 className={workspaceStyles.sectionTitle}>{title}</h2>
      {description && <p className={workspaceStyles.sectionDesc}>{description}</p>}
      <div className={workspaceStyles.sectionBody}>{children}</div>
    </section>
  );
}

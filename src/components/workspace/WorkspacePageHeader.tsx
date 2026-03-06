import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { SecondaryButton } from '@/components/ui/SecondaryButton';
import { workspaceStyles } from './styles';

type HeaderAction = {
  label: string;
  tone: 'primary' | 'secondary';
};

type WorkspacePageHeaderProps = {
  title: string;
  description: string;
  actions: readonly HeaderAction[];
};

export function WorkspacePageHeader({ title, description, actions }: WorkspacePageHeaderProps) {
  return (
    <section className={workspaceStyles.pageHeader}>
      <div>
        <h2 className={workspaceStyles.pageHeaderTitle}>{title}</h2>
        <p className={workspaceStyles.pageHeaderDesc}>{description}</p>
      </div>
      <div className={workspaceStyles.pageHeaderActions}>
        {actions.map((action) =>
          action.tone === 'primary' ? (
            <PrimaryButton href="#" key={action.label} size="sm">
              {action.label}
            </PrimaryButton>
          ) : (
            <SecondaryButton href="#" key={action.label} size="sm">
              {action.label}
            </SecondaryButton>
          )
        )}
      </div>
    </section>
  );
}

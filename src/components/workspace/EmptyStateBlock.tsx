import { workspaceStyles } from './styles';

type EmptyStateBlockProps = {
  title: string;
  description: string;
};

export function EmptyStateBlock({ title, description }: EmptyStateBlockProps) {
  return (
    <div className={workspaceStyles.empty}>
      <h3 className={workspaceStyles.emptyTitle}>{title}</h3>
      <p className={workspaceStyles.emptyDesc}>{description}</p>
    </div>
  );
}

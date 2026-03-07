import type { ReactNode } from 'react';
import { workspaceStyles } from './styles';

type DetailPanelProps = {
  open: boolean;
  title: string;
  description?: string;
  onClose: () => void;
  children: ReactNode;
};

export function DetailPanel({ open, title, description, onClose, children }: DetailPanelProps) {
  if (!open) {
    return null;
  }

  return (
    <div className={workspaceStyles.detailOverlay} role="dialog" aria-modal="true" aria-label={title}>
      <div className={workspaceStyles.detailPanel}>
        <div className={workspaceStyles.detailHeader}>
          <div>
            <h3 className={workspaceStyles.detailTitle}>{title}</h3>
            {description && <p className={workspaceStyles.detailDesc}>{description}</p>}
          </div>
          <button className={workspaceStyles.detailClose} onClick={onClose} type="button">
            关闭
          </button>
        </div>
        <div className={workspaceStyles.detailBody}>{children}</div>
      </div>
    </div>
  );
}

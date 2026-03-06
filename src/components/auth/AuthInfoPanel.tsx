import { SectionBlock } from '@/components/layout/SectionBlock';
import { StatusTag } from '@/components/ui/StatusTag';
import { authStyles } from './styles';

type AuthInfoPanelProps = {
  badge: string;
  title: string;
  subtitle: string;
  statement: string;
};

export function AuthInfoPanel({ badge, title, subtitle, statement }: AuthInfoPanelProps) {
  return (
    <SectionBlock className={authStyles.infoSection} headerClassName="mb-5" descriptionClassName="max-w-xl">
      <StatusTag label={badge} tone="info" size="sm" />
      <h1 className={authStyles.infoHeading}>{title}</h1>
      <p className={authStyles.infoSubtitle}>{subtitle}</p>

      <div className={authStyles.infoStatementCard}>
        <p className={authStyles.infoStatementText}>{statement}</p>
      </div>
    </SectionBlock>
  );
}

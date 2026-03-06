import { StatusTag } from '@/components/ui/StatusTag';
import { authStyles } from './styles';

type AuthTrustPanelProps = {
  title: string;
  items: readonly string[];
};

export function AuthTrustPanel({ title, items }: AuthTrustPanelProps) {
  return (
    <aside className={authStyles.trustCard}>
      <div className={authStyles.trustHeader}>
        <StatusTag label="协作机制" tone="success" size="sm" />
        <h2 className={authStyles.trustTitle}>{title}</h2>
      </div>
      <ul className={authStyles.trustList}>
        {items.map((item) => (
          <li className={authStyles.trustItem} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}

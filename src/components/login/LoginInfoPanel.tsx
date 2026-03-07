import { AuthInfoPanel } from '@/components/auth/AuthInfoPanel';
import { LOGIN_COPY } from '@/constants/login';

export function LoginInfoPanel() {
  return (
    <AuthInfoPanel
      badge={LOGIN_COPY.badge}
      statement={LOGIN_COPY.statement}
      subtitle={LOGIN_COPY.subtitle}
      title={LOGIN_COPY.title}
    />
  );
}

import { AuthInfoPanel } from '@/components/auth/AuthInfoPanel';
import { REGISTER_COPY } from '@/constants/register';

export function RegisterInfoPanel() {
  return (
    <AuthInfoPanel
      badge={REGISTER_COPY.badge}
      statement={REGISTER_COPY.intro}
      subtitle={REGISTER_COPY.subtitle}
      title={REGISTER_COPY.title}
    />
  );
}

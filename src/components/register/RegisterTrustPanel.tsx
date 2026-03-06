import { AuthTrustPanel } from '@/components/auth/AuthTrustPanel';
import { REGISTER_COPY } from '@/constants/register';

export function RegisterTrustPanel() {
  return <AuthTrustPanel items={REGISTER_COPY.trustItems} title={REGISTER_COPY.trustTitle} />;
}

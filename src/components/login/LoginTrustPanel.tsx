import { AuthTrustPanel } from '@/components/auth/AuthTrustPanel';
import { LOGIN_COPY } from '@/constants/login';

export function LoginTrustPanel() {
  return <AuthTrustPanel items={LOGIN_COPY.trustItems} title={LOGIN_COPY.trustTitle} />;
}

import { AuthPageLayout } from '@/components/auth/AuthPageLayout';
import { LoginFormCard } from '@/components/login/LoginFormCard';
import { LoginInfoPanel } from '@/components/login/LoginInfoPanel';
import { LoginTrustPanel } from '@/components/login/LoginTrustPanel';

export default function LoginPage() {
  return <AuthPageLayout left={<LoginInfoPanel />} right={<><LoginFormCard /><LoginTrustPanel /></>} />;
}

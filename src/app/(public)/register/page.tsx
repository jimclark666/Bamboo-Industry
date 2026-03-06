import { AuthPageLayout } from '@/components/auth/AuthPageLayout';
import { RegisterFormCard } from '@/components/register/RegisterFormCard';
import { RegisterInfoPanel } from '@/components/register/RegisterInfoPanel';
import { RegisterTrustPanel } from '@/components/register/RegisterTrustPanel';

export default function RegisterPage() {
  return <AuthPageLayout left={<RegisterInfoPanel />} right={<><RegisterFormCard /><RegisterTrustPanel /></>} />;
}

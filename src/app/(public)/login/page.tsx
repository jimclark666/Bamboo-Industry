import { PageContainer } from '@/components/layout/PageContainer';
import { LoginFormCard } from '@/components/login/LoginFormCard';
import { LoginInfoPanel } from '@/components/login/LoginInfoPanel';
import { LoginTrustPanel } from '@/components/login/LoginTrustPanel';

export default function LoginPage() {
  return (
    <PageContainer>
      <section className="py-10 md:py-12 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr] lg:items-start lg:gap-8">
          <LoginInfoPanel />

          <div className="grid gap-4">
            <LoginFormCard />
            <LoginTrustPanel />
          </div>
        </div>
      </section>
    </PageContainer>
  );
}

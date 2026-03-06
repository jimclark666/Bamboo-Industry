import { PageContainer } from '@/components/layout/PageContainer';
import { AIReservedSection } from '@/components/home/AIReservedSection';
import { HeroSection } from '@/components/home/HeroSection';
import { RoleEntrySection } from '@/components/home/RoleEntrySection';
import { TrustMechanismSection } from '@/components/home/TrustMechanismSection';
import { ValueSection } from '@/components/home/ValueSection';

export default function HomePage() {
  return (
    <PageContainer>
      <HeroSection />
      <ValueSection />
      <RoleEntrySection />
      <TrustMechanismSection />
      <AIReservedSection />
    </PageContainer>
  );
}

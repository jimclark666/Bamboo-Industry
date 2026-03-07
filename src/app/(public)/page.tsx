import { PageContainer } from '@/components/layout/PageContainer';
import { HeroSection } from '@/components/home/HeroSection';
import { RoleEntrySection } from '@/components/home/RoleEntrySection';
import { RulesEntrySection } from '@/components/home/RulesEntrySection';
import { SpeciesEntrySection } from '@/components/home/SpeciesEntrySection';
import { ValueSection } from '@/components/home/ValueSection';

export default function HomePage() {
  return (
    <PageContainer>
      <HeroSection />
      <ValueSection />
      <RoleEntrySection />
      <SpeciesEntrySection />
      <RulesEntrySection />
    </PageContainer>
  );
}

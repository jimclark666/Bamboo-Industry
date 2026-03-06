import { PageContainer } from '@/components/layout/PageContainer';
import { CollaborationFlowSection } from '@/components/rules/CollaborationFlowSection';
import { PlatformPrinciplesSection } from '@/components/rules/PlatformPrinciplesSection';
import { RuleCategoryNavSection } from '@/components/rules/RuleCategoryNavSection';
import { RuleContentSection } from '@/components/rules/RuleContentSection';
import { RulesHeroSection } from '@/components/rules/RulesHeroSection';

export default function RulesPage() {
  return (
    <PageContainer>
      <RulesHeroSection />
      <RuleCategoryNavSection />
      <RuleContentSection />
      <CollaborationFlowSection />
      <PlatformPrinciplesSection />
    </PageContainer>
  );
}

import { PageContainer } from '@/components/layout/PageContainer';
import { SectionBlock } from '@/components/layout/SectionBlock';

export default function RegisterPageSkeleton() {
  return (
    <PageContainer>
      <SectionBlock description="当前为注册页框架阶段，注册表单将在后续步骤接入。" title="注册">
        <div className="rounded-lg border border-neutral-300 bg-white p-6 text-neutral-700 shadow-sm">
          注册页基础骨架已就绪。
        </div>
      </SectionBlock>
    </PageContainer>
  );
}

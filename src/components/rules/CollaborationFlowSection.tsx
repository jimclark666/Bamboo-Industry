import { SectionBlock } from '@/components/layout/SectionBlock';
import { StatusTag } from '@/components/ui/StatusTag';
import { COLLAB_STEPS } from '@/constants/rules';

export function CollaborationFlowSection() {
  return (
    <SectionBlock
      title="协作流程说明"
      description="从信息发布到异常处置的关键流程保持状态同步与责任边界清晰。"
      className="py-10 md:py-12 lg:py-14"
      descriptionClassName="max-w-3xl"
    >
      <div className="rounded-lg border border-neutral-300 bg-white p-5 shadow-sm md:p-6">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {COLLAB_STEPS.map((step, index) => (
            <article className="rounded-md border border-neutral-300 bg-neutral-100 p-4" key={step.title}>
              <div className="mb-3">
                <StatusTag label={`步骤 ${index + 1}`} size="sm" tone="info" />
              </div>
              <h3 className="text-sm font-semibold text-neutral-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-700">{step.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionBlock>
  );
}

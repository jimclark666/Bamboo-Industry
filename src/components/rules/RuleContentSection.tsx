import { SectionBlock } from '@/components/layout/SectionBlock';
import { StatusTag } from '@/components/ui/StatusTag';
import { RULE_SECTIONS } from '@/constants/rules';

export function RuleContentSection() {
  return (
    <SectionBlock
      title="规则内容"
      description="每类规则均围绕协作场景定义关键要求与处理方式，确保执行标准一致。"
      className="py-10 md:py-12 lg:py-14"
      descriptionClassName="max-w-3xl"
    >
      <div className="grid gap-5">
        {RULE_SECTIONS.map((section, index) => (
          <article className="rounded-lg border border-neutral-300 bg-white p-5 shadow-sm md:p-6" id={section.id} key={section.id}>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <StatusTag label={`规则 ${index + 1}`} size="sm" tone="neutral" />
              <h3 className="text-lg font-semibold text-neutral-900">{section.title}</h3>
            </div>
            <p className="mb-4 text-sm leading-6 text-neutral-700">{section.summary}</p>
            <ul className="grid list-disc gap-2 pl-5 text-sm leading-6 text-neutral-700">
              {section.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionBlock>
  );
}

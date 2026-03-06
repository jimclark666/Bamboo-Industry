import { SectionBlock } from '@/components/layout/SectionBlock';
import { TextButton } from '@/components/ui/TextButton';
import { RULE_CATEGORIES } from '@/constants/rules';

export function RuleCategoryNavSection() {
  return (
    <SectionBlock
      title="规则分类"
      description="按协作阶段组织规则内容，便于快速定位关键机制。"
      className="py-10 md:py-12"
      descriptionClassName="max-w-3xl"
    >
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {RULE_CATEGORIES.map((item, index) => (
          <a
            className="rounded-lg border border-neutral-300 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            href={`#${item.id}`}
            key={item.id}
          >
            <p className="text-xs text-neutral-500">分类 {index + 1}</p>
            <p className="mt-2 text-sm font-semibold text-neutral-900">{item.label}</p>
            <TextButton className="mt-3" href={`#${item.id}`}>
              查看该分类
            </TextButton>
          </a>
        ))}
      </div>
    </SectionBlock>
  );
}

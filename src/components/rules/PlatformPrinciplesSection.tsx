import { SectionBlock } from '@/components/layout/SectionBlock';
import { StatusTag } from '@/components/ui/StatusTag';
import { PLATFORM_PRINCIPLES } from '@/constants/rules';

export function PlatformPrinciplesSection() {
  return (
    <SectionBlock
      title="平台协作原则"
      description="BambooLink 以规则化协作为基础，持续保障多方协作过程的清晰性与可信度。"
      className="py-10 md:py-12 lg:py-16"
      descriptionClassName="max-w-3xl"
    >
      <div className="rounded-lg border border-neutral-300 bg-white p-5 shadow-sm md:p-6">
        <div className="mb-4">
          <StatusTag label="原则总结" tone="success" />
        </div>
        <ul className="grid gap-3">
          {PLATFORM_PRINCIPLES.map((item) => (
            <li className="rounded-md border border-neutral-300 bg-neutral-100 px-4 py-3 text-sm leading-6 text-neutral-700" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </SectionBlock>
  );
}

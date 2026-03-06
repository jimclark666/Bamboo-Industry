import { SectionBlock } from '@/components/layout/SectionBlock';
import { StatusTag } from '@/components/ui/StatusTag';
import { RULES_HERO } from '@/constants/rules';

export function RulesHeroSection() {
  return (
    <SectionBlock className="pt-12 md:pt-16 lg:pt-18">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <div>
          <StatusTag label="规则中心" tone="info" size="sm" />
          <h1 className="mt-4 text-[32px] leading-[42px] font-semibold text-neutral-900 md:text-[38px] md:leading-[48px]">
            {RULES_HERO.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-neutral-700">{RULES_HERO.description}</p>
        </div>

        <aside className="rounded-lg border border-neutral-300 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-neutral-900">规则作用</p>
          <ul className="mt-4 grid gap-3">
            {RULES_HERO.highlights.map((item) => (
              <li className="rounded-md border border-neutral-300 bg-neutral-100 px-3 py-2 text-sm text-neutral-700" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </SectionBlock>
  );
}

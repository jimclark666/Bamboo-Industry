import { SectionBlock } from '@/components/layout/SectionBlock';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { StatusTag } from '@/components/ui/StatusTag';
import { HOME_RULES_ENTRY } from '@/constants/home';
import { homeStyles } from './styles';

export function RulesEntrySection() {
  return (
    <SectionBlock
      id="rules-entry"
      title={HOME_RULES_ENTRY.title}
      description={HOME_RULES_ENTRY.description}
      className={homeStyles.section}
      descriptionClassName={homeStyles.sectionDescription}
    >
      <article className={`${homeStyles.cardStrong} ${homeStyles.cardBody}`}>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-base text-neutral-700">规则用于统一协作口径，降低跨主体协作偏差。</p>
          <StatusTag label="规则引导" tone="success" />
        </div>
        <ul className="grid gap-2 md:grid-cols-3">
          {HOME_RULES_ENTRY.highlights.map((item) => (
            <li className="rounded-md border border-neutral-300 bg-neutral-100 px-4 py-3 text-base text-neutral-900" key={item}>
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-5">
          <PrimaryButton href={HOME_RULES_ENTRY.action.href}>{HOME_RULES_ENTRY.action.label}</PrimaryButton>
        </div>
      </article>
    </SectionBlock>
  );
}

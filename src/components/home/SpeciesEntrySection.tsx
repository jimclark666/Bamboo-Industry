import { SectionBlock } from '@/components/layout/SectionBlock';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { StatusTag } from '@/components/ui/StatusTag';
import { HOME_SPECIES_ENTRY } from '@/constants/home';
import { homeStyles } from './styles';

export function SpeciesEntrySection() {
  return (
    <SectionBlock
      id="species-entry"
      title={HOME_SPECIES_ENTRY.title}
      description={HOME_SPECIES_ENTRY.description}
      className={homeStyles.section}
      descriptionClassName={homeStyles.sectionDescription}
    >
      <article className={`${homeStyles.cardStrong} ${homeStyles.cardBody}`}>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-base text-neutral-700">公开浏览入口，便于在注册与协同前完成资源预研。</p>
          <StatusTag label="公开访问" tone="info" />
        </div>
        <ul className="grid gap-2 md:grid-cols-3">
          {HOME_SPECIES_ENTRY.highlights.map((item) => (
            <li className="rounded-md border border-neutral-300 bg-neutral-100 px-4 py-3 text-base text-neutral-900" key={item}>
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-5">
          <PrimaryButton href={HOME_SPECIES_ENTRY.action.href}>{HOME_SPECIES_ENTRY.action.label}</PrimaryButton>
        </div>
      </article>
    </SectionBlock>
  );
}

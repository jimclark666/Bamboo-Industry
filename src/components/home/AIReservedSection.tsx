import { SectionBlock } from '@/components/layout/SectionBlock';
import { StatusTag } from '@/components/ui/StatusTag';
import { HOME_AI_RESERVED } from '@/constants/home';
import { homeStyles } from './styles';

export function AIReservedSection() {
  return (
    <SectionBlock title={HOME_AI_RESERVED.title} description={HOME_AI_RESERVED.description} className={homeStyles.section}>
      <div className={`${homeStyles.card} ${homeStyles.cardBody}`}>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <StatusTag label="能力路线" tone="success" />
          <p className="text-sm text-neutral-700">以可解释推荐与人工复核机制提升协作效率</p>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {HOME_AI_RESERVED.points.map((point, index) => (
            <div className="rounded-md border border-neutral-300 bg-neutral-100 p-4" key={point}>
              <p className="text-xs text-neutral-500">方向 {index + 1}</p>
              <p className="mt-2 text-sm leading-6 text-neutral-800">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionBlock>
  );
}

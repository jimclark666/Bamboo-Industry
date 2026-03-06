import { SectionBlock } from '@/components/layout/SectionBlock';
import { StatusTag } from '@/components/ui/StatusTag';
import { HOME_TRUST_ITEMS } from '@/constants/home';
import { homeStyles } from './styles';

export function TrustMechanismSection() {
  return (
    <SectionBlock
      id="workflow"
      title="可信机制"
      description="通过版本留存、流程留痕、异常预警与争议处理，形成可追溯、可复核的协作机制。"
      className={homeStyles.section}
      descriptionClassName={homeStyles.sectionDescription}
    >
      <div className={`${homeStyles.cardStrong} ${homeStyles.cardBody}`}>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-neutral-700">核心机制覆盖交易协作关键节点</p>
          <StatusTag label="规则化协作" tone="info" />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {HOME_TRUST_ITEMS.map((item, index) => (
            <article className="rounded-md border border-neutral-300 bg-neutral-100 p-4" key={item.title}>
              <div className="mb-3 flex items-center gap-2">
                <StatusTag label={`0${index + 1}`} size="sm" tone="neutral" />
                <h3 className="text-base font-semibold text-neutral-900">{item.title}</h3>
              </div>
              <p className="text-sm leading-6 text-neutral-700">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionBlock>
  );
}

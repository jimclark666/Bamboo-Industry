import { SectionBlock } from '@/components/layout/SectionBlock';
import { HOME_VALUE_ITEMS } from '@/constants/home';
import { homeStyles } from './styles';

export function ValueSection() {
  return (
    <SectionBlock
      id="value"
      title="平台价值"
      description="围绕竹产业交易协作关键环节，提升信息可用性、协作效率与履约确定性。"
      className={homeStyles.section}
      descriptionClassName={homeStyles.sectionDescription}
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {HOME_VALUE_ITEMS.map((item, index) => (
          <article className={`${homeStyles.card} ${homeStyles.cardBody}`} key={item.title}>
            <div className="mb-4 flex items-center justify-between">
              <span className={homeStyles.iconBadge}>0{index + 1}</span>
            </div>
            <h3 className="text-base font-semibold text-neutral-900">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-neutral-700">{item.description}</p>
          </article>
        ))}
      </div>
    </SectionBlock>
  );
}

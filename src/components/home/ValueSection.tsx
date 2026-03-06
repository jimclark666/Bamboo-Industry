import { SectionBlock } from '@/components/layout/SectionBlock';
import { HOME_VALUE_ITEMS } from '@/constants/home';
import { homeStyles } from './styles';

export function ValueSection() {
  return (
    <SectionBlock
      id="value"
      title="平台价值"
      description="围绕竹产业交易协作关键环节，提升信息可用性、协作效率与履约确定性。"
      className={homeStyles.sectionTight}
      descriptionClassName={homeStyles.sectionDescription}
      headerClassName="mb-5 md:mb-6"
    >
      <div className={homeStyles.sectionDivider}>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {HOME_VALUE_ITEMS.map((item, index) => (
            <article className={`${homeStyles.cardStrong} ${homeStyles.cardBody} flex h-full flex-col`} key={item.title}>
              <div className="mb-4 flex items-center justify-between">
                <span className={homeStyles.iconBadge}>0{index + 1}</span>
                <span className="text-[11px] font-medium tracking-wide text-neutral-500">能力模块</span>
              </div>
              <h3 className={homeStyles.valueTitle}>{item.title}</h3>
              <p className={`${homeStyles.valueDesc} flex-1`}>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionBlock>
  );
}

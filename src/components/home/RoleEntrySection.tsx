import { SectionBlock } from '@/components/layout/SectionBlock';
import { SecondaryButton } from '@/components/ui/SecondaryButton';
import { StatusTag } from '@/components/ui/StatusTag';
import { HOME_ROLE_ITEMS } from '@/constants/home';
import { homeStyles } from './styles';

const roleToneMap = {
  竹农: 'success',
  竹企: 'info',
  管理员: 'warning'
} as const;

export function RoleEntrySection() {
  return (
    <SectionBlock
      id="roles"
      title="角色入口"
      description="通过角色化入口明确协作目标与责任边界，保障多方协作过程高效一致。"
      className={homeStyles.section}
      descriptionClassName={homeStyles.sectionDescription}
    >
      <div className="grid gap-4 md:grid-cols-3">
        {HOME_ROLE_ITEMS.map((item) => (
          <article className={`${homeStyles.cardStrong} ${homeStyles.cardBody} flex h-full flex-col`} key={item.role}>
            <div className="mb-3">
              <StatusTag label={item.role} tone={roleToneMap[item.role]} size="sm" />
            </div>
            <h3 className="text-base font-semibold text-neutral-900">{item.role}目标</h3>
            <p className="mt-3 flex-1 text-sm leading-6 text-neutral-700">{item.summary}</p>
            <div className="mt-5">
              <SecondaryButton href={item.action.href}>{item.action.label}</SecondaryButton>
            </div>
          </article>
        ))}
      </div>
    </SectionBlock>
  );
}

import { SectionBlock } from '@/components/layout/SectionBlock';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { SecondaryButton } from '@/components/ui/SecondaryButton';
import { StatusTag } from '@/components/ui/StatusTag';
import { HOME_HERO } from '@/constants/home';
import { homeStyles } from './styles';

export function HeroSection() {
  return (
    <SectionBlock className="pt-14 md:pt-18 lg:pt-20">
      <div className="grid items-start gap-8 xl:grid-cols-[1.1fr_0.9fr] xl:gap-10">
        <div>
          <StatusTag label="产业协作平台" tone="info" size="sm" />
          <h1 className="mt-4 text-[32px] leading-[42px] font-semibold text-neutral-900 md:text-[40px] md:leading-[50px] lg:text-[44px] lg:leading-[56px]">
            {HOME_HERO.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-[27px] text-neutral-700 md:text-[17px]">{HOME_HERO.description}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <PrimaryButton href={HOME_HERO.primaryAction.href} size="lg">
              {HOME_HERO.primaryAction.label}
            </PrimaryButton>
            <SecondaryButton href={HOME_HERO.secondaryAction.href} size="lg">
              {HOME_HERO.secondaryAction.label}
            </SecondaryButton>
          </div>
        </div>

        <div className={`${homeStyles.card} ${homeStyles.cardBody} grid gap-4`}>
          <div className={`${homeStyles.subtlePanel} p-4`}>
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs text-neutral-500">协作运行概览</p>
              <StatusTag label="稳定" tone="success" size="sm" />
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div>
                <p className="text-xs text-neutral-500">活跃协作任务</p>
                <p className="mt-1 text-2xl font-semibold text-neutral-900">128</p>
              </div>
              <div>
                <p className="text-xs text-neutral-500">待处理询价</p>
                <p className="mt-1 text-2xl font-semibold text-neutral-900">24</p>
              </div>
              <div>
                <p className="text-xs text-neutral-500">履约跟踪中</p>
                <p className="mt-1 text-2xl font-semibold text-neutral-900">31</p>
              </div>
            </div>
          </div>

          <div className="grid gap-3">
            <div className={`${homeStyles.subtlePanel} p-4`}>
              <p className="text-xs text-neutral-500">协作节点摘要</p>
              <div className="mt-3 grid gap-2 text-sm text-neutral-700">
                <p>资源信息确认 → 询价条款确认</p>
                <p>订单状态更新 → 履约凭证留存</p>
                <p>异常识别处理 → 争议规则闭环</p>
              </div>
            </div>
            <div className="rounded-md border border-brand-100 bg-brand-100 p-4">
              <p className="text-xs text-neutral-700">协作原则</p>
              <p className="mt-1 text-sm leading-6 text-neutral-900">以规则透明、节点留痕和责任明确为基础，保障跨主体交易协作稳定推进。</p>
            </div>
          </div>
        </div>
      </div>
    </SectionBlock>
  );
}

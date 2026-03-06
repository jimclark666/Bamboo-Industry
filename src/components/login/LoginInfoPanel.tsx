import { SectionBlock } from '@/components/layout/SectionBlock';
import { StatusTag } from '@/components/ui/StatusTag';
import { LOGIN_COPY } from '@/constants/login';

export function LoginInfoPanel() {
  return (
    <SectionBlock className="py-8 lg:py-0" headerClassName="mb-5" descriptionClassName="max-w-xl">
      <StatusTag label={LOGIN_COPY.badge} tone="info" size="sm" />
      <h1 className="mt-4 text-[30px] leading-[40px] font-semibold text-neutral-900 md:text-[36px] md:leading-[46px]">
        {LOGIN_COPY.title}
      </h1>
      <p className="mt-4 text-base leading-7 text-neutral-700">{LOGIN_COPY.subtitle}</p>

      <div className="mt-6 rounded-lg border border-neutral-300 bg-white p-5 shadow-sm">
        <p className="text-sm leading-6 text-neutral-700">{LOGIN_COPY.statement}</p>
      </div>
    </SectionBlock>
  );
}

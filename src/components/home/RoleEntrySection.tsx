'use client';

import { useState } from 'react';
import { SectionBlock } from '@/components/layout/SectionBlock';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
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
  const [activeRole, setActiveRole] = useState<(typeof HOME_ROLE_ITEMS)[number]['role']>(HOME_ROLE_ITEMS[0].role);
  const activeItem = HOME_ROLE_ITEMS.find((item) => item.role === activeRole) ?? HOME_ROLE_ITEMS[0];

  return (
    <SectionBlock
      id="roles"
      title="角色入口"
      description="按角色查看目标、流程、职责与约束机制，并直接进入下一步操作。"
      className={homeStyles.section}
      descriptionClassName={homeStyles.sectionDescription}
    >
      <div className="grid gap-4 md:grid-cols-3">
        {HOME_ROLE_ITEMS.map((item) => {
          const active = item.role === activeRole;
          return (
            <button
              className={`${homeStyles.cardStrong} ${homeStyles.cardBody} text-left transition-all ${active ? 'border-brand-600 bg-brand-100/55 shadow-lg' : ''}`}
              key={item.role}
              onClick={() => setActiveRole(item.role)}
              type="button"
            >
              <div className="mb-3 flex items-center justify-between gap-2">
                <StatusTag label={item.role} tone={roleToneMap[item.role]} size="sm" />
                {active ? <span className="text-sm font-medium text-brand-600">当前查看</span> : null}
              </div>
              <h3 className="text-base font-semibold text-neutral-900">{item.role}目标</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-700">{item.summary}</p>
            </button>
          );
        })}
      </div>

      <article className={`${homeStyles.cardStrong} ${homeStyles.cardBody} mt-5 border-brand-100 bg-white`}>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-neutral-900">{activeItem.role}协作详情</h3>
          <StatusTag label="角色流程与可信机制" tone={roleToneMap[activeItem.role]} />
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-md border border-neutral-300 bg-neutral-100 p-4">
            <p className="text-sm font-medium text-neutral-700">角色目标</p>
            <p className="mt-2 text-base leading-7 text-neutral-900">{activeItem.goal}</p>
          </div>

          <div className="rounded-md border border-brand-100 bg-brand-100/55 p-4">
            <p className="text-sm font-medium text-neutral-700">可信机制说明</p>
            <p className="mt-2 text-base leading-7 text-neutral-900">{activeItem.trustMechanism}</p>
          </div>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <div className="rounded-md border border-neutral-300 bg-white p-4">
            <p className="text-sm font-medium text-neutral-700">业务流程</p>
            <ol className="mt-3 grid gap-2">
              {activeItem.process.map((step, index) => (
                <li className="flex items-start gap-3" key={step}>
                  <span className="mt-0.5 inline-flex h-6 min-w-6 items-center justify-center rounded-pill border border-brand-100 bg-brand-100/65 px-2 text-sm font-medium text-brand-600">
                    {index + 1}
                  </span>
                  <span className="text-base leading-7 text-neutral-900">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-md border border-neutral-300 bg-white p-4">
            <p className="text-sm font-medium text-neutral-700">职责说明</p>
            <ul className="mt-3 grid gap-2">
              {activeItem.responsibilities.map((item) => (
                <li className="text-base leading-7 text-neutral-900" key={item}>
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <PrimaryButton href={activeItem.primaryAction.href}>{activeItem.primaryAction.label}</PrimaryButton>
          {activeItem.secondaryAction ? <SecondaryButton href={activeItem.secondaryAction.href}>{activeItem.secondaryAction.label}</SecondaryButton> : null}
        </div>
      </article>
    </SectionBlock>
  );
}

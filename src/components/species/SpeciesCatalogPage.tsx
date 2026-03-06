'use client';

import { useMemo, useState } from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionBlock } from '@/components/layout/SectionBlock';
import { StatusTag } from '@/components/ui/StatusTag';
import {
  SPECIES_NOTES,
  SPECIES_PAGE_HEADER,
  SPECIES_RECORDS,
  SPECIES_REGION_OPTIONS,
  SPECIES_TYPE_OPTIONS,
  SPECIES_USAGE_OPTIONS
} from '@/constants/species';

export function SpeciesCatalogPage() {
  const [keyword, setKeyword] = useState('');
  const [region, setRegion] = useState('全部产区');
  const [usage, setUsage] = useState('全部用途');
  const [speciesType, setSpeciesType] = useState('全部类型');

  const filteredRecords = useMemo(() => {
    return SPECIES_RECORDS.filter((item) => {
      const normalizedKeyword = keyword.trim();
      const matchKeyword =
        normalizedKeyword.length === 0 ||
        item.name.includes(normalizedKeyword) ||
        item.scenario.includes(normalizedKeyword) ||
        item.featureSummary.includes(normalizedKeyword);
      const matchRegion = region === '全部产区' || item.mainRegions.includes(region);
      const matchUsage = usage === '全部用途' || item.usage === usage;
      const matchType = speciesType === '全部类型' || item.type === speciesType;
      return matchKeyword && matchRegion && matchUsage && matchType;
    });
  }, [keyword, region, usage, speciesType]);

  return (
    <PageContainer>
      <SectionBlock
        description={SPECIES_PAGE_HEADER.description}
        title={SPECIES_PAGE_HEADER.title}
        className="pt-14 md:pt-16 lg:pt-20"
      >
        <section className="mb-5 rounded-lg border border-neutral-300 bg-white p-4 shadow-sm md:p-5">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            <label className="grid gap-2">
              <span className="text-sm font-medium text-neutral-700">关键词搜索</span>
              <input
                className="h-10 rounded-md border border-neutral-300 bg-white px-3 text-base text-neutral-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                placeholder="搜索竹种名称、适用场景"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-medium text-neutral-700">产区筛选</span>
              <select
                className="h-10 rounded-md border border-neutral-300 bg-white px-3 text-base text-neutral-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                value={region}
                onChange={(event) => setRegion(event.target.value)}
              >
                {SPECIES_REGION_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-medium text-neutral-700">用途筛选</span>
              <select
                className="h-10 rounded-md border border-neutral-300 bg-white px-3 text-base text-neutral-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                value={usage}
                onChange={(event) => setUsage(event.target.value)}
              >
                {SPECIES_USAGE_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-medium text-neutral-700">类型筛选</span>
              <select
                className="h-10 rounded-md border border-neutral-300 bg-white px-3 text-base text-neutral-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                value={speciesType}
                onChange={(event) => setSpeciesType(event.target.value)}
              >
                {SPECIES_TYPE_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </section>

        <section className="grid gap-4">
          {filteredRecords.length === 0 ? (
            <div className="rounded-lg border border-dashed border-neutral-300 bg-white p-8 text-center text-base text-neutral-700">
              当前筛选条件下暂无相关竹种信息，请调整筛选条件后查看。
            </div>
          ) : (
            filteredRecords.map((item) => (
              <article className="rounded-lg border border-neutral-300 bg-white p-5 shadow-sm md:p-6" key={item.id}>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900">{item.name}</h3>
                    <p className="mt-2 text-base text-neutral-700">主要产区：{item.mainRegions.join('、')}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <StatusTag label={item.type} tone="info" />
                    <StatusTag label={item.usage} tone="neutral" />
                    <StatusTag label={item.supportCollab ? '支持进一步对接' : '暂不支持协同'} tone={item.supportCollab ? 'success' : 'warning'} />
                  </div>
                </div>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <div className="rounded-md border border-neutral-300 bg-neutral-100 px-4 py-3">
                    <p className="text-sm font-medium text-neutral-700">适用场景</p>
                    <p className="mt-1 text-base leading-7 text-neutral-900">{item.scenario}</p>
                  </div>
                  <div className="rounded-md border border-neutral-300 bg-neutral-100 px-4 py-3">
                    <p className="text-sm font-medium text-neutral-700">规格/特征摘要</p>
                    <p className="mt-1 text-base leading-7 text-neutral-900">{item.featureSummary}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-neutral-600">最近更新时间：{item.updatedAt}</p>
              </article>
            ))
          )}
        </section>

        <section className="mt-6 rounded-lg border border-brand-100 bg-brand-100 p-5 shadow-sm">
          <h4 className="text-base font-semibold text-neutral-900">公开浏览说明</h4>
          <ul className="mt-3 grid gap-2">
            {SPECIES_NOTES.map((note) => (
              <li className="text-base text-neutral-700" key={note}>
                {note}
              </li>
            ))}
          </ul>
        </section>
      </SectionBlock>
    </PageContainer>
  );
}

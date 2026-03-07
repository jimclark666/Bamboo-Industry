export const homeStyles = {
  section: 'py-12 md:py-14 lg:py-16',
  sectionTight: 'pt-10 md:pt-12 lg:pt-14 pb-12 md:pb-14 lg:pb-16',
  sectionDescription: 'max-w-3xl text-base leading-7',
  sectionDivider: 'border-t border-neutral-300/80 pt-7 md:pt-8',
  card: 'rounded-lg border border-neutral-300 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md',
  cardStrong:
    'rounded-lg border border-neutral-300 bg-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg',
  cardBody: 'p-5 md:p-6',
  subtlePanel: 'rounded-md border border-neutral-300 bg-neutral-100',
  metricPanel: 'rounded-md border border-neutral-300 bg-gradient-to-b from-white to-[#fbfae1]/70',
  iconBadge:
    'inline-flex h-9 w-9 items-center justify-center rounded-md border border-brand-100 bg-brand-100/55 text-sm font-semibold text-brand-600',
  valueTitle: 'text-[17px] font-semibold text-neutral-900',
  valueDesc: 'mt-3 text-base leading-7 text-neutral-700'
} as const;

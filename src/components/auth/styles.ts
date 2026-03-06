export const authStyles = {
  pageSection: 'py-10 md:py-14 lg:py-16',
  pageGrid: 'grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-10',

  infoSection: 'py-8 lg:py-0',
  infoHeading: 'mt-4 text-[30px] leading-[40px] font-semibold text-neutral-900 md:text-[36px] md:leading-[46px]',
  infoSubtitle: 'mt-4 max-w-xl text-base leading-7 text-neutral-700',
  infoStatementCard: 'mt-6 rounded-lg border border-neutral-300 bg-white p-5 shadow-sm',
  infoStatementText: 'text-sm leading-6 text-neutral-700',

  panelCard: 'rounded-lg border border-neutral-300 bg-white p-5 shadow-sm md:p-6',
  formGrid: 'grid gap-4',
  formLabel: 'mb-2 block text-sm font-medium text-neutral-900',
  field:
    'h-11 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm text-neutral-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20',
  helperRow: 'flex flex-wrap items-center justify-between gap-2',
  helperText: 'text-sm text-neutral-700',
  splitLine: 'mt-5 border-t border-neutral-300 pt-4',

  trustCard: 'rounded-lg border border-neutral-300 bg-white p-5 shadow-sm md:p-6',
  trustHeader: 'mb-4 flex items-center gap-2',
  trustTitle: 'text-sm font-semibold text-neutral-900',
  trustList: 'grid gap-3',
  trustItem: 'rounded-md border border-neutral-300 bg-neutral-100 px-4 py-3 text-sm leading-6 text-neutral-700',

  roleGrid: 'grid gap-3 md:grid-cols-3',
  roleCard:
    'cursor-pointer rounded-md border border-neutral-300 bg-neutral-100 p-3 transition-colors hover:border-brand-500 hover:bg-brand-100/60',
  roleTitle: 'text-sm font-semibold text-neutral-900',
  roleDesc: 'mt-1 text-xs leading-5 text-neutral-700'
} as const;

export const workspaceStyles = {
  shell: 'min-h-screen bg-neutral-100 text-neutral-900',
  body: 'grid min-h-[calc(100vh-72px)] grid-cols-1 lg:grid-cols-[248px_1fr]',
  sidebar: 'border-r border-neutral-300 bg-white px-4 py-5',
  sidebarTitle: 'mb-3 text-xs font-semibold uppercase tracking-wide text-neutral-500',
  navSection: 'mt-4',
  navSectionTitle: 'mb-2 px-2 text-[11px] font-semibold uppercase tracking-wide text-neutral-500',
  navList: 'grid gap-2',
  navLink: 'flex items-center rounded-md border px-3 py-2 text-sm font-medium transition-colors',
  navLinkActive: 'border-brand-200 bg-brand-100 text-brand-700',
  navLinkIdle: 'border-transparent text-neutral-700 hover:border-neutral-300 hover:bg-neutral-100 hover:text-neutral-900',

  main: 'px-4 py-5 sm:px-6 lg:px-8 lg:py-6',
  topbar: 'mb-6 rounded-lg border border-neutral-300 bg-white px-4 py-3 shadow-sm sm:px-5',
  topbarRow: 'flex flex-wrap items-center justify-between gap-3',
  topbarTitle: 'text-[20px] font-semibold text-neutral-900',
  topbarMeta: 'mt-1 text-sm text-neutral-600',

  sectionCard: 'rounded-lg border border-neutral-300 bg-white p-5 shadow-sm md:p-6',
  sectionTitle: 'text-base font-semibold text-neutral-900',
  sectionDesc: 'mt-1 text-sm text-neutral-700',
  sectionBody: 'mt-4',

  statGrid: 'grid gap-4 sm:grid-cols-2 xl:grid-cols-4',
  statCard: 'rounded-md border border-neutral-300 bg-neutral-100 p-4',
  statTitle: 'text-xs text-neutral-500',
  statValue: 'mt-2 text-[28px] leading-[34px] font-semibold text-neutral-900',
  statNote: 'mt-1 text-xs text-neutral-600',

  list: 'grid gap-3',
  listItem: 'rounded-md border border-neutral-300 bg-neutral-100 px-4 py-3 text-sm leading-6 text-neutral-700',

  gridTwo: 'grid gap-4 xl:grid-cols-2',
  empty: 'rounded-lg border border-dashed border-neutral-300 bg-white p-8 text-center',
  emptyTitle: 'text-base font-semibold text-neutral-900',
  emptyDesc: 'mt-2 text-sm text-neutral-700',

  pageHeader: 'mb-5 rounded-lg border border-neutral-300 bg-white px-4 py-4 shadow-sm sm:px-5',
  pageHeaderTitle: 'text-lg font-semibold text-neutral-900',
  pageHeaderDesc: 'mt-1 text-sm text-neutral-700',
  pageHeaderActions: 'mt-4 flex flex-wrap items-center gap-2 sm:mt-3',

  filterCard: 'mb-5 rounded-lg border border-neutral-300 bg-white p-4 shadow-sm sm:p-5',
  filterGrid: 'grid gap-3 sm:grid-cols-2 xl:grid-cols-4',
  filterField: 'grid gap-1.5',
  filterLabel: 'text-xs font-medium text-neutral-600',
  filterInput:
    'h-10 rounded-md border border-neutral-300 bg-white px-3 text-sm text-neutral-900 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100',
  filterSelect:
    'h-10 rounded-md border border-neutral-300 bg-white px-3 text-sm text-neutral-900 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100',

  metricGrid: 'grid gap-4 sm:grid-cols-2 xl:grid-cols-4',
  metricCard: 'rounded-lg border border-neutral-300 bg-white p-4 shadow-sm',
  metricTitle: 'text-xs text-neutral-500',
  metricValue: 'mt-2 text-2xl font-semibold text-neutral-900',
  metricNote: 'mt-1 text-xs text-neutral-600',

  tableCard: 'rounded-lg border border-neutral-300 bg-white shadow-sm',
  tableWrap: 'overflow-x-auto',
  table:
    'min-w-[980px] w-full border-collapse text-sm [&_th]:whitespace-nowrap [&_th]:border-b [&_th]:border-neutral-300 [&_th]:bg-neutral-100 [&_th]:px-4 [&_th]:py-3 [&_th]:text-left [&_th]:text-xs [&_th]:font-semibold [&_th]:text-neutral-600 [&_td]:border-b [&_td]:border-neutral-200 [&_td]:px-4 [&_td]:py-3 [&_td]:align-top [&_td]:text-neutral-700 [&_tbody_tr:hover]:bg-neutral-50/70',
  rowActions: 'flex flex-wrap items-center gap-2',
  inlineAction:
    'inline-flex h-9 items-center rounded-md border border-neutral-300 bg-white px-3 text-xs font-medium text-neutral-800 transition hover:border-brand-500 hover:text-brand-600',
  moreAction: 'text-xs font-medium text-neutral-700 transition hover:text-brand-600',
  tableEmpty: 'border-t border-neutral-300 px-4 py-5 text-sm text-neutral-600 sm:px-5',

  detailOverlay: 'fixed inset-0 z-40 flex justify-end bg-neutral-900/30',
  detailPanel: 'h-full w-full max-w-[420px] border-l border-neutral-300 bg-white shadow-xl',
  detailHeader: 'flex items-start justify-between border-b border-neutral-200 px-5 py-4',
  detailTitle: 'text-base font-semibold text-neutral-900',
  detailDesc: 'mt-1 text-sm text-neutral-600',
  detailClose: 'text-sm font-medium text-neutral-700 hover:text-brand-600',
  detailBody: 'grid gap-3 p-5',
  detailItem: 'rounded-md border border-neutral-200 bg-neutral-100 px-3 py-2',
  detailKey: 'text-xs text-neutral-500',
  detailValue: 'mt-1 text-sm text-neutral-800'
} as const;

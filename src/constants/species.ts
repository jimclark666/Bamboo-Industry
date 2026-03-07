export const SPECIES_PAGE_HEADER = {
  title: '竹种资源目录',
  description:
    '该页面面向公开浏览，提供竹种基础信息、主要产区与适用场景，便于协作前的信息预研。'
} as const;

export const SPECIES_REGION_OPTIONS = ['全部产区', '浙江', '福建', '四川', '江西', '湖南'] as const;
export const SPECIES_USAGE_OPTIONS = ['全部用途', '建材结构', '家具板材', '工艺制品', '笋用培育', '纤维加工'] as const;
export const SPECIES_TYPE_OPTIONS = ['全部类型', '毛竹', '笋竹', '工艺竹', '纤维竹'] as const;

export type SpeciesRegion = Exclude<(typeof SPECIES_REGION_OPTIONS)[number], '全部产区'>;
export type SpeciesUsage = Exclude<(typeof SPECIES_USAGE_OPTIONS)[number], '全部用途'>;
export type SpeciesType = Exclude<(typeof SPECIES_TYPE_OPTIONS)[number], '全部类型'>;

export type SpeciesRecord = {
  id: string;
  name: string;
  type: SpeciesType;
  usage: SpeciesUsage;
  mainRegions: readonly SpeciesRegion[];
  scenario: string;
  featureSummary: string;
  updatedAt: string;
  supportCollab: boolean;
};

export const SPECIES_RECORDS: readonly SpeciesRecord[] = [
  {
    id: 'SPC-001',
    name: '毛竹（孟宗竹）',
    type: '毛竹',
    usage: '建材结构',
    mainRegions: ['浙江', '福建', '江西'],
    scenario: '建筑结构材、竹胶板基材',
    featureSummary: '竹秆粗壮、纤维强度高，适合规模化建材协同。',
    updatedAt: '2026-03-02',
    supportCollab: true
  },
  {
    id: 'SPC-002',
    name: '雷竹',
    type: '笋竹',
    usage: '笋用培育',
    mainRegions: ['浙江', '湖南'],
    scenario: '鲜笋供应、初加工分拣',
    featureSummary: '出笋期集中，适配季节性采收与流通协同。',
    updatedAt: '2026-03-01',
    supportCollab: true
  },
  {
    id: 'SPC-003',
    name: '慈竹',
    type: '工艺竹',
    usage: '工艺制品',
    mainRegions: ['四川', '江西'],
    scenario: '工艺编织、文创竹制品',
    featureSummary: '韧性较好，适合中小批量工艺制作与定制加工。',
    updatedAt: '2026-02-26',
    supportCollab: true
  },
  {
    id: 'SPC-004',
    name: '楠竹',
    type: '毛竹',
    usage: '家具板材',
    mainRegions: ['福建', '湖南'],
    scenario: '家具板材与装饰面板加工',
    featureSummary: '纹理稳定，适合板材切分与表面处理链路。',
    updatedAt: '2026-02-24',
    supportCollab: true
  },
  {
    id: 'SPC-005',
    name: '甜龙竹',
    type: '纤维竹',
    usage: '纤维加工',
    mainRegions: ['四川', '福建'],
    scenario: '竹纤维浆料、复合材料原料',
    featureSummary: '纤维利用价值高，适合深加工协同场景。',
    updatedAt: '2026-02-20',
    supportCollab: false
  }
] as const;

export const SPECIES_NOTES = [
  '该页面信息用于公开参考，协作与询价请进入系统工作台处理。',
  '竹种信息会根据产区与应用场景持续更新，建议结合最新规则口径使用。'
] as const;

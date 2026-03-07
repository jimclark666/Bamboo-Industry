export const WORKSPACE_NAV_ITEMS = [
  { label: '工作台', href: '/workspace' },
  { label: '资源协同', href: '/resource-collab' },
  { label: '询价与报价', href: '/inquiry-quotes' },
  { label: '履约跟踪', href: '/fulfillment' },
  { label: '规则与争议', href: '/rules-disputes' },
  { label: '平台治理', href: '/governance' }
] as const;

export const WORKSPACE_PAGE_TITLES: Record<string, string> = {
  '/workspace': '工作台',
  '/resource-collab': '资源协同',
  '/inquiry-quotes': '询价与报价',
  '/fulfillment': '履约跟踪',
  '/rules-disputes': '规则与争议',
  '/governance': '平台治理'
};

export const WORKSPACE_STAT_CARDS = [
  { title: '进行中协作任务', value: '36', note: '较上周 +4' },
  { title: '待响应事项', value: '12', note: '需在 24 小时内处理' },
  { title: '履约跟踪节点', value: '28', note: '状态同步正常' },
  { title: '异常待核查', value: '3', note: '建议优先处理' }
] as const;

export const WORKSPACE_TODOS = [
  '处理待确认询价条款',
  '补充履约凭证上传记录',
  '核查异常节点处理反馈'
] as const;

export const WORKSPACE_PROGRESS = [
  { phase: '资源协同', status: '已建立资源池与审核状态同步' },
  { phase: '询价报价', status: '已形成版本化沟通记录机制' },
  { phase: '履约跟踪', status: '已搭建节点化状态更新骨架' },
  { phase: '规则治理', status: '已接入规则中心与争议流程入口' }
] as const;

export const WORKSPACE_ALERTS = [
  '请优先检查“异常待核查”事项，确保问题前置处理。',
  '平台规则已更新，请在规则中心确认最新处理口径。'
] as const;

export const RESOURCE_STATUS_OPTIONS = ['全部状态', '待审核', '可协同', '协同中', '已下架'] as const;
export const RESOURCE_REGION_OPTIONS = ['全部地区', '浙江·安吉', '福建·建瓯', '四川·宜宾', '江西·宜丰'] as const;
export const RESOURCE_TYPE_OPTIONS = ['全部类型', '毛竹原材', '竹片半成品', '竹纤维料', '竹工艺辅料'] as const;

export type ResourceStatus = Exclude<(typeof RESOURCE_STATUS_OPTIONS)[number], '全部状态'>;

export type ResourceItem = {
  id: string;
  name: string;
  type: Exclude<(typeof RESOURCE_TYPE_OPTIONS)[number], '全部类型'>;
  region: Exclude<(typeof RESOURCE_REGION_OPTIONS)[number], '全部地区'>;
  supplier: string;
  scale: string;
  updatedAt: string;
  status: ResourceStatus;
};

export const RESOURCE_COLLAB_ITEMS: readonly ResourceItem[] = [
  {
    id: 'RES-2024-0812',
    name: '高密度毛竹原材批次 A-17',
    type: '毛竹原材',
    region: '浙江·安吉',
    supplier: '安吉青林竹业合作社',
    scale: '约 180 吨可调配',
    updatedAt: '2026-03-03 16:20',
    status: '可协同'
  },
  {
    id: 'RES-2024-0729',
    name: '竹片半成品（家具级）',
    type: '竹片半成品',
    region: '福建·建瓯',
    supplier: '建瓯汇竹材料有限公司',
    scale: '约 8,600 张',
    updatedAt: '2026-03-02 09:45',
    status: '协同中'
  },
  {
    id: 'RES-2024-0661',
    name: '竹纤维料（造纸方向）',
    type: '竹纤维料',
    region: '四川·宜宾',
    supplier: '宜宾南溪竹材中心',
    scale: '约 95 吨待确认',
    updatedAt: '2026-03-01 14:10',
    status: '待审核'
  },
  {
    id: 'RES-2024-0520',
    name: '竹工艺辅料（防裂处理）',
    type: '竹工艺辅料',
    region: '江西·宜丰',
    supplier: '宜丰协同加工服务站',
    scale: '约 2,400 套',
    updatedAt: '2026-02-28 11:00',
    status: '已下架'
  },
  {
    id: 'RES-2024-0493',
    name: '竹片半成品（建筑装饰级）',
    type: '竹片半成品',
    region: '浙江·安吉',
    supplier: '安吉和兴竹材联合体',
    scale: '约 5,200 张',
    updatedAt: '2026-03-03 08:30',
    status: '可协同'
  }
] as const;

export const RESOURCE_COLLAB_NOTES = [
  '资源状态将同步影响询价与履约节奏，请保持资源信息及时更新。',
  '协同中资源建议补充批次与质检记录，便于后续争议处理留痕。',
  '规则中心已发布资源上架与审核口径，发布前请完成主体信息核对。'
] as const;

export const INQUIRY_STATUS_OPTIONS = ['全部状态', '待响应', '沟通中', '已报价', '待确认', '已关闭'] as const;
export const INQUIRY_REGION_OPTIONS = RESOURCE_REGION_OPTIONS;
export const INQUIRY_ROLE_OPTIONS = ['全部视角', '发起方视角', '接收方视角'] as const;

export type InquiryStatus = Exclude<(typeof INQUIRY_STATUS_OPTIONS)[number], '全部状态'>;
export type InquiryRole = Exclude<(typeof INQUIRY_ROLE_OPTIONS)[number], '全部视角'>;

export type InquiryRecord = {
  id: string;
  resourceId: string;
  resourceName: string;
  initiator: string;
  counterparty: string;
  region: Exclude<(typeof INQUIRY_REGION_OPTIONS)[number], '全部地区'>;
  quoteRange: string;
  status: InquiryStatus;
  roleView: InquiryRole;
  updatedAt: string;
};

export const INQUIRY_SUMMARY_CARDS = [
  { title: '待响应询价', value: '7', note: '建议今日完成首轮回复' },
  { title: '沟通中报价', value: '11', note: '含 4 条价格条款修订中' },
  { title: '待确认报价', value: '5', note: '需确认交付节点与税费口径' },
  { title: '本周已关闭', value: '9', note: '闭环记录已同步至协作日志' }
] as const;

export const INQUIRY_RECORDS: readonly InquiryRecord[] = [
  {
    id: 'INQ-2026-0311',
    resourceId: 'RES-2024-0812',
    resourceName: '高密度毛竹原材批次 A-17',
    initiator: '安吉青林竹业合作社',
    counterparty: '杭州联盛加工中心',
    region: '浙江·安吉',
    quoteRange: '阶梯报价：¥760-¥820/吨',
    status: '沟通中',
    roleView: '发起方视角',
    updatedAt: '2026-03-05 15:20'
  },
  {
    id: 'INQ-2026-0309',
    resourceId: 'RES-2024-0729',
    resourceName: '竹片半成品（家具级）',
    initiator: '建瓯汇竹材料有限公司',
    counterparty: '宁波辰兴家居制造',
    region: '福建·建瓯',
    quoteRange: '区间报价：¥18.6-¥21.3/张',
    status: '已报价',
    roleView: '接收方视角',
    updatedAt: '2026-03-05 10:40'
  },
  {
    id: 'INQ-2026-0304',
    resourceId: 'RES-2024-0661',
    resourceName: '竹纤维料（造纸方向）',
    initiator: '宜宾南溪竹材中心',
    counterparty: '川南纤维加工联合体',
    region: '四川·宜宾',
    quoteRange: '目标价：¥1,050/吨（含分拣）',
    status: '待响应',
    roleView: '发起方视角',
    updatedAt: '2026-03-04 18:05'
  },
  {
    id: 'INQ-2026-0228',
    resourceId: 'RES-2024-0520',
    resourceName: '竹工艺辅料（防裂处理）',
    initiator: '宜丰协同加工服务站',
    counterparty: '赣西竹工艺品联合社',
    region: '江西·宜丰',
    quoteRange: '固定报价：¥42/套',
    status: '已关闭',
    roleView: '接收方视角',
    updatedAt: '2026-03-01 09:30'
  },
  {
    id: 'INQ-2026-0310',
    resourceId: 'RES-2024-0493',
    resourceName: '竹片半成品（建筑装饰级）',
    initiator: '安吉和兴竹材联合体',
    counterparty: '上海景和装饰工程',
    region: '浙江·安吉',
    quoteRange: '区间报价：¥23-¥27/张',
    status: '待确认',
    roleView: '发起方视角',
    updatedAt: '2026-03-05 12:10'
  }
] as const;

export const INQUIRY_NOTES = [
  '询价记录将作为后续履约与争议处理的基础依据，请保持沟通节点完整。',
  '报价区间建议同步标注有效期与交付条件，降低后续执行偏差。',
  '状态由“待响应”推进至“待确认”前，请完成主体身份与资源状态核验。'
] as const;

export const FULFILLMENT_STAGE_OPTIONS = ['全部阶段', '待确认', '备货中', '运输中', '待验收', '已完成', '异常处理中'] as const;
export const FULFILLMENT_REGION_OPTIONS = RESOURCE_REGION_OPTIONS;
export const FULFILLMENT_RISK_OPTIONS = ['全部风险', '正常', '预警', '异常'] as const;

export type FulfillmentStage = Exclude<(typeof FULFILLMENT_STAGE_OPTIONS)[number], '全部阶段'>;
export type FulfillmentRisk = Exclude<(typeof FULFILLMENT_RISK_OPTIONS)[number], '全部风险'>;

export type FulfillmentRecord = {
  id: string;
  resourceName: string;
  inquiryId: string;
  partners: string;
  region: Exclude<(typeof FULFILLMENT_REGION_OPTIONS)[number], '全部地区'>;
  stage: FulfillmentStage;
  risk: FulfillmentRisk;
  updatedAt: string;
};

export const FULFILLMENT_SUMMARY_CARDS = [
  { title: '进行中履约', value: '14', note: '含 3 条跨区域协同批次' },
  { title: '待验收节点', value: '6', note: '建议 48 小时内完成验收反馈' },
  { title: '异常处理中', value: '2', note: '均已进入规则核实流程' },
  { title: '本周已完成', value: '9', note: '凭证与状态已归档' }
] as const;

export const FULFILLMENT_RECORDS: readonly FulfillmentRecord[] = [
  {
    id: 'FUL-2026-0181',
    resourceName: '高密度毛竹原材批次 A-17',
    inquiryId: 'INQ-2026-0311',
    partners: '安吉青林竹业合作社 ↔ 杭州联盛加工中心',
    region: '浙江·安吉',
    stage: '运输中',
    risk: '预警',
    updatedAt: '2026-03-06 09:20'
  },
  {
    id: 'FUL-2026-0176',
    resourceName: '竹片半成品（家具级）',
    inquiryId: 'INQ-2026-0309',
    partners: '建瓯汇竹材料有限公司 ↔ 宁波辰兴家居制造',
    region: '福建·建瓯',
    stage: '待验收',
    risk: '正常',
    updatedAt: '2026-03-06 11:40'
  },
  {
    id: 'FUL-2026-0162',
    resourceName: '竹纤维料（造纸方向）',
    inquiryId: 'INQ-2026-0304',
    partners: '宜宾南溪竹材中心 ↔ 川南纤维加工联合体',
    region: '四川·宜宾',
    stage: '备货中',
    risk: '正常',
    updatedAt: '2026-03-05 17:05'
  },
  {
    id: 'FUL-2026-0150',
    resourceName: '竹工艺辅料（防裂处理）',
    inquiryId: 'INQ-2026-0228',
    partners: '宜丰协同加工服务站 ↔ 赣西竹工艺品联合社',
    region: '江西·宜丰',
    stage: '异常处理中',
    risk: '异常',
    updatedAt: '2026-03-05 14:50'
  },
  {
    id: 'FUL-2026-0184',
    resourceName: '竹片半成品（建筑装饰级）',
    inquiryId: 'INQ-2026-0310',
    partners: '安吉和兴竹材联合体 ↔ 上海景和装饰工程',
    region: '浙江·安吉',
    stage: '待确认',
    risk: '预警',
    updatedAt: '2026-03-06 10:25'
  }
] as const;

export const FULFILLMENT_NOTES = [
  '履约阶段变更需同步留痕，避免后续验收与争议判定缺失关键节点。',
  '出现预警或异常时，请优先核对运输、质检与交付口径并在规则中心备案。',
  '履约完成后建议在 24 小时内补齐凭证，保障协作链路完整。'
] as const;

export const DISPUTE_STATUS_OPTIONS = ['全部状态', '待受理', '核实中', '待补充材料', '处理中', '已关闭'] as const;
export const DISPUTE_REGION_OPTIONS = RESOURCE_REGION_OPTIONS;
export const DISPUTE_TYPE_OPTIONS = ['全部类型', '质量争议', '交付延期', '计量差异', '结算争议'] as const;

export type DisputeStatus = Exclude<(typeof DISPUTE_STATUS_OPTIONS)[number], '全部状态'>;
export type DisputeType = Exclude<(typeof DISPUTE_TYPE_OPTIONS)[number], '全部类型'>;

export type DisputeRecord = {
  id: string;
  relatedRef: string;
  relatedName: string;
  disputeType: DisputeType;
  initiator: string;
  region: Exclude<(typeof DISPUTE_REGION_OPTIONS)[number], '全部地区'>;
  status: DisputeStatus;
  updatedAt: string;
  summary: string;
};

export const DISPUTE_SUMMARY_CARDS = [
  { title: '待受理事项', value: '3', note: '建议 24 小时内完成初审分流' },
  { title: '核实中事项', value: '5', note: '含 2 条跨主体联合核验' },
  { title: '待补充材料', value: '2', note: '已向相关主体发出补充通知' },
  { title: '本周已关闭', value: '6', note: '处理结论已同步至协作记录' }
] as const;

export const DISPUTE_RECORDS: readonly DisputeRecord[] = [
  {
    id: 'DSP-2026-0108',
    relatedRef: 'FUL-2026-0150',
    relatedName: '竹工艺辅料（防裂处理）',
    disputeType: '质量争议',
    initiator: '赣西竹工艺品联合社',
    region: '江西·宜丰',
    status: '核实中',
    updatedAt: '2026-03-06 09:15',
    summary: '到货批次存在防裂处理一致性偏差，已提交抽检记录。'
  },
  {
    id: 'DSP-2026-0104',
    relatedRef: 'INQ-2026-0311',
    relatedName: '高密度毛竹原材批次 A-17',
    disputeType: '交付延期',
    initiator: '杭州联盛加工中心',
    region: '浙江·安吉',
    status: '处理中',
    updatedAt: '2026-03-05 18:40',
    summary: '运输节点延后导致交付窗口偏移，正在协调补偿条款。'
  },
  {
    id: 'DSP-2026-0101',
    relatedRef: 'FUL-2026-0184',
    relatedName: '竹片半成品（建筑装饰级）',
    disputeType: '计量差异',
    initiator: '上海景和装饰工程',
    region: '浙江·安吉',
    status: '待补充材料',
    updatedAt: '2026-03-05 13:10',
    summary: '现场计量与发运单存在差异，待补充第三方复核记录。'
  },
  {
    id: 'DSP-2026-0098',
    relatedRef: 'INQ-2026-0309',
    relatedName: '竹片半成品（家具级）',
    disputeType: '结算争议',
    initiator: '宁波辰兴家居制造',
    region: '福建·建瓯',
    status: '待受理',
    updatedAt: '2026-03-05 10:05',
    summary: '报价有效期与结算节点口径存在分歧，待平台受理确认。'
  },
  {
    id: 'DSP-2026-0087',
    relatedRef: 'FUL-2026-0139',
    relatedName: '竹纤维料（造纸方向）',
    disputeType: '质量争议',
    initiator: '川南纤维加工联合体',
    region: '四川·宜宾',
    status: '已关闭',
    updatedAt: '2026-03-04 16:20',
    summary: '复检通过后完成结案，处理结果已留痕归档。'
  }
] as const;

export const DISPUTE_RULE_HINTS = [
  '争议受理以平台规则版本为准，提交材料请附主体与时间戳信息。',
  '涉及履约异常的事项，需同步关联履约记录编号与关键节点证据。',
  '处理结论将回写协作链路，用于后续治理与信用评估。'
] as const;

export const DISPUTE_PRINCIPLES = [
  '先核实事实，再推进责任判定与处置建议。',
  '优先鼓励协商闭环，必要时进入平台仲裁流程。',
  '所有处理动作须保持节点留痕与版本可追溯。'
] as const;


export const GOVERNANCE_STATUS_OPTIONS = ['全部状态', '正常', '关注中', '待复核', '限制协作', '已恢复'] as const;
export const GOVERNANCE_RISK_OPTIONS = ['全部风险', '低', '中', '高'] as const;
export const GOVERNANCE_SUBJECT_TYPE_OPTIONS = ['全部主体', '竹农主体', '竹企主体', '加工协作方', '物流协作方'] as const;

export type GovernanceStatus = Exclude<(typeof GOVERNANCE_STATUS_OPTIONS)[number], '全部状态'>;
export type GovernanceRiskLevel = Exclude<(typeof GOVERNANCE_RISK_OPTIONS)[number], '全部风险'>;
export type GovernanceSubjectType = Exclude<(typeof GOVERNANCE_SUBJECT_TYPE_OPTIONS)[number], '全部主体'>;

export type GovernanceRecord = {
  id: string;
  subjectName: string;
  subjectType: GovernanceSubjectType;
  resourceCount: number;
  inquiryCount: number;
  fulfillmentCount: number;
  disputeCount: number;
  riskLevel: GovernanceRiskLevel;
  status: GovernanceStatus;
  updatedAt: string;
};

export const GOVERNANCE_SUMMARY_CARDS = [
  { title: '正常主体', value: '46', note: '协作链路稳定运行' },
  { title: '关注中主体', value: '8', note: '需持续观察履约与争议频次' },
  { title: '待复核主体', value: '3', note: '已进入阶段性复核流程' },
  { title: '限制协作主体', value: '1', note: '已触发平台限制策略' }
] as const;

export const GOVERNANCE_RECORDS: readonly GovernanceRecord[] = [
  {
    id: 'GOV-2026-0061',
    subjectName: '安吉青林竹业合作社',
    subjectType: '竹农主体',
    resourceCount: 6,
    inquiryCount: 14,
    fulfillmentCount: 8,
    disputeCount: 1,
    riskLevel: '中',
    status: '关注中',
    updatedAt: '2026-03-06 11:30'
  },
  {
    id: 'GOV-2026-0057',
    subjectName: '建瓯汇竹材料有限公司',
    subjectType: '竹企主体',
    resourceCount: 9,
    inquiryCount: 18,
    fulfillmentCount: 12,
    disputeCount: 0,
    riskLevel: '低',
    status: '正常',
    updatedAt: '2026-03-06 10:10'
  },
  {
    id: 'GOV-2026-0052',
    subjectName: '赣西竹工艺品联合社',
    subjectType: '加工协作方',
    resourceCount: 3,
    inquiryCount: 7,
    fulfillmentCount: 5,
    disputeCount: 2,
    riskLevel: '高',
    status: '待复核',
    updatedAt: '2026-03-06 09:40'
  },
  {
    id: 'GOV-2026-0046',
    subjectName: '川南纤维加工联合体',
    subjectType: '加工协作方',
    resourceCount: 4,
    inquiryCount: 11,
    fulfillmentCount: 7,
    disputeCount: 1,
    riskLevel: '中',
    status: '已恢复',
    updatedAt: '2026-03-05 16:35'
  },
  {
    id: 'GOV-2026-0039',
    subjectName: '某跨区域物流协作节点',
    subjectType: '物流协作方',
    resourceCount: 1,
    inquiryCount: 3,
    fulfillmentCount: 4,
    disputeCount: 3,
    riskLevel: '高',
    status: '限制协作',
    updatedAt: '2026-03-05 14:20'
  }
] as const;

export const GOVERNANCE_RISK_ALERTS = [
  '近 7 日“高风险”主体出现集中在跨区域履约环节，请优先检查运输与验收留痕。',
  '“待复核”主体需在复核窗口内补齐争议处理材料，否则将升级治理等级。',
  '治理状态变更将影响后续协作权限范围，请同步通知相关协作方。'
] as const;

export const GOVERNANCE_PRINCIPLES = [
  '治理判断以链路事实与规则版本为准，避免单点信息驱动决策。',
  '优先采取可恢复治理策略，确保产业协作连续性与系统稳定。',
  '治理动作需保留完整记录，支持后续复核与平台审计。'
] as const;


export const WORKSPACE_EMPTY_TEXT = {
  filtered: '当前筛选条件下暂无相关记录，请调整筛选条件或返回上游模块继续推进。',
  records: '暂无相关记录，可先返回上游模块继续推进。',
  rulesHint: '平台规则可在规则中心查阅，并建议按最新规则版本处理。'
} as const;

export const HOME_HERO = {
  title: '让竹产业供需协作更加清晰、可靠、可执行。',
  description:
    'BambooLink 连接竹农、竹企与平台治理方，围绕资源发布、询价协同、履约跟踪与争议处理，构建标准化的产业协作流程。',
  primaryAction: { label: '立即注册', href: '/register' },
  secondaryAction: { label: '登录系统', href: '/login' }
} as const;

export const HOME_VALUE_ITEMS = [
  {
    title: '资源协同',
    description: '以结构化字段管理资源信息，减少沟通偏差，提高供给信息可用性。'
  },
  {
    title: '快速匹配',
    description: '围绕规格、供货周期与区域条件建立筛选路径，缩短供需对接时间。'
  },
  {
    title: '履约跟踪',
    description: '通过节点化协作记录关键进度，保障订单执行过程透明可追溯。'
  },
  {
    title: '规则闭环',
    description: '结合版本留存、异常预警与争议处置规则，降低跨主体协作风险。'
  }
] as const;

export const HOME_ROLE_ITEMS = [
  {
    role: '竹农',
    summary: '发布种源资源、响应询价并按节点推进履约，持续积累协作信用。',
    goal: '稳定发布可交易资源，并提升供给履约稳定性。',
    process: ['发布种源信息并完成资源规范录入', '响应询价并确认规格、数量与交付节奏', '进入履约跟踪并按节点提交凭证'],
    responsibilities: ['确保资源信息真实且字段完整', '按约定时间更新交付进度', '配合异常核查与争议处理'],
    trustMechanism: '资源版本、报价确认与履约节点均留痕，形成可复核的信用记录。',
    primaryAction: { label: '发布种源', href: '/resource-collab' }
  },
  {
    role: '竹企',
    summary: '筛选目标资源、发起询价并确认条款，统一跟踪交付与异常处理。',
    goal: '以更低沟通成本完成可执行的采购协作。',
    process: ['浏览并筛选匹配的竹种资源', '发起询价并与供给方确认交易条款', '跟踪履约状态并处理异常反馈'],
    responsibilities: ['明确规格、质量与交付要求', '按流程确认报价与履约节点', '及时反馈异常并推进闭环处理'],
    trustMechanism: '询价版本与条款确认过程可追踪，履约偏差可触发规则化处理路径。',
    primaryAction: { label: '浏览竹种资源', href: '/species' },
    secondaryAction: { label: '进入询价协同', href: '/inquiry-quotes' }
  },
  {
    role: '管理员',
    summary: '执行资源审核、异常治理与争议处置，保障平台协作规则持续有效。',
    goal: '维持跨角色协作秩序并降低系统性风险。',
    process: ['审核重点资源与关键流程记录', '监测异常信号并发起治理动作', '介入争议并依据规则完成归档'],
    responsibilities: ['维护规则口径与处理标准一致', '对高风险协作链路进行干预', '沉淀治理结果用于后续优化'],
    trustMechanism: '治理动作与争议结论按规则留档，确保各方处理依据一致且可审计。',
    primaryAction: { label: '查看平台治理', href: '/governance' }
  }
] as const;

export const HOME_SPECIES_ENTRY = {
  title: '竹种资源目录',
  description:
    '公开资源页提供竹种类别、主要产区、适用场景与规格摘要，便于在进入协同前完成基础研判。',
  highlights: ['按产区、用途、类型进行筛选', '快速了解竹种协同可对接性', '明确资源预研与后续协作边界'],
  action: { label: '进入竹种资源页', href: '/species' }
} as const;

export const HOME_RULES_ENTRY = {
  title: '规则中心引导',
  description:
    '规则中心覆盖协作流程、异常处理与治理原则，帮助各角色在同一口径下开展协作。',
  highlights: ['协作链路规则可统一查阅', '争议处理流程与责任边界清晰', '治理原则支持多角色一致执行'],
  action: { label: '查看规则中心', href: '/rules' }
} as const;

export const HOME_AI_RESERVED = {
  title: '智能匹配能力预留',
  description:
    'BambooLink 将逐步提供供需线索识别与匹配建议能力，结合推荐依据展示与人工复核机制，持续提升协作效率。',
  points: ['智能识别供需约束条件', '展示推荐依据与匹配维度', '支持人工确认与治理复核']
} as const;

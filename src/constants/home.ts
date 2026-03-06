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
    title: '可信机制',
    description: '结合版本留存、异常预警与争议处置规则，降低跨主体协作风险。'
  }
] as const;

export const HOME_ROLE_ITEMS = [
  {
    role: '竹农',
    summary: '发布资源、响应询价并按节点推进履约，持续积累信用记录。',
    action: { label: '查看协作职责', href: '/rules' }
  },
  {
    role: '竹企',
    summary: '筛选供应资源、发起询价与确认条款，统一跟踪交付进度。',
    action: { label: '查看协作职责', href: '/rules' }
  },
  {
    role: '管理员',
    summary: '执行资源审核、异常治理与争议处置，维护平台协作规则。',
    action: { label: '查看治理职责', href: '/rules' }
  }
] as const;

export const HOME_TRUST_ITEMS = [
  {
    title: '报价版本留存',
    description: '每轮报价与条款变更均可记录，确保关键协商过程可复核。'
  },
  {
    title: '流程协作留痕',
    description: '履约节点统一管理，责任方、时间点与凭证信息清晰可查。'
  },
  {
    title: '异常预警机制',
    description: '对逾期、偏差等异常信号进行识别，帮助双方及时处理风险。'
  },
  {
    title: '争议处理闭环',
    description: '以规则驱动争议受理、核查与归档，提升处理效率与一致性。'
  }
] as const;

export const HOME_AI_RESERVED = {
  title: '智能匹配能力预留',
  description:
    'BambooLink 将逐步提供供需线索识别与匹配建议能力，结合推荐依据展示与人工复核机制，持续提升协作效率。',
  points: ['智能识别供需约束条件', '展示推荐依据与匹配维度', '支持人工确认与治理复核']
} as const;

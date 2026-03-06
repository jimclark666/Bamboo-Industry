export const REGISTER_COPY = {
  badge: '平台注册入口',
  title: '注册 BambooLink',
  subtitle:
    '提交协作主体基础信息后，可进入 BambooLink 平台开展后续交易协作与规则化流程管理。',
  intro: '平台面向竹农、竹企与平台协作角色提供统一入驻登记入口，确保协作主体识别清晰、信息记录完整。',
  form: {
    contactNameLabel: '联系人姓名',
    contactNamePlaceholder: '请输入联系人姓名',
    phoneLabel: '手机号',
    phonePlaceholder: '请输入手机号',
    orgNameLabel: '所属主体名称',
    orgNamePlaceholder: '请输入主体名称',
    regionLabel: '所在地区',
    regionPlaceholder: '请输入所在地区',
    passwordLabel: '密码',
    passwordPlaceholder: '请输入密码',
    confirmPasswordLabel: '确认密码',
    confirmPasswordPlaceholder: '请再次输入密码',
    roleLabel: '角色类型',
    submit: '提交注册信息'
  },
  roles: [
    {
      value: 'farmer',
      title: '竹农',
      description: '发布资源信息、响应询价并跟进履约节点。'
    },
    {
      value: 'enterprise',
      title: '竹企',
      description: '筛选供应资源、发起协作并确认交付条款。'
    },
    {
      value: 'platform',
      title: '平台协作/管理角色',
      description: '执行审核治理、异常处置与规则维护。'
    }
  ],
  trustTitle: '入驻信息说明',
  trustItems: ['平台规则可查阅，协作过程遵循统一机制。', '关键协作动作支持记录留痕，便于责任识别。', '角色与主体信息用于后续协作与状态同步。'],
  loginHint: '已有账号？',
  loginAction: '返回登录'
} as const;

export const SITE_NAME = 'BambooLink';

export const PUBLIC_NAV_ITEMS = [
  { label: '平台价值', href: '/#value' },
  { label: '业务流程', href: '/#workflow' },
  { label: '角色入口', href: '/#roles' },
  { label: '规则中心', href: '/rules' }
] as const;

export const FOOTER_COLUMNS = [
  {
    title: '平台导航',
    links: [
      { label: '首页', href: '/' },
      { label: '规则中心', href: '/rules' },
      { label: '登录', href: '/login' },
      { label: '注册', href: '/register' }
    ]
  },
  {
    title: '平台信息',
    links: [
      { label: '服务条款', href: '/terms' },
      { label: '隐私政策', href: '/privacy' }
    ]
  }
] as const;

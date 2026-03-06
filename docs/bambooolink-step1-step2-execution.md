# BambooLink Step 1-2 执行方案（仅项目骨架与全局规范）

> 适用范围：仅覆盖 Step 1（项目初始化）+ Step 2（全局 Layout 与 Design Token）  
> 基线要求：所有迭代默认直接基于 GitHub `main` branch

---

## A. 项目初始化建议

### A1. 推荐技术栈（稳定优先）
- **框架**：Next.js 14+（App Router）
- **语言**：TypeScript
- **样式**：Tailwind CSS + CSS Variables（用于 token）
- **代码规范**：ESLint + Prettier
- **提交规范**：Husky + lint-staged（可选）

> 说明：本阶段不接后端接口，不引入复杂状态管理；先保证骨架稳定、组件可复用。

### A2. 推荐目录结构

```txt
src/
  app/
    (public)/
      layout.tsx
      page.tsx                 # 先放占位，不写业务区块
      login/page.tsx           # 先放壳层，不写表单
      register/page.tsx        # 先放壳层，不写表单
      rules/page.tsx           # 先放壳层，不写正文
    globals.css
    layout.tsx
  components/
    layout/
      TopNav.tsx
      Footer.tsx
      PageContainer.tsx
      SectionBlock.tsx
    ui/
      PrimaryButton.tsx
      SecondaryButton.tsx
      TextButton.tsx
      StatusTag.tsx
  constants/
    tokens.ts                  # 导出 token key 与语义映射
    site.ts                    # 站点名、导航项、页脚链接
  types/
    ui.ts                      # 组件基础类型
    site.ts                    # 导航、页脚、标签等类型
  mock/
    site.ts                    # 导航与页脚占位数据
  utils/
    cn.ts                      # className 合并工具
    responsive.ts              # 断点辅助（可选）
```

### A3. 路由组织方式
- 使用 `app/(public)` 路由组承载登录前页面。
- 当前仅建立路由壳层：`/`、`/login`、`/register`、`/rules`。
- 路由页面仅渲染统一 layout + 占位标题，不写页面业务模块。

### A4. 全局样式文件放置建议
- `src/app/globals.css`：
  - reset/base
  - CSS variables（design token）
  - typography baseline
- `src/constants/tokens.ts`：
  - token 的 TS 语义映射（供组件消费）

### A5. 组件目录划分
- `components/layout`：结构型组件（Nav/Footer/Container/Section）
- `components/ui`：基础交互组件（按钮/标签）
- 当前不创建业务组件目录（避免越界到页面实现）

### A6. constants/types/mock/utils 是否单独建目录
- **建议全部单独建目录**，理由：
  - constants：防止魔法值散落
  - types：统一 props/interface
  - mock：后续页面开发可直接复用
  - utils：减少重复函数

---

## B. 全局 Layout 方案

### B1. 登录前页面整体布局结构

```txt
<RootLayout>
  <TopNav />
  <Main>
    <PageContainer>
      {page content slot}
    </PageContainer>
  </Main>
  <Footer />
</RootLayout>
```

- 所有登录前页面统一复用同一套壳层。
- `Main` 最小高度保证：`min-height = calc(100vh - nav - footer)`。

### B2. TopNav 固定方式
- 使用 `position: sticky; top: 0; z-index: 40`。
- 默认半透明浅底，滚动后增加轻阴影与实底。
- 导航项保持简洁：平台价值 / 业务流程 / 角色入口 / 规则中心 + 登录/注册按钮。

### B3. Footer 结构建议
- 第一列：平台名称 + 一句话说明
- 第二列：站内链接（首页、规则中心、登录、注册）
- 第三列：服务条款/隐私政策（占位）
- 底部行：版权信息

### B4. 页面最大宽度与容器规范
- `max-width: 1200px`
- 桌面：左右内边距 `32px`
- 平板：左右内边距 `24px`
- 移动：左右内边距 `16px`

### B5. 通用 Section 间距规范
- section 与 section：`64px`（桌面）/`48px`（平板）/`40px`（移动）
- section 内标题与描述：`12px`
- section 内内容区顶部间距：`24px`

### B6. 响应式断点建议
- `xl >= 1280`
- `lg >= 1024`
- `md >= 768`
- `sm >= 640`
- `<640` 为移动端

---

## C. Design Token 基线

### C1. 颜色 token 命名建议

```txt
--color-brand-600: #5F7F72;
--color-brand-500: #6F8F82;
--color-brand-100: #EAF1EE;

--color-neutral-900: #1F2A24;
--color-neutral-700: #4B5A52;
--color-neutral-500: #8A978F;
--color-neutral-300: #D7DED9;
--color-neutral-100: #F6F8F7;
--color-white: #FFFFFF;

--color-state-success: #4F7A61;
--color-state-warning: #9A7C4A;
--color-state-danger: #A05A5A;
--color-state-info: #5E7485;
```

### C2. 字体层级 token 命名建议

```txt
--font-size-h1: 36px;
--font-size-h2: 28px;
--font-size-h3: 22px;
--font-size-body-lg: 16px;
--font-size-body-md: 14px;
--font-size-caption: 12px;

--line-height-h1: 44px;
--line-height-h2: 36px;
--line-height-h3: 30px;
--line-height-body-lg: 26px;
--line-height-body-md: 22px;
--line-height-caption: 18px;
```

### C3. spacing token 命名建议

```txt
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
```

### C4. radius token 命名建议

```txt
--radius-sm: 8px;
--radius-md: 10px;
--radius-lg: 12px;
--radius-pill: 999px;
```

### C5. shadow token 命名建议

```txt
--shadow-sm: 0 2px 8px rgba(31,42,36,0.04);
--shadow-md: 0 6px 20px rgba(31,42,36,0.06);
--shadow-lg: 0 10px 30px rgba(31,42,36,0.08);
```

### C6. border token 命名建议

```txt
--border-color-default: var(--color-neutral-300);
--border-color-strong: #C7D0CA;
--border-width-default: 1px;
```

---

## D. 第一批全局组件定义（仅基础组件）

### 1) TopNav
- **组件职责**：全站登录前导航与入口动作。
- **必要 props**：
  - `items: {label: string; href: string}[]`
  - `sticky?: boolean`
  - `showAuthActions?: boolean`
- **是否支持响应式**：是（桌面横向菜单 + 移动折叠菜单）
- **当前阶段是否先做静态版本**：是（导航数据来自 mock）

### 2) Footer
- **组件职责**：站点底部信息与链接。
- **必要 props**：
  - `columns: {title: string; links: {label: string; href: string}[]}[]`
  - `copyright: string`
- **是否支持响应式**：是（桌面多列 / 移动单列）
- **当前阶段是否先做静态版本**：是

### 3) PageContainer
- **组件职责**：统一内容宽度与左右留白。
- **必要 props**：
  - `children`
  - `size?: 'default' | 'wide'`
- **是否支持响应式**：是
- **当前阶段是否先做静态版本**：是

### 4) SectionBlock
- **组件职责**：统一 section 标题、描述、主体结构。
- **必要 props**：
  - `title?: string`
  - `description?: string`
  - `children`
  - `id?: string`
- **是否支持响应式**：是
- **当前阶段是否先做静态版本**：是

### 5) PrimaryButton
- **组件职责**：主动作按钮。
- **必要 props**：
  - `children`
  - `onClick?`
  - `href?`
  - `disabled?`
  - `size?: 'sm'|'md'|'lg'`
- **是否支持响应式**：是（尺寸可变）
- **当前阶段是否先做静态版本**：是

### 6) SecondaryButton
- **组件职责**：次级动作按钮。
- **必要 props**：同 PrimaryButton
- **是否支持响应式**：是
- **当前阶段是否先做静态版本**：是

### 7) TextButton
- **组件职责**：低优先级文本动作。
- **必要 props**：
  - `children`
  - `onClick?`
  - `href?`
  - `iconRight?`
- **是否支持响应式**：是
- **当前阶段是否先做静态版本**：是

### 8) StatusTag
- **组件职责**：轻量状态标识。
- **必要 props**：
  - `label: string`
  - `tone?: 'neutral'|'success'|'warning'|'danger'|'info'`
  - `size?: 'sm'|'md'`
- **是否支持响应式**：是
- **当前阶段是否先做静态版本**：是

---

## E. 可直接发给 AI 编码工具的 Prompt（仅 Step 1-2）

你现在是资深前端工程师，请在 **GitHub main branch** 直接实现 BambooLink 的 Step 1 与 Step 2，严格限制范围，不提前进入页面业务开发。

### 目标范围（只做这些）
1. 项目初始化（Next.js + TypeScript + Tailwind + ESLint/Prettier）。
2. 路由骨架：`/`、`/login`、`/register`、`/rules`（仅壳层占位）。
3. 全局 Layout：RootLayout + TopNav + Footer + PageContainer。
4. Design Token：颜色、字体、间距、圆角、阴影、边框（CSS variables + TS token map）。
5. 第一批基础组件：
   - TopNav
   - Footer
   - PageContainer
   - SectionBlock
   - PrimaryButton
   - SecondaryButton
   - TextButton
   - StatusTag

### 禁止项（本轮绝对不要做）
- 不要实现首页业务内容模块。
- 不要实现登录/注册表单逻辑与字段。
- 不要实现规则中心正文内容。
- 不要接入后端接口与数据库。
- 不要新增任何非 `main` 分支工作流。

### 风格要求
- BambooLink 是正式成熟的产业互联网网站。
- 视觉风格：低饱和绿色、简约、专业、克制、现代 B 端。
- 组件优先可复用、结构清晰、便于后续扩展。

### 交付要求
请输出：
1. 目录结构树
2. 新增/修改文件清单
3. token 定义文件与关键值
4. 基础组件 API（props）说明
5. 本地运行命令
6. 自检结果（路由可访问、布局一致、响应式生效）


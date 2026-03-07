# BambooLink 系统信息架构说明

## 1. 架构目标

本说明用于帮助团队快速理解 BambooLink 当前前端版本的信息组织方式、模块边界与链路关系，便于后续继续工程化落地。

## 2. 双层信息结构

### 2.1 对外网站层（Public）

- 目标：品牌表达、规则透明、角色引导、入口建立
- 页面：`/`、`/rules`、`/login`、`/register`

### 2.2 登录后系统层（Workspace）

- 目标：承载协作业务链路、状态可视化、规则与治理闭环
- 页面：`/workspace`、`/resource-collab`、`/inquiry-quotes`、`/fulfillment`、`/rules-disputes`、`/governance`

## 3. 链路式模块关系

当前系统遵循链路推进逻辑：

1. 资源协同：建立资源基础信息与协作入口
2. 询价报价：形成多方沟通与报价推进记录
3. 履约跟踪：推进交付阶段并暴露风险节点
4. 规则争议：处理异常与争议事项并留痕
5. 平台治理：聚合主体风险并执行治理策略

该链路在前端层已通过页面入口与上下文字段形成闭环。

## 4. 关键数据组织

- `src/constants/workspace.ts`：集中维护工作台导航、页面标题、各模块 mock 记录、筛选选项、状态定义与文案。
- 各页面通过 `useMemo + useState` 执行前端筛选，保持“可交互但不接后端”的壳层能力。

## 5. 组件层级

- Layout 层：`WorkspaceLayout`、`SidebarNav`、`Topbar`
- 页面基础层：`WorkspacePageHeader`、`FilterBar`、`MetricCard`、`DashboardSection`
- 业务表现层：`ResourceTable`、`InquiryTable`、`FulfillmentTable`、`DisputeTable`、`GovernanceTable`
- 状态语义层：`StatusTag` 及各模块派生状态标签组件

## 6. 当前边界与后续方向

### 已实现

- 统一视觉语言与页面节奏
- 全链路页面骨架与交互入口
- 结构化 mock 数据驱动

### 未实现（待工程化）

- 后端接口与数据库
- 真实权限与审批
- 真实状态流转与回写
- 审计日志与治理策略自动化

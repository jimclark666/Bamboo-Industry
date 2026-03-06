# BambooLink Web

BambooLink Web 是面向竹产业协作场景的前端系统工程，覆盖对外网站与登录后协作工作台两部分。

## 项目简介

本项目用于承载 BambooLink 在第一阶段的产品表达与系统化页面实现，目标是建立统一的设计语言、可复用组件体系和完整的前端业务链路壳层，便于后续接入真实后端能力。

## 产品定位

- 面向竹农、竹企与平台协作方的产业互联网协作系统
- 强调规则约束、链路留痕与跨主体协同
- 风格定位为现代 B 端、简约、专业、可信

## 角色说明

当前页面文案与数据结构覆盖以下角色语义：

- 竹农主体
- 竹企主体
- 加工协作方
- 物流协作方
- 平台协作/治理角色

> 当前角色仅为前端表达层，不包含真实权限校验。

## 核心业务链路

已建立前端层面的完整链路：

1. 资源协同（资源发布、筛选、状态查看）
2. 询价与报价（询价推进、状态跟踪）
3. 履约跟踪（阶段推进、风险标识）
4. 规则与争议（争议受理与处理状态）
5. 平台治理（主体风险与治理状态）

## 页面结构概览

### 对外网站

- `/` 首页
- `/rules` 规则中心
- `/login` 登录
- `/register` 注册

### Workspace 系统

- `/workspace` 工作台总览
- `/resource-collab` 资源协同
- `/inquiry-quotes` 询价与报价
- `/fulfillment` 履约跟踪
- `/rules-disputes` 规则与争议
- `/governance` 平台治理

## 当前已实现范围

- Next.js + TypeScript + Tailwind 基础工程
- 全局 Layout、Design Token、基础 UI 组件
- 对外网站页面结构与核心文案
- Workspace 统一壳层（侧边导航、顶部栏、页面头部、筛选栏、表格、状态标签）
- 资源到治理的完整前端链路与结构化 mock 数据
- README 与系统信息架构文档

## 当前未实现范围

- 真实鉴权与会话管理
- 后端接口联调与数据库接入
- 真实提交、审批、状态回写
- 细粒度权限模型与审计策略
- 自动化测试体系（单测/E2E）与 CI 流程

## 技术栈

- Next.js 14（App Router）
- React 18
- TypeScript 5
- Tailwind CSS 3
- ESLint + Prettier

## 本地运行

```bash
npm install
npm run dev
```

默认访问：`http://localhost:3000`

可用命令：

```bash
npm run lint
npm run build
npm run start
```

## 部署说明（GitHub + Vercel）

1. 将仓库推送至 GitHub main 分支
2. 在 Vercel 中导入该 GitHub 仓库
3. Framework Preset 选择 Next.js（通常自动识别）
4. 保持默认 Build Command：`next build`
5. 完成部署后，可在 Vercel Preview/Production 查看页面

> 当前为纯前端 mock 版本，无后端环境变量依赖。

## 后续可迭代方向

- 接入真实资源、询价、履约、争议、治理接口
- 建立统一状态机与链路回写机制
- 加入权限中心、审批流与操作审计
- 补充自动化测试与质量门禁
- 优化移动端系统交互与性能指标

## 补充文档

- `docs/system-information-architecture.md`：系统信息架构与模块关系说明

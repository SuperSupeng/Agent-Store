# Agent Store

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC)](https://tailwindcss.com/)

> **Your AI Loadout** - 像换装备一样，帮助每个人快速装配最合适的 Agent、Prompt 与工作流，使其在任何任务中表现得如同一支专业团队。

## 🎯 项目愿景

在 AI Agent 生态快速发展的今天，用户面临着四大核心痛点：

- **信息爆炸** - AI Agent 与工具数量激增，用户在 Google、社群及论坛中耗费大量时间才能找到"可能可用"的方案
- **品质参差** - 官网 Demo 眩目、项目更新停滞的情况普遍；用户难以判断维护活跃度与实际效果
- **Prompt 依赖** - 同一 Agent 在不同场景下需要精细 Prompt 才能发挥性能，但缺少系统化整理
- **缺乏持续赋能** - 即便找到并试用工具，版本更新、替代品及最佳实践等信息也难以及时获知

> **Agent Store = Your AI Loadout**  
> 用户需要的不只是「工具目录」，而是一条从 **发现 → 装配 → 进化** 的成为 AI 超级个体的最短路径。

![](./images/Agentstore-screenshot.png)

## ✨ 核心功能

### 🔍 Discover - 智能发现

- **Lucy Chat** - 自然语言输入 + 需求澄清 + 智能推荐 Agent 卡片
- **Faceted Browser** - 任务、健康分多维筛选；Grid 卡片懒加载
- **健康分徽章** - 社媒最近更新，可点击查看来源数据（0-100分，>70绿色、40-70黄色、<40红色）

### ⚡ Equip - 零摩擦上手

- **Snapshot 面板** - Agent 详情，包含痛点分析→设计理念→Demo GIF；侧边浮层不跳页
- **Ready-to-Run Prompt** - 模板+变量，支持一键复制
- **Skill Card** - 将 Agent + Prompt 绑定为可复用的技能包

### 🎯 差异化优势

- **数据透明** - 健康分让 Agent 状态一目了然
- **Prompt 模板化** - 每个 Agent 绑定高质量最佳实践 Prompt，并通过变量收集自动定制
- **Skill Stack 思维** - 把 Agent + Prompt 汇聚为可复用的「技能卡」，从"工具目录"升级为"个人 AI 战斗背包"

## 🚀 用户旅程

| 阶段 | 用户意图 | 关键触点 | 平台支撑功能 | 成功信号 |
|------|----------|----------|--------------|----------|
| **Landing** | 初识，寻找灵感 | 首页「Ask Lucy」/「Browse Agents」 | 双 CTA 分流 | 进入 Lucy 对话或 Grid 浏览 |
| **Discover** | 快速收敛候选 | Lucy 推荐卡 / Facet 筛选 | 语义检索 + Grid & Filter | 点击卡片查看详情 |
| **Evaluate** | 判断可靠性 | Snapshot 洞察面板 | 健康分、痛点、设计理念摘要 | 点击 Prompt / Demo |
| **Equip** | 立即上手 | Ready-to-Run Prompt | 变量注入 + 一键复制 / 外链 | 成功运行 Prompt |

> **旅程要点**：所有步骤可在一次会话或一次浏览会话内完成，减少跳转与干扰。

## 🏗️ 技术架构

### 前端技术栈

- **框架**：Next.js 14 + React 18
- **语言**：TypeScript 5.2
- **样式**：Tailwind CSS 3.3
- **动效**：Framer Motion 10.16
- **图标**：Lucide React
- **工具**：ESLint + PostCSS + Autoprefixer

### 项目结构

```
frontend/
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 首页
├── components/            # React 组件
│   ├── Header.tsx         # 页面头部
│   ├── Hero.tsx           # 英雄区域
│   ├── FilterBar.tsx      # 筛选栏
│   ├── AgentGrid.tsx      # Agent 网格
│   └── AgentCard.tsx      # Agent 卡片
├── lib/                   # 工具函数
│   ├── data.ts           # 模拟数据
│   └── utils.ts          # 工具函数
├── types/                 # TypeScript 类型定义
│   └── index.ts          # 类型接口
└── public/               # 静态资源
    └── logos/            # Agent Logo
```

## 🚀 快速开始

### 环境要求
- Node.js 18+
- npm 或 yarn

### 安装步骤

1. **克隆项目**
```bash
git clone https://github.com/your-org/agent-store.git
cd agent-store
```

2. **安装依赖**
```bash
cd frontend
npm install
```

3. **启动开发服务器**
```bash
npm run dev
```

4. **访问应用**
打开浏览器访问 [http://localhost:3000](http://localhost:3000)

### 构建生产版本
```bash
npm run build
npm start
```

## 📊 功能开发状态

### ✅ 已实现功能

- [x] 响应式首页布局
- [x] Agent 卡片展示
- [x] 分类和行业筛选
- [x] 关键词搜索

### 🚧 开发中功能

- [ ] 团队信息展示
- [ ] 媒体内容展示
- [ ] 现代化 UI 设计
- [ ] Lucy 智能推荐系统
- [ ] 健康分计算算法
- [ ] Ready-to-Run Prompt 系统
- [ ] Skill Card 功能
- [ ] Snapshot 详情面板

### 📋 计划功能

- [ ] 用户 Skill Stack 管理
- [ ] 个性化推荐算法
- [ ] 社区评价系统
- [ ] 数据分析和统计
- [ ] 移动端应用

## 🎨 设计理念

### 核心原则

- **Less is More** - 极简设计，突出核心功能
- **零摩擦体验** - 从发现到上手，减少任何不必要的步骤
- **数据驱动** - 通过健康分等透明数据帮助用户决策
- **技能化思维** - 将 Agent 转化为可复用的技能包

### 视觉设计

- **简洁现代** - 采用简洁的设计语言，突出内容本身
- **专业配色** - 使用专业的配色方案，提升品牌形象
- **流畅动效** - Framer Motion 提供流畅的页面过渡效果

## 🔧 开发指南

### 代码规范

- 使用 TypeScript 进行类型安全开发
- 遵循 ESLint 代码规范
- 组件采用函数式编程风格
- 使用 Tailwind CSS 进行样式开发

### 组件开发

```typescript
// 组件示例
interface AgentCardProps {
  agent: Agent
  onClick?: () => void
}

export default function AgentCard({ agent, onClick }: AgentCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      {/* 组件内容 */}
    </div>
  )
}
```

## 🤝 贡献指南

贡献指南已移至 [CONTRIBUTING.md](./CONTRIBUTING.md)，请查阅该文档获取详细说明。

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](./LICENSE) 文件了解详情。

## 🔗 相关链接

- [项目文档](./docs/)
- [产品需求文档](./docs/PRD.md)
- [设计规范](./docs/design-system.md)

## 🙏 致谢

感谢所有为这个项目做出贡献的开发者和设计师！

---

**Agent Store** - Your AI Loadout 🚀

*构建更好的 AI 生态，从 Agent Store 开始*

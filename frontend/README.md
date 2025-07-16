# Agent Store Frontend

Agent Store 是一个专注于展示 AI Native Agent 的前端应用，使用 Next.js 14 和 TypeScript 构建。

## 🚀 快速开始

### 环境要求

- Node.js 18+ 
- npm 或 yarn

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 启动开发服务器

```bash
npm run dev
# 或
yarn dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

## 🏗️ 项目架构

### 目录结构

```
frontend/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   └── globals.css        # 全局样式
├── components/            # React 组件
│   ├── Header.tsx         # 页面头部
│   ├── Hero.tsx           # 英雄区域
│   ├── AgentCard.tsx      # Agent 卡片
│   ├── AgentGrid.tsx      # Agent 网格
│   ├── FilterBar.tsx      # 筛选栏
│   ├── LoadingSpinner.tsx # 加载组件
│   └── ErrorBoundary.tsx  # 错误边界
├── contexts/              # React Context
│   └── SearchContext.tsx  # 搜索状态管理
├── hooks/                 # 自定义 Hooks
│   └── useAgents.ts       # Agents 数据管理
├── lib/                   # 工具库
│   ├── api.ts            # API 层
│   ├── data.ts           # 模拟数据
│   ├── utils.ts          # 工具函数
│   └── config.ts         # 配置管理
├── types/                 # TypeScript 类型定义
│   └── index.ts          # 全局类型
└── public/               # 静态资源
    └── logos/            # Logo 图片
```

### 核心技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: Lucide React
- **状态管理**: React Context + Custom Hooks

## 🔧 主要功能

### 1. 状态管理优化
- 使用 React Context 统一管理搜索和筛选状态
- 避免组件间的状态同步问题

### 2. 性能优化
- 使用 `React.memo` 优化组件重渲染
- 图片懒加载和错误处理
- 动画性能优化

### 3. 错误处理
- 全局错误边界
- API 错误处理
- 用户友好的错误提示

### 4. 加载状态
- 骨架屏加载
- 加载动画
- 渐进式加载

### 5. 可访问性
- ARIA 标签支持
- 键盘导航
- 语义化 HTML

## 📦 组件说明

### SearchContext
统一管理搜索和筛选状态，解决 Header 和主页面搜索不同步的问题。

### useAgents Hook
自定义 Hook 管理 Agents 数据的获取、搜索、筛选和错误处理。

### ErrorBoundary
错误边界组件，捕获 React 组件错误并提供友好的错误界面。

### LoadingSpinner
加载状态组件，包含骨架屏和加载动画。

## 🔌 API 集成

### API 层设计
- 抽象数据获取逻辑
- 统一的错误处理
- 支持模拟数据和真实 API

### 当前状态
- 使用模拟数据 (`lib/data.ts`)
- 已准备好接入真实 API
- 支持搜索、筛选功能

## 🎨 样式系统

### Tailwind CSS 配置
- 自定义颜色主题
- 响应式设计
- 动画和过渡效果

### 组件样式
- 使用 CSS 类组合
- 响应式布局
- 一致的视觉设计

## 🚀 部署

### 构建生产版本

```bash
npm run build
# 或
yarn build
```

### 启动生产服务器

```bash
npm start
# 或
yarn start
```

## 🔧 开发工具

### 代码质量
- TypeScript 严格模式
- ESLint 配置
- 类型安全

### 开发体验
- 热重载
- 类型检查
- 错误提示

## 📝 环境变量

创建 `.env.local` 文件：

```env
# API Configuration
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001/api
NEXT_PUBLIC_API_TIMEOUT=10000

# Feature Flags
NEXT_PUBLIC_ENABLE_ANALYTICS=false
NEXT_PUBLIC_ENABLE_ERROR_REPORTING=false
NEXT_PUBLIC_ENABLE_MOCK_DATA=true
NEXT_PUBLIC_ENABLE_DEBUG_MODE=false
```

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🆘 支持

如果您遇到问题或有建议，请：

1. 查看 [Issues](../../issues)
2. 创建新的 Issue
3. 联系开发团队

---

**注意**: 这是一个持续开发中的项目，功能和架构可能会发生变化。 
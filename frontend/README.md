# Agent Store Frontend

Agent Store 是一个专注于展示高质量 AI Agent 的网络平台，为用户提供全面的 Agent 发现和评估体验。

## 技术栈

- **框架**: Next.js 14 + React 18
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: Lucide React
- **类型**: TypeScript

## 设计特色

- 🎨 **现代化设计**: 参考了现代网站的设计风格，采用渐变背景和清晰的布局
- 📱 **响应式布局**: 完美适配桌面端、平板和移动端
- ⚡ **流畅动画**: 使用 Framer Motion 实现平滑的页面过渡和交互动画
- 🎯 **用户友好**: 直观的搜索和筛选功能，帮助用户快速找到合适的 Agent

## 快速开始

### 前置要求

确保你的系统已安装：
- Node.js 18+ 
- npm 或 yarn

### 安装依赖

```bash
# 进入前端目录
cd frontend

# 安装依赖
npm install
```

### 运行开发服务器

```bash
# 启动开发服务器
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建生产版本

```bash
# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

## 项目结构

```
frontend/
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 主页面
├── components/            # React 组件
│   ├── Header.tsx         # 页面头部
│   ├── Hero.tsx           # 英雄区域
│   ├── FilterBar.tsx      # 筛选栏
│   ├── AgentCard.tsx      # Agent 卡片
│   └── AgentGrid.tsx      # Agent 网格
├── lib/                   # 工具函数和数据
│   ├── utils.ts           # 通用工具函数
│   └── data.ts            # 模拟数据
├── types/                 # TypeScript 类型定义
│   └── index.ts           # 类型定义
└── public/                # 静态资源
```

## 主要功能

### 1. 首页展示
- 英雄区域展示平台价值主张
- 渐变背景设计，视觉效果突出
- 响应式布局，适配各种设备

### 2. Agent 展示
- 网格布局展示 Agent 卡片
- 每个卡片包含完整信息：名称、描述、标签、团队信息
- 悬停效果和动画增强用户体验

### 3. 搜索和筛选
- 实时搜索功能
- 按分类和行业筛选
- 筛选条件可视化显示

### 4. 响应式设计
- 移动端优化的导航菜单
- 自适应网格布局
- 触摸友好的交互设计

## 自定义配置

### 修改颜色主题

在 `tailwind.config.js` 中修改 `primary` 颜色：

```javascript
colors: {
  primary: {
    50: '#fff7ed',
    100: '#ffedd5',
    // ... 其他色阶
  }
}
```

### 添加新的 Agent

在 `lib/data.ts` 中的 `mockAgents` 数组添加新的 Agent 数据：

```typescript
{
  id: 'new-agent-id',
  name: 'Agent Name',
  description: '详细描述',
  shortDescription: '简短描述',
  // ... 其他字段
}
```

## 开发指南

### 添加新组件

1. 在 `components/` 目录下创建新的 `.tsx` 文件
2. 使用 TypeScript 定义组件接口
3. 使用 Tailwind CSS 进行样式设计
4. 添加必要的动画效果

### 样式规范

- 使用 Tailwind CSS 类名
- 遵循移动优先的响应式设计
- 保持一致的间距和颜色规范
- 使用 CSS 变量进行主题定制

### 性能优化

- 使用 Next.js Image 组件优化图片
- 实现组件懒加载
- 优化动画性能
- 使用 React.memo 避免不必要的重渲染

## 部署

### Vercel 部署（推荐）

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 配置环境变量（如需要）
4. 自动部署

### 其他平台

项目可以部署到任何支持 Node.js 的平台：
- Netlify
- AWS Amplify
- Railway
- 自建服务器

## 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 联系方式

- 邮箱: hello@agentstore.com
- 项目地址: [GitHub Repository](https://github.com/your-username/agent-store) 
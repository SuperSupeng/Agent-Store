# Agent Store

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.104+-green)](https://fastapi.tiangolo.com/)

> 一个集"发现 → 评估 → 体验"为一体的 AI Agent 目录平台，通过智能对话为用户精准匹配场景最佳 Agent。

## 🎯 项目愿景

随着各类 AI Agent 的快速涌现，开发者与终端用户难以快速发现、评估并使用最合适的 Agent。Agent Store 旨在提供一个高质量、可持续更新的 Agent 目录，通过多轮对话与隐式行为数据，为用户提供个性化推荐。

### 核心价值

- **对终端用户**：目录浏览 + 智能匹配；最佳实践一键试用；媒体摘要/播客降低学习曲线
- **对 Agent 开发团队**："被收录"即认证；流量入口；隐式质量指标与用户需求洞察
- **对投资/咨询机构**：数据 API；榜单与报告

## ✨ 主要功能

### 🔍 智能发现与匹配
- **分类浏览**：按应用场景、行业、技术栈、热门程度、最新上线等维度分类
- **智能搜索**：关键词 + 多维度筛选（免费/付费、开源/闭源等）
- **AI 匹配对话**：自然语言描述需求 → LLM 多轮澄清 → 返回 Top N Agent 推荐

### 📋 Agent 详情页
- **基础信息**：功能、定价、API 链接、Demo
- **媒体动态**：自动抓取公众号/X/Twitter/YouTube/小红书等公开内容
- **产品设计哲学摘要**：LLM 整理主题化摘要，支持 TTS 播客播放
- **最佳实践 Playbooks**：文字或视频卡片，含步骤概要，一键试用

### 🎯 用户体验
- **一键试用**：直接跳转 Agent 官网，记录调用日志
- **个性化推荐**：基于隐式行为数据的智能推荐
- **收藏订阅**：收藏 Agent，接收更新推送

### 👥 社区功能
- **Playbook 投稿**：官方 + 用户投稿通道，分级审核机制
- **用户提交链接**：主动提交相关媒体链接，审核后加入自动抓取
- **互动提问**：嵌入式 Agent Bot（RAG：知识库 + Playbook）

## 🏗️ 技术架构

### 前端技术栈
- **框架**：Next.js 14 + React Server Components
- **样式**：Tailwind CSS + shadcn/ui
- **动效**：Framer Motion
- **SEO**：SSR + Sitemap + JSON-LD

### 后端技术栈
- **API 网关**：FastAPI + 中间件（Auth、Rate-limit、缓存、CORS）
- **LLM 应用层**：Haystack 2.x + 自定义 Pipeline
- **向量存储**：pgvector（PostgreSQL 扩展）+ Haystack DocumentStore
- **LLM 服务**：Deepseek
- **TTS**：OpenAI Audio API

### 基础设施
- **内容管线**：无头浏览器抓取 → 清洗 → Haystack 摘要 Pipeline → S3 存储
- **监控**：Prometheus + Grafana + Sentry
- **部署**：支持灰度发布，99.5% Uptime

## 🚀 快速开始

### 环境要求
- Node.js 18+
- Python 3.9+
- PostgreSQL 14+ (with pgvector extension)
- Redis 6+

### 安装步骤

1. **克隆项目**
```bash
git clone https://github.com/your-org/agent-store.git
cd agent-store
```

2. **安装前端依赖**
```bash
cd frontend
npm install
```

3. **安装后端依赖**
```bash
cd backend
pip install -r requirements.txt
```

4. **环境配置**
```bash
# 复制环境变量模板
cp .env.example .env

# 配置必要的环境变量
# - DATABASE_URL
# - REDIS_URL
# - DEEPSEEK_API_KEY
# - OPENAI_API_KEY
```

5. **数据库初始化**
```bash
# 运行数据库迁移
python manage.py migrate

# 初始化向量扩展
psql -d your_db -c "CREATE EXTENSION IF NOT EXISTS vector;"
```

6. **启动服务**
```bash
# 启动后端服务
cd backend
uvicorn main:app --reload

# 启动前端服务
cd frontend
npm run dev
```

访问 http://localhost:3000 开始使用！

## 📊 核心指标

- **North Star**：由匹配对话产生的"首日完成任务"次数 / DAU
- **性能指标**：首页加载 < 2s；匹配结果 < 3s 返回
- **体验指标**：体验转化率 ≥ 10%（匹配→试用）
- **质量指标**：95% Agent 详情页在 < 1s 内渲染

## 🔧 开发指南

### 项目结构
```
agent-store/
├── frontend/                 # Next.js 前端应用
│   ├── app/                 # App Router 页面
│   ├── components/          # React 组件
│   └── lib/                 # 工具函数
├── backend/                 # FastAPI 后端服务
│   ├── api/                 # API 路由
│   ├── core/                # 核心配置
│   ├── models/              # 数据模型
│   └── services/            # 业务逻辑
├── docs/                    # 项目文档
└── scripts/                 # 部署脚本
```

### 开发规范
- 遵循 SOLID 原则和 KISS 原则
- 使用 TypeScript 进行类型安全开发
- 代码提交前运行 lint 和测试
- 遵循 Git Flow 工作流

## 🤝 贡献指南

我们欢迎社区贡献！请查看 [CONTRIBUTING.md](./CONTRIBUTING.md) 了解详细指南。

### 贡献方式
- 🐛 报告 Bug
- 💡 提出新功能建议
- 📝 改进文档
- 🔧 提交代码修复
- 🎨 优化用户界面

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](./LICENSE) 文件了解详情。

## 🔗 相关链接

- [项目文档](./docs/)
- [API 文档](./docs/API.md)
- [数据模型](./docs/erd.md)
- [开发计划](./docs/todolist.md)

## 📞 联系我们

- 项目主页：https://github.com/your-org/agent-store
- 问题反馈：https://github.com/your-org/agent-store/issues
- 邮箱：contact@agent-store.com

---

**Agent Store** - 让 AI Agent 的发现与使用变得简单高效 🚀
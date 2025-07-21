# 贡献指南

感谢您对 Agent Store 项目的关注！我们欢迎所有形式的贡献，包括但不限于代码、文档、设计、测试和反馈。

## 🎯 贡献方式

### 代码贡献
- **Bug 修复** - 发现并修复代码中的问题
- **功能开发** - 实现新功能或改进现有功能
- **性能优化** - 提升应用性能和用户体验
- **代码重构** - 改进代码结构和可维护性

### 文档贡献
- **完善文档** - 补充或改进现有文档
- **翻译工作** - 将文档翻译为其他语言
- **示例代码** - 提供使用示例和最佳实践

### 设计贡献
- **UI/UX 改进** - 优化用户界面和用户体验
- **视觉设计** - 提供图标、插图等视觉资源
- **交互设计** - 改进用户交互流程

### 测试贡献
- **单元测试** - 编写和补充测试用例
- **集成测试** - 测试功能间的协作
- **用户测试** - 提供用户反馈和使用体验

## 🚀 开始贡献

### 1. Fork 项目
1. 访问 [Agent Store GitHub 仓库](https://github.com/your-org/agent-store)
2. 点击右上角的 "Fork" 按钮
3. 将项目 Fork 到你的 GitHub 账户

### 2. 克隆本地仓库
```bash
git clone https://github.com/your-username/agent-store.git
cd agent-store
```

### 3. 设置开发环境
```bash
cd frontend
npm install
npm run dev
```

### 4. 创建功能分支
```bash
git checkout -b feature/your-feature-name
# 或
git checkout -b fix/your-bug-fix
```

### 5. 开发你的功能
- 遵循项目的代码规范
- 编写必要的测试
- 确保所有测试通过

### 6. 提交代码
```bash
git add .
git commit -m "feat: add your feature description"
```

### 7. 推送分支
```bash
git push origin feature/your-feature-name
```

### 8. 创建 Pull Request
1. 访问你的 Fork 仓库
2. 点击 "New Pull Request"
3. 选择你的功能分支
4. 填写 PR 描述，说明你的改动

## 📋 代码规范

### TypeScript 规范
- 使用 TypeScript 进行类型安全开发
- 为所有函数和变量提供类型注解
- 使用接口定义数据结构

### React 组件规范
- 使用函数式组件和 Hooks
- 组件名使用 PascalCase
- Props 接口以组件名 + Props 命名

### 样式规范
- 使用 Tailwind CSS 进行样式开发
- 遵循移动优先的响应式设计
- 保持一致的间距和颜色规范

### Git 提交规范
使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

类型说明：
- `feat`: 新功能
- `fix`: Bug 修复
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 代码重构
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动

## 🧪 测试要求

### 单元测试
- 为新功能编写单元测试
- 测试覆盖率不低于 80%
- 使用 Jest 和 React Testing Library

### 集成测试
- 测试组件间的交互
- 测试用户流程
- 确保跨浏览器兼容性

## 📝 Pull Request 指南

### PR 标题
使用清晰的标题描述你的改动：
```
feat: add agent health score calculation
fix: resolve search filter not working on mobile
docs: update contributing guidelines
```

### PR 描述
包含以下信息：
1. **问题描述** - 说明你要解决的问题
2. **解决方案** - 描述你的实现方案
3. **测试说明** - 说明如何测试你的改动
4. **截图** - 如果是 UI 改动，提供截图
5. **检查清单** - 确认已完成的任务

### 检查清单
- [ ] 代码遵循项目规范
- [ ] 添加了必要的测试
- [ ] 所有测试通过
- [ ] 更新了相关文档
- [ ] 代码已经过自测

## 🐛 报告问题

### Bug 报告
使用 GitHub Issues 报告 Bug，包含以下信息：
1. **问题描述** - 详细描述问题现象
2. **重现步骤** - 提供重现问题的步骤
3. **预期行为** - 描述期望的正确行为
4. **环境信息** - 浏览器、操作系统等
5. **截图** - 如果可能，提供截图

### 功能请求
对于新功能请求：
1. **功能描述** - 详细描述想要的功能
2. **使用场景** - 说明在什么情况下使用
3. **实现建议** - 如果有，提供实现建议

## 🤝 社区行为准则

### 我们的承诺
我们致力于为每个人提供友好、安全和包容的环境，无论年龄、体型、残疾、种族、性别认同和表达、经验水平、教育、社会经济地位、国籍、个人外表、种族、宗教或性取向如何。

### 我们的标准
可接受行为包括：
- 使用友好和包容的语言
- 尊重不同的观点和经验
- 优雅地接受建设性批评
- 关注对社区最有利的事情
- 对其他社区成员表现出同理心

不可接受的行为包括：
- 使用性暗示的语言或图像
- 恶意攻击、侮辱/贬损性评论
- 骚扰或跟踪
- 未经明确许可发布他人的私人信息
- 在专业环境中可能被认为不适当的其他行为

## 📞 联系我们

如果你有任何问题或建议，可以通过以下方式联系我们：

- **GitHub Issues**: [创建 Issue](https://github.com/your-org/agent-store/issues)
- **Discord**: [加入我们的 Discord 社区](https://discord.gg/agent-store)
- **Email**: contact@agent-store.com

## 🙏 致谢

感谢所有为 Agent Store 项目做出贡献的开发者、设计师和用户！

---

**一起构建更好的 AI 生态！** 🚀 
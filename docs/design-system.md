# 设计规范

Agent Store 的设计规范旨在确保整个应用的一致性和专业性，为用户提供优秀的体验。

## 🎨 设计理念

### 核心原则
- **Less is More** - 极简设计，突出核心功能
- **零摩擦体验** - 从发现到上手，减少任何不必要的步骤
- **数据驱动** - 通过透明数据帮助用户决策
- **技能化思维** - 将 Agent 转化为可复用的技能包

### 设计目标
- 提供清晰、直观的用户界面
- 确保跨设备的一致性体验
- 支持快速的信息获取和决策
- 营造专业、可信赖的品牌形象

## 🎨 视觉设计

### 色彩系统

#### 主色调
- **Primary Orange**: `#f97316` - 主要操作按钮、链接
- **Primary Dark**: `#ea580c` - 悬停状态、重要元素
- **Primary Light**: `#fed7aa` - 背景、高亮

#### 辅助色
- **Success Green**: `#10B981` - 成功状态、健康分高分
- **Warning Yellow**: `#F59E0B` - 警告状态、健康分中分
- **Error Red**: `#EF4444` - 错误状态、健康分低分
- **Neutral Gray**: `#6B7280` - 次要文本、边框

#### 中性色
- **White**: `#FFFFFF` - 背景、卡片
- **Gray 50**: `#F9FAFB` - 页面背景
- **Gray 100**: `#F3F4F6` - 分割线、边框
- **Gray 200**: `#E5E7EB` - 输入框边框
- **Gray 300**: `#D1D5DB` - 禁用状态
- **Gray 600**: `#4B5563` - 次要文本
- **Gray 800**: `#1F2937` - 主要文本
- **Gray 900**: `#111827` - 标题文本

### 字体系统

#### 字体族
- **Primary**: `Inter` - 主要字体
- **Monospace**: `JetBrains Mono` - 代码、技术内容

#### 字体大小
```css
/* 标题 */
.text-4xl { font-size: 2.25rem; line-height: 2.5rem; } /* 36px */
.text-3xl { font-size: 1.875rem; line-height: 2.25rem; } /* 30px */
.text-2xl { font-size: 1.5rem; line-height: 2rem; } /* 24px */
.text-xl { font-size: 1.25rem; line-height: 1.75rem; } /* 20px */
.text-lg { font-size: 1.125rem; line-height: 1.75rem; } /* 18px */

/* 正文 */
.text-base { font-size: 1rem; line-height: 1.5rem; } /* 16px */
.text-sm { font-size: 0.875rem; line-height: 1.25rem; } /* 14px */
.text-xs { font-size: 0.75rem; line-height: 1rem; } /* 12px */
```

#### 字重
- **Light**: `300` - 次要信息
- **Regular**: `400` - 正文内容
- **Medium**: `500` - 强调文本
- **Semibold**: `600` - 标题、按钮
- **Bold**: `700` - 重要标题

### 间距系统

#### 基础间距单位
- **4px** - 最小间距单位
- **8px** - 小间距
- **12px** - 中等间距
- **16px** - 标准间距
- **24px** - 大间距
- **32px** - 超大间距
- **48px** - 页面边距

#### 响应式间距
```css
/* 移动端 */
.p-4 { padding: 1rem; } /* 16px */

/* 平板 */
.md:p-6 { padding: 1.5rem; } /* 24px */

/* 桌面端 */
.lg:p-8 { padding: 2rem; } /* 32px */
```

### 圆角系统
- **None**: `0px` - 无圆角
- **Small**: `4px` - 小圆角
- **Medium**: `8px` - 中等圆角
- **Large**: `12px` - 大圆角
- **Full**: `9999px` - 完全圆角

### 阴影系统
```css
/* 轻微阴影 */
.shadow-sm { box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05); }

/* 标准阴影 */
.shadow { box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1); }

/* 中等阴影 */
.shadow-md { box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); }

/* 大阴影 */
.shadow-lg { box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); }

/* 超大阴影 */
.shadow-xl { box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04); }

/* 2xl 阴影 */
.shadow-2xl { box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25); }
```

## 🎯 交互设计

### 状态反馈

#### 按钮状态
- **Default**: 标准样式，清晰可见
- **Hover**: 轻微颜色变化，提供反馈
- **Active**: 按下状态，视觉反馈
- **Disabled**: 灰色，不可点击
- **Loading**: 显示加载动画

#### 输入框状态
- **Default**: 标准边框
- **Focus**: 蓝色边框，突出显示
- **Error**: 红色边框，错误提示
- **Success**: 绿色边框，成功状态

### 动画系统

#### 过渡时间
- **Fast**: `150ms` - 快速反馈
- **Normal**: `300ms` - 标准过渡
- **Slow**: `500ms` - 复杂动画

#### 缓动函数
- **Ease-in-out**: 标准缓动
- **Ease-out**: 进入动画
- **Ease-in**: 退出动画

#### Framer Motion 动画
```tsx
// 淡入动画
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
>

// 悬停动画
<motion.div
  whileHover={{ 
    y: -8,
    scale: 1.02,
    transition: { 
      type: "spring",
      stiffness: 400,
      damping: 25,
      duration: 0.2
    }
  }}
>

// 弹簧动画
<motion.div
  whileHover={{ 
    scale: 1.1,
    rotate: 5,
    transition: { 
      type: "spring",
      stiffness: 400,
      damping: 25
    }
  }}
>
```

### 响应式设计

#### 断点系统
```css
/* 移动端优先 */
/* 默认: 0px - 767px */

/* 平板 */
@media (min-width: 768px) { /* md */ }

/* 桌面端 */
@media (min-width: 1024px) { /* lg */ }

/* 大屏幕 */
@media (min-width: 1280px) { /* xl */ }

/* 超大屏幕 */
@media (min-width: 1536px) { /* 2xl */ }
```

#### 布局策略
- **移动端**: 单列布局，垂直堆叠
- **平板**: 双列布局，侧边栏
- **桌面端**: 多列布局，充分利用空间

## 🧩 组件规范

### 按钮组件

#### 主要按钮
```tsx
<button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md font-medium transition-colors">
  主要操作
</button>
```

#### 次要按钮
```tsx
<button className="border border-primary-500 text-primary-500 hover:bg-primary-50 px-4 py-2 rounded-md font-medium transition-colors">
  次要操作
</button>
```

#### 危险按钮
```tsx
<button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium transition-colors">
  危险操作
</button>
```

### 卡片组件

#### 标准卡片
```tsx
<div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
  {/* 卡片内容 */}
</div>
```

#### 交互卡片
```tsx
<div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 p-6">
  {/* 卡片内容 */}
</div>
```

#### Agent 卡片
```tsx
<motion.div
  className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group"
  whileHover={{ 
    y: -8,
    scale: 1.02,
    transition: { 
      type: "spring",
      stiffness: 400,
      damping: 25,
      duration: 0.2
    }
  }}
>
  {/* 卡片内容 */}
</motion.div>
```

### 输入组件

#### 文本输入
```tsx
<input 
  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
  placeholder="输入内容"
/>
```

#### 搜索输入
```tsx
<div className="relative">
  <input 
    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
    placeholder="搜索 Agent..."
  />
  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
</div>
```

### 徽章组件

#### 状态徽章
```tsx
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
  健康
</span>
```

#### 健康分徽章
```tsx
<span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
  score >= 70 ? 'bg-green-100 text-green-800' :
  score >= 40 ? 'bg-yellow-100 text-yellow-800' :
  'bg-red-100 text-red-800'
}`}>
  {score}分
</span>
```

## 📱 页面布局

### 页面结构
```
┌─────────────────────────────────────┐
│              Header                 │
├─────────────────────────────────────┤
│                                     │
│              Hero                   │
│                                     │
├─────────────────────────────────────┤
│              Filter                 │
├─────────────────────────────────────┤
│                                     │
│              Content                │
│                                     │
├─────────────────────────────────────┤
│              Footer                 │
└─────────────────────────────────────┘
```

### 网格系统
```css
/* 12列网格 */
.grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
.grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.grid-cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr)); }
.grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)); }
```

## 🎨 图标系统

### 图标规范
- **尺寸**: 16px, 20px, 24px, 32px
- **颜色**: 继承文本颜色或指定颜色
- **风格**: 线性图标，2px 描边
- **库**: Lucide React

### 特殊样式类
```css
/* 渐变背景 */
.gradient-bg {
  background: linear-gradient(180deg, #ffffff 0%, #fff7ed 25%, #fed7aa 50%, #fb923c 75%, #ea580c 100%);
}

/* 主要按钮 */
.btn-primary {
  @apply bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2;
}

/* 次要按钮 */
.btn-secondary {
  @apply border border-primary-500 text-primary-500 hover:bg-primary-50 px-6 py-3 rounded-lg font-medium;
}

/* 文本平衡 */
.text-balance {
  text-wrap: balance;
}
```

### 常用图标
```tsx
import { Search, Filter, Star, Heart, Share, Download, Copy, ExternalLink, Calendar, Tag, ArrowRight, Menu, X } from 'lucide-react'

// 使用示例
<Search className="w-5 h-5 text-gray-400" />
<Star className="w-4 h-4 text-yellow-400" />
<Calendar className="w-4 h-4 mr-1" />
<Tag className="w-3 h-3 mr-1" />
<ArrowRight className="w-5 h-5" />
```

## 🎯 可访问性

### 颜色对比度
- **文本**: 至少 4.5:1 对比度
- **大文本**: 至少 3:1 对比度
- **UI 元素**: 至少 3:1 对比度

### 键盘导航
- 所有交互元素可通过键盘访问
- 清晰的焦点指示器
- 逻辑的 Tab 顺序

### 屏幕阅读器
- 语义化的 HTML 结构
- 适当的 ARIA 标签
- 替代文本描述

## 📋 设计检查清单

### 视觉一致性
- [ ] 颜色使用符合设计系统
- [ ] 字体大小和字重一致
- [ ] 间距使用标准单位
- [ ] 圆角和阴影统一

### 交互体验
- [ ] 所有交互元素有悬停状态
- [ ] 加载状态有适当的反馈
- [ ] 错误状态清晰可见
- [ ] 成功状态有确认反馈

### 响应式设计
- [ ] 移动端布局合理
- [ ] 平板端适配良好
- [ ] 桌面端充分利用空间
- [ ] 触摸目标足够大

### 可访问性
- [ ] 颜色对比度符合标准
- [ ] 键盘导航支持完整
- [ ] 屏幕阅读器友好
- [ ] 替代文本完整

---

**设计系统版本**: 1.0.0  
**最后更新**: 2024年12月  
**维护者**: Agent Store 设计团队 
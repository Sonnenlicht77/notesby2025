# Notes by 2025 - 个人技术博客

基于 VitePress 构建的个人技术博客，记录学习、分享技术、思考生活。

## 项目结构

```
docs/
├── .vitepress/           # VitePress 配置
│   ├── config.mjs        # 主配置文件
│   └── theme/            # 自定义主题
├── categories/           # 文章分类
│   ├── technology/       # 技术文章
│   │   ├── frontend/     # 前端开发
│   │   ├── backend/      # 后端技术
│   │   └── devops/       # DevOps
│   ├── life/             # 生活随笔
│   │   ├── travel/       # 旅行游记
│   │   └── thoughts/     # 思考感悟
│   └── reading/          # 读书笔记
│       └── book-reviews/ # 书评
├── archives/             # 文章归档
├── tags/                 # 标签系统
├── about.md              # 关于页面
└── index.md              # 博客首页
```

## 功能特性

- 📝 **文章分类**：技术、生活、读书笔记三大分类
- 🔍 **搜索功能**：本地搜索支持
- 🏷️ **标签系统**：标签云和标签分类
- 📅 **文章归档**：按时间归档文章
- 🌙 **暗色模式**：支持亮色/暗色主题切换
- 📱 **响应式设计**：适配移动端和桌面端
- 🔗 **社交链接**：GitHub、Twitter、LinkedIn

## 快速开始

### 安装依赖

```bash
npm install
# 或
pnpm install
```

### 开发模式

```bash
npm run docs:dev
# 或
pnpm docs:dev
```

### 构建生产版本

```bash
npm run docs:build
# 或
pnpm docs:build
```

### 预览构建结果

```bash
npm run docs:preview
# 或
pnpm docs:preview
```

## 写作指南

### 创建新文章

1. 选择合适的分类目录
2. 创建 Markdown 文件
3. 添加 Frontmatter

示例：

```markdown
---
layout: post
title: 文章标题
date: 2024-01-01
tags: [JavaScript, Vue, 前端]
categories: [技术文章, 前端开发]
---

# 文章内容

这里是文章正文...
```

### Frontmatter 字段说明

- `layout`: 页面布局（post、page）
- `title`: 文章标题
- `date`: 发布日期
- `tags`: 标签数组
- `categories`: 分类数组
- `description`: 文章描述（可选）

## 部署

### GitHub Pages

1. 在 GitHub 上创建仓库
2. 配置 GitHub Actions 自动部署
3. 设置 GitHub Pages 源为 gh-pages 分支

### Vercel/Netlify

1. 连接 Git 仓库
2. 配置构建命令：`pnpm docs:build`
3. 设置输出目录：`docs/.vitepress/dist`

## 自定义配置

### 修改主题颜色

在 `.vitepress/config.mjs` 中配置：

```javascript
themeConfig: {
  // 主题色
  logo: '/images/logo.png',
  // 其他配置...
}
```

### 添加自定义组件

在 `.vitepress/theme/components/` 目录下添加 Vue 组件。

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT License

---

📧 联系我：your-email@example.com  
🐦 Twitter：[@your-username](https://twitter.com/your-username)  
💼 LinkedIn：[Your Name](https://linkedin.com/in/your-username)
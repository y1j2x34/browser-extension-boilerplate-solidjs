<center>
<img src="public/icon-64.png"/>
</center>

# 浏览器扩展模板 (MV3) - SolidJS + Vite + TypeScript

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![node](https://img.shields.io/badge/node->=18-green.svg)](https://nodejs.org)
[![pnpm](https://img.shields.io/badge/pnpm-latest-orange.svg)](https://pnpm.io)

一个现代化的浏览器扩展开发模板，基于 **SolidJS**、**Vite** 和 **TypeScript** 构建，支持 **Chrome**、**Firefox** 和 **Edge** 浏览器。

## ✨ 特性

- 🌐 **多浏览器支持** - Chrome、Firefox、Edge 一套代码多端运行
- ⚡ **现代化技术栈** - SolidJS + Vite + TypeScript + Tailwind CSS
- 📦 **Manifest V3** - 遵循最新的扩展 API 标准
- 🔥 **热重载** - 开发时自动刷新扩展，提高开发效率
- 🎨 **完整页面支持** - Popup、Options、Background、Content Script、DevTools、Side Panel
- 💡 **TypeScript 支持** - 完整的类型提示和检查
- 🎯 **ESLint + Prettier** - 代码格式化和质量检查
- 📱 **响应式设计** - 使用 Tailwind CSS 构建现代 UI
- 🛠️ **开箱即用** - 预配置完整的开发环境

## 🚀 技术栈

- **框架**: [SolidJS](https://www.solidjs.com/) - 高性能的响应式 JavaScript 库
- **构建工具**: [Vite](https://vitejs.dev/) - 极速的前端构建工具
- **语言**: [TypeScript](https://www.typescriptlang.org/) - 带类型的 JavaScript
- **样式**: [Tailwind CSS](https://tailwindcss.com/) - 实用优先的 CSS 框架
- **扩展插件**: [@crxjs/vite-plugin](https://crxjs.dev/vite-plugin) - Vite 的 Chrome 扩展插件
- **代码规范**: ESLint + Prettier

## 📁 项目结构

```bash
src/
├── pages/
│   ├── background/     # 后台脚本
│   ├── content/        # 内容脚本
│   ├── devtools/       # 开发者工具页面
│   ├── newtab/         # 新标签页
│   ├── options/        # 选项页面
│   ├── panel/          # 侧边栏面板
│   └── popup/          # 弹出窗口
├── global.d.ts         # 全局类型定义
└── vite-env.d.ts       # Vite 环境类型
```

## 🛠️ 开发指南

### 环境要求

- **Node.js** >= 18
- **pnpm** (推荐) 或 npm/yarn

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm start
```

启动开发服务器后，会在 `dist` 目录生成扩展文件。

### 加载到浏览器

#### Chrome / Edge

1. 打开 `chrome://extensions/` 或 `edge://extensions/`
2. 开启 "开发者模式"
3. 点击 "加载已解压的扩展程序"
4. 选择项目的 `dist` 目录

#### Firefox

1. 打开 `about:debugging#/runtime/this-firefox`
2. 点击 "临时载入附加组件"
3. 选择 `dist` 目录中的 `manifest.json` 文件

### 构建生产版本

```bash
pnpm build
```

构建完成后，`dist` 目录包含可发布的扩展文件，`zip` 目录包含打包好的扩展压缩包。

### 代码格式化

```bash
pnpm format
```

## 📝 自定义配置

### 修改扩展信息

编辑以下文件来自定义你的扩展：

1. **package.json** - 项目基本信息
2. **manifest.config.ts** - 扩展清单配置
3. **public/** - 图标和静态资源

### 权限配置

在 `manifest.config.ts` 中修改 `permissions` 数组来添加或移除权限：

```typescript
permissions: ['tabs', 'storage', 'contextMenus', 'sidePanel']
```

### 内容脚本配置

在 `manifest.config.ts` 中配置内容脚本的匹配规则：

```typescript
content_scripts: [
    {
        matches: ['<all_urls>'], // 修改为你需要的网站
        js: ['src/pages/content/index.ts'],
    },
]
```

## 📦 扩展页面说明

- **Popup** (`src/pages/popup/`) - 点击扩展图标显示的弹窗
- **Options** (`src/pages/options/`) - 扩展的设置页面
- **Background** (`src/pages/background/`) - 后台服务脚本
- **Content** (`src/pages/content/`) - 注入到网页的脚本
- **DevTools** (`src/pages/devtools/`) - 开发者工具面板
- **Side Panel** (`src/pages/panel/`) - 侧边栏面板 (Chrome)
- **New Tab** (`src/pages/newtab/`) - 自定义新标签页

## 🔧 开发技巧

### 调试方法

1. **Popup/Options 调试**: 右键扩展图标 → 检查弹出内容
2. **Background 调试**: 扩展管理页面 → 检查视图 → 背景页
3. **Content Script 调试**: 在目标网页中使用开发者工具

### 热重载

开发模式下，修改代码会自动重新构建扩展。对于某些更改（如 manifest 配置），可能需要手动刷新扩展。

### 多浏览器测试

建议在所有目标浏览器中测试扩展功能，因为不同浏览器的 API 实现可能存在差异。

## 📚 资源链接

- [Chrome 扩展开发文档](https://developer.chrome.com/docs/extensions/)
- [Firefox 扩展开发文档](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions)
- [SolidJS 官方文档](https://www.solidjs.com/docs/latest)
- [Vite 官方文档](https://vitejs.dev/guide/)
- [Manifest V3 迁移指南](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-migration/)

## 📄 许可证

MIT License - 查看 [LICENSE](LICENSE) 文件了解详情。

---

🌟 如果这个模板对你有帮助，请给个 Star！

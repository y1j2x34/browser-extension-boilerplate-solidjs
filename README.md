<center>
<img src="public/icon-64.png"/>
</center>

# Browser Extension Boilerplate (MV3) - SolidJS + Vite + TypeScript

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![node](https://img.shields.io/badge/node->=18-green.svg)](https://nodejs.org)
[![pnpm](https://img.shields.io/badge/pnpm-latest-orange.svg)](https://pnpm.io)

A modern browser extension development template built with **SolidJS**, **Vite**, and **TypeScript**, supporting **Chrome**, **Firefox**, and **Edge** browsers.

## ✨ Features

- 🌐 **Multi-browser Support** - Chrome, Firefox, Edge with one codebase
- ⚡ **Modern Tech Stack** - SolidJS + Vite + TypeScript + Tailwind CSS
- 📦 **Manifest V3** - Follows the latest extension API standards
- 🔥 **Hot Reload** - Automatic extension refresh during development
- 🎨 **Complete Page Support** - Popup, Options, Background, Content Script, DevTools, Side Panel
- 💡 **TypeScript Support** - Full type hints and checking
- 🎯 **ESLint + Prettier** - Code formatting and quality checking
- 📱 **Responsive Design** - Modern UI built with Tailwind CSS
- 🛠️ **Ready to Use** - Pre-configured complete development environment

## 🚀 Tech Stack

- **Framework**: [SolidJS](https://www.solidjs.com/) - High-performance reactive JavaScript library
- **Build Tool**: [Vite](https://vitejs.dev/) - Lightning-fast frontend build tool
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Extension Plugin**: [@crxjs/vite-plugin](https://crxjs.dev/vite-plugin) - Chrome extension plugin for Vite
- **Code Standards**: ESLint + Prettier

## 📁 Project Structure

```bash
src/
├── pages/
│   ├── background/     # Background script
│   ├── content/        # Content script
│   ├── devtools/       # Developer tools page
│   ├── newtab/         # New tab page
│   ├── options/        # Options page
│   ├── panel/          # Side panel
│   └── popup/          # Popup window
├── global.d.ts         # Global type definitions
└── vite-env.d.ts       # Vite environment types
```

## 🛠️ Development Guide

### Requirements

- **Node.js** >= 18
- **pnpm** (recommended) or npm/yarn

### Install Dependencies

```bash
pnpm install
```

### Development Mode

```bash
pnpm start
```

After starting the development server, extension files will be generated in the `dist` directory.

### Load into Browser

#### Chrome / Edge

1. Open `chrome://extensions/` or `edge://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked"
4. Select the project's `dist` directory

#### Firefox

1. Open `about:debugging#/runtime/this-firefox`
2. Click "This Firefox"
3. Click "Load Temporary Add-on"
4. Select the `manifest.json` file in the `dist` directory

### Build for Production

```bash
pnpm build
```

After building, the `dist` directory contains publishable extension files, and the `zip` directory contains packaged extension archives.

### Code Formatting

```bash
pnpm format
```

## 📝 Custom Configuration

### Modify Extension Information

Edit the following files to customize your extension:

1. **package.json** - Basic project information
2. **manifest.config.ts** - Extension manifest configuration
3. **public/** - Icons and static assets

### Permission Configuration

Modify the `permissions` array in `manifest.config.ts` to add or remove permissions:

```typescript
permissions: ['tabs', 'storage', 'contextMenus', 'sidePanel']
```

### Content Script Configuration

Configure content script matching rules in `manifest.config.ts`:

```typescript
content_scripts: [
    {
        matches: ['<all_urls>'], // Change to your target websites
        js: ['src/pages/content/index.ts'],
    },
]
```

## 📦 Extension Pages Overview

- **Popup** (`src/pages/popup/`) - Window shown when clicking the extension icon
- **Options** (`src/pages/options/`) - Extension settings page
- **Background** (`src/pages/background/`) - Background service script
- **Content** (`src/pages/content/`) - Script injected into web pages
- **DevTools** (`src/pages/devtools/`) - Developer tools panel
- **Side Panel** (`src/pages/panel/`) - Side panel (Chrome)
- **New Tab** (`src/pages/newtab/`) - Custom new tab page

## 🔧 Development Tips

### Debugging Methods

1. **Popup/Options Debugging**: Right-click extension icon → Inspect popup
2. **Background Debugging**: Extension management page → Inspect → Background page
3. **Content Script Debugging**: Use developer tools in the target webpage

### Hot Reload

In development mode, code changes will automatically rebuild the extension. For certain changes (like manifest configuration), you may need to manually refresh the extension.

### Multi-browser Testing

It's recommended to test extension functionality in all target browsers, as different browsers may have variations in API implementation.

## 📚 Resource Links

- [Chrome Extension Development Docs](https://developer.chrome.com/docs/extensions/)
- [Firefox Extension Development Docs](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions)
- [SolidJS Official Docs](https://www.solidjs.com/docs/latest)
- [Vite Official Docs](https://vitejs.dev/guide/)
- [Manifest V3 Migration Guide](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-migration/)

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details.

---

🌟 If this template helps you, please give it a Star!

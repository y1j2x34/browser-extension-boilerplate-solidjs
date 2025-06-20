import { defineManifest } from '@crxjs/vite-plugin';
import { description, repository, version } from './package.json';

export default defineManifest({
    manifest_version: 3,
    name: 'Browser extension boilerplate',
    permissions:
        process.env.BROWSER === 'firefox'
            ? ['tabs', 'storage', 'contextMenus']
            : ['tabs', 'storage', 'contextMenus', 'sidePanel'],
    icons: {
        '16': 'icon-16.png',
        '32': 'icon-32.png',
        '48': 'icon-48.png',
        '128': 'icon-128.png',
    },
    devtools_page: 'src/pages/devtools/index.html',
    options_page: 'src/pages/options/index.html',
    action: {
        default_popup: 'src/pages/popup/index.html',
    },
    chrome_url_overrides: {
        newtab: 'src/pages/newtab/index.html',
    },
    background:
        process.env.BROWSER === 'firefox'
            ? {
                  scripts: ['src/pages/background/index.ts'],
              }
            : {
                  service_worker: 'src/pages/background/index.ts',
              },
    content_scripts: [
        {
            matches: ['<all_urls>'],
            js: ['src/pages/content/index.ts'],
        },
    ],
    ...(process.env.BROWSER !== 'firefox' && {
        side_panel: {
            default_path: 'src/pages/panel/index.html',
        },
    }),
    homepage_url: repository.url,
    version,
    description,
});

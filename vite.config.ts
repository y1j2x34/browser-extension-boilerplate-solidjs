/// <reference types="vitest" />
import { defineConfig, PluginOption } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { crx } from '@crxjs/vite-plugin';
import zipPack from 'vite-plugin-zip-pack';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import manifest from './manifest.config';
import { name, version } from './package.json';
import rollupOptions from './rollup.config';

const isWatch = process.argv.includes('--watch');

// const viteManifestHackIssue846: CrxPlugin = {
//     // Workaround from https://github.com/crxjs/chrome-extension-tools/issues/846#issuecomment-1861880919.
//     name: 'manifestHackIssue846',
//     renderCrxManifest(_manifest, bundle) {
//         bundle['manifest.json'] = bundle['.vite/manifest.json'];
//         bundle['manifest.json'].fileName = 'manifest.json';
//         delete bundle['.vite/manifest.json'];
//         return null;
//     },
// };
export default defineConfig({
    server: {
        port: process.env.PORT ? parseInt(process.env.PORT) : 7331,
    },
    plugins: [
        solidPlugin({}),
        // process.env.BROWSER === 'chromium' ? viteManifestHackIssue846 : null,
        crx({
            manifest,
            contentScripts: {
                injectCss: true,
            },
            browser: process.env.BROWSER === 'firefox' ? 'firefox' : 'chrome',
        }),
        isWatch
            ? []
            : [
                  ViteImageOptimizer() as PluginOption,
                  zipPack({
                      outDir: 'zip',
                      outFileName: `${name}-${process.env.BROWSER}-${version}.zip`,
                  }) as PluginOption,
              ],
    ],
    resolve: {
        conditions: ['development', 'browser'],
    },
    build: {
        target: 'esnext',
        minify: 'esbuild',
        emptyOutDir: true,
        rollupOptions,
    },
});
console.log(manifest);

/// <reference types="vitest" />
import { defineConfig, PluginOption } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { crx } from '@crxjs/vite-plugin';
import zipPack from 'vite-plugin-zip-pack';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import manifest from './manifest.config';
import { name, version } from './package.json';

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
        solidPlugin({
            babel: {
                presets: [
                    [
                        '@babel/preset-typescript',
                        {
                            onlyRemoveTypeImports: true,
                            allowDeclareFields: true,
                        },
                    ],
                ],
            },
            extensions: ['ts', 'tsx'],
        }),
        tailwindcss(),
        tsconfigPaths(),
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
        rollupOptions: {
            output: {
                dir: 'dist/' + (process.env.BROWSER || 'chromium'),
                format: 'esm',
                entryFileNames: '[name].js',
                chunkFileNames: '[name].js',
                assetFileNames: '[name].[ext]',
                inlineDynamicImports: false,
            },
        },
    },
});
console.log(manifest);

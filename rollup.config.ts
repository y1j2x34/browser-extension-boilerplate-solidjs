import { defineConfig } from 'rollup';

export default defineConfig({
    input: {
        content: 'src/pages/content/index.ts',
        background: 'src/pages/background/index.ts',
        popup: 'src/pages/popup/index.html',
        options: 'src/pages/options/index.html',
        newtab: 'src/pages/newtab/index.html',
        devtools: 'src/pages/devtools/index.html',
        panel: 'src/pages/panel/index.html',
    },
    output: {
        dir: 'dist/' + (process.env.BROWSER || 'chromium'),
        format: 'esm',
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
        inlineDynamicImports: false,
    },
});

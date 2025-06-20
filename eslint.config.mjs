import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';

export default tseslint.config(tseslint.configs.strict, eslint.configs.recommended, [
    {
        files: ['**/*.ts', '**/*.tsx'],
        rules: {
            'no-console': 'off',
            'no-bitwise': 'off',
            quotes: ['error', 'single'],
            'max-len': ['error', 120],
            'arrow-parens': 'off',
            'no-unused-vars': 'off',
            '@typescript-eslint/no-dynamic-delete': 'off',
            '@typescript-eslint/no-unsafe-function-type': 'off',
            '@typescript-eslint/no-unused-vars': 'error',
        },
        languageOptions: {
            parserOptions: {
                projectService: true,
            },
            globals: {
                ...globals.browser,
            },
        },
    },
    {
        files: ['*.config.ts'],
        languageOptions: {
            parserOptions: {
                projectService: true,
            },
            globals: {
                ...globals.node,
            },
        },
        rules: {
            '@typescript-eslint/no-require-imports': 'off',
        },
    },
    {
        ignores: ['**/lib', '.github', '.husky', '**/dist'],
        plugins: {
            prettier: prettier,
        },
        rules: {
            'prettier/prettier': 'error',
        },
    },
]);

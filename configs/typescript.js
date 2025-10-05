/**
 * TypeScript Configuration
 * TypeScript-specific rules and type-checking
 */

const tsParser = require('@typescript-eslint/parser')
const tsPlugin = require('@typescript-eslint/eslint-plugin')

const typescriptRules = require('../rules/typescript')

module.exports = [
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: './tsconfig.json',
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
        },
        settings: {
            'import/resolver': {
                typescript: true,
                node: true,
            },
        },
        rules: {
            ...tsPlugin.configs['strict-type-checked'].rules,
            ...tsPlugin.configs['stylistic-type-checked'].rules,
            ...typescriptRules,
            'import/consistent-type-specifier-style': ['warn', 'prefer-inline'],
        },
    },
]

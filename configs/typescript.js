/**
 * TypeScript Configuration
 * TypeScript-specific rules and type-checking
 */

const tsPlugin = require('@typescript-eslint/eslint-plugin')
const tsParser = require('@typescript-eslint/parser')

const typescriptRules = require('../rules/typescript')

module.exports = [
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 'latest',
                project: './tsconfig.json',
                sourceType: 'module',
            },
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
        },
        rules: {
            ...tsPlugin.configs['strict-type-checked'].rules,
            ...tsPlugin.configs['stylistic-type-checked'].rules,
            ...typescriptRules,
            'import/consistent-type-specifier-style': ['warn', 'prefer-inline'],
        },
        settings: {
            'import/resolver': {
                node: true,
                typescript: true,
            },
        },
    },
]

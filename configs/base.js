/**
 * Base ESLint Configuration
 * Core JavaScript/ES6+ rules without framework-specific settings
 */

const js = require('@eslint/js')
const importPlugin = require('eslint-plugin-import')
const nPlugin = require('eslint-plugin-n')
const perfectionistPlugin = require('eslint-plugin-perfectionist')
const promisePlugin = require('eslint-plugin-promise')
const unicornPlugin = require('eslint-plugin-unicorn')
const globals = require('globals')

const coreRules = require('../rules/core')
const importRules = require('../rules/import')
const perfectionistRules = require('../rules/perfectionist')
const promiseRules = require('../rules/promise')
const unicornRules = require('../rules/unicorn')
const importSettings = require('../settings/import')

module.exports = [
    {
        files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2022,
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2021,
                __PATH_PREFIX__: 'readonly',
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            sourceType: 'module',
        },
        plugins: {
            import: importPlugin,
            n: nPlugin,
            perfectionist: perfectionistPlugin,
            promise: promisePlugin,
            unicorn: unicornPlugin,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...coreRules,
            ...importRules,
            ...promiseRules,
            ...unicornRules,
            ...perfectionistRules,
        },
        settings: {
            ...importSettings,
        },
    },
]

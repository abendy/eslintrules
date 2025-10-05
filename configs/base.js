/**
 * Base ESLint Configuration
 * Core JavaScript/ES6+ rules without framework-specific settings
 */

const js = require('@eslint/js')
const globals = require('globals')
const importPlugin = require('eslint-plugin-import')
const promisePlugin = require('eslint-plugin-promise')
const unicornPlugin = require('eslint-plugin-unicorn')
const perfectionistPlugin = require('eslint-plugin-perfectionist')
const nPlugin = require('eslint-plugin-n')
const standardConfig = require('eslint-config-standard')

const coreRules = require('../rules/core')
const importRules = require('../rules/import')
const promiseRules = require('../rules/promise')
const unicornRules = require('../rules/unicorn')
const perfectionistRules = require('../rules/perfectionist')
const importSettings = require('../settings/import')

module.exports = [
    {
        files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
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
        },
        plugins: {
            import: importPlugin,
            promise: promisePlugin,
            unicorn: unicornPlugin,
            perfectionist: perfectionistPlugin,
            n: nPlugin,
        },
        settings: {
            ...importSettings,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...standardConfig.rules,
            ...coreRules,
            ...importRules,
            ...promiseRules,
            ...unicornRules,
            ...perfectionistRules,
        },
    },
]

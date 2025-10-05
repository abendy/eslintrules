/**
 * ESLint Configuration (Flat Config)
 * Modern, modular ESLint setup for TypeScript/React/Node/Remix projects
 *
 * Features:
 * - 4 space indentation
 * - 100 char line length
 * - Auto-sorting imports, objects, and JSX props
 * - Strict TypeScript rules (based on reach-out-now)
 * - React, React Hooks, and Remix support
 * - Node.js overrides for server files
 * - JSON/YAML linting
 */

const js = require('@eslint/js')
const globals = require('globals')
const tsParser = require('@typescript-eslint/parser')
const tsPlugin = require('@typescript-eslint/eslint-plugin')
const importPlugin = require('eslint-plugin-import')
const reactPlugin = require('eslint-plugin-react')
const reactHooksPlugin = require('eslint-plugin-react-hooks')
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y')
const unicornPlugin = require('eslint-plugin-unicorn')
const promisePlugin = require('eslint-plugin-promise')
const perfectionistPlugin = require('eslint-plugin-perfectionist')
const nPlugin = require('eslint-plugin-n')
const prettierConfig = require('eslint-config-prettier')
const standardConfig = require('eslint-config-standard')

// Import our modular rules
const coreRules = require('./rules/core')
const importRules = require('./rules/import')
const reactRules = require('./rules/react')
const typescriptRules = require('./rules/typescript')
const promiseRules = require('./rules/promise')
const unicornRules = require('./rules/unicorn')
const perfectionistRules = require('./rules/perfectionist')
const jsxA11yRules = require('./rules/jsx-a11y')
const nodeRules = require('./rules/node')

// Import settings
const reactSettings = require('./settings/react')
const importSettings = require('./settings/import')

module.exports = [
    // Ignore patterns
    {
        ignores: [
            '**/node_modules/**',
            '**/build/**',
            '**/dist/**',
            '**/.cache/**',
            '**/public/**',
            '**/coverage/**',
            '**/.git/**',
            '**/.yarn/**',
        ],
    },

    // Base configuration for all JavaScript/TypeScript files
    {
        files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2021,
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

    // React files
    {
        files: ['**/*.{jsx,tsx}'],
        plugins: {
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
            'jsx-a11y': jsxA11yPlugin,
        },
        settings: {
            ...reactSettings,
        },
        rules: {
            ...reactPlugin.configs.recommended.rules,
            ...reactHooksPlugin.configs.recommended.rules,
            ...jsxA11yPlugin.configs.recommended.rules,
            ...reactRules,
            ...jsxA11yRules,
        },
    },

    // TypeScript files
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

    // Node.js files (server-side, config files, scripts)
    {
        files: [
            '*.config.{js,cjs,mjs}',
            '**/server/**/*.{js,ts}',
            '**/scripts/**/*.{js,ts}',
            'remix.config.js',
        ],
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
        plugins: {
            n: nPlugin,
        },
        rules: {
            ...nodeRules,
            'no-console': 0, // Allow console in Node files
        },
    },

    // Remix route files - relax display-name requirement
    {
        files: ['**/app/routes/**/*.{jsx,tsx}', 'app/root.{jsx,tsx}'],
        rules: {
            'react/display-name': 0,
        },
    },

    // Test files
    {
        files: [
            '**/*.test.{js,jsx,ts,tsx}',
            '**/*.spec.{js,jsx,ts,tsx}',
            '**/__tests__/**/*.{js,jsx,ts,tsx}',
        ],
        languageOptions: {
            globals: {
                ...globals.jest,
                ...globals.node,
            },
        },
        rules: {
            'no-console': 0,
            '@typescript-eslint/no-explicit-any': 0,
            'no-empty-pattern': 0, // Playwright/Vitest fixtures
        },
    },

    // JSON files
    {
        files: ['**/*.json'],
        languageOptions: {
            parser: require('jsonc-eslint-parser'),
        },
        plugins: {
            jsonc: require('eslint-plugin-jsonc'),
        },
        rules: {
            ...require('eslint-plugin-jsonc').configs['recommended-with-json'].rules,
        },
    },

    // YAML files
    {
        files: ['**/*.{yml,yaml}'],
        languageOptions: {
            parser: require('yaml-eslint-parser'),
        },
        plugins: {
            yml: require('eslint-plugin-yml'),
        },
        rules: {
            ...require('eslint-plugin-yml').configs.standard.rules,
        },
    },

    // Prettier config - should be last to override conflicting rules
    prettierConfig,
]

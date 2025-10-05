/**
 * ESLint Configuration (Flat Config)
 * Modern, modular ESLint setup for TypeScript/React/Node/Remix projects
 *
 * This is the all-in-one config. For individual pieces, use:
 * - require('@abendy/eslint-config/configs/base')
 * - require('@abendy/eslint-config/configs/react')
 * - require('@abendy/eslint-config/configs/typescript')
 * - etc.
 */

const prettierConfig = require('eslint-config-prettier')

// Import sub-configs
const base = require('./configs/base')
const react = require('./configs/react')
const node = require('./configs/node')
const remix = require('./configs/remix')
const test = require('./configs/test')
const json = require('./configs/json')
const yaml = require('./configs/yaml')
// Note: typescript and tailwind are NOT included by default
// Opt-in with require('./configs/typescript') and require('./configs/tailwind')

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

    // All configs in order
    ...base,
    ...react,
    ...node,
    ...remix,
    ...test,
    ...json,
    ...yaml,

    // Prettier config - should be last to override conflicting rules
    prettierConfig,
]

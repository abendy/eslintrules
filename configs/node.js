/**
 * Node.js Configuration
 * Node.js-specific rules for server-side code and scripts
 */

const nPlugin = require('eslint-plugin-n')
const globals = require('globals')

const nodeRules = require('../rules/node')

module.exports = [
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
            'no-console': 0,
        },
    },
]

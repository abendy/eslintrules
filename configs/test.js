/**
 * Test Configuration
 * Rules for test files (Jest, Vitest, etc.)
 */

const globals = require('globals')

module.exports = [
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
            '@typescript-eslint/no-explicit-any': 0,
            'no-console': 0,
            'no-empty-pattern': 0,
        },
    },
]

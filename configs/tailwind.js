/**
 * Tailwind CSS Configuration
 * Only use if your project uses Tailwind CSS
 * Requires: npm install tailwindcss
 */

const tailwindPlugin = require('eslint-plugin-tailwindcss')

module.exports = [
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        plugins: {
            tailwindcss: tailwindPlugin,
        },
        rules: {
            'tailwindcss/classnames-order': 'warn',
            'tailwindcss/enforces-negative-arbitrary-values': 'warn',
            'tailwindcss/enforces-shorthand': 'warn',
            'tailwindcss/no-custom-classname': 0, // Allow custom classes
        },
    },
]

/**
 * React Configuration
 * React, React Hooks, and JSX Accessibility rules
 */

const reactPlugin = require('eslint-plugin-react')
const reactHooksPlugin = require('eslint-plugin-react-hooks')
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y')

const reactRules = require('../rules/react')
const jsxA11yRules = require('../rules/jsx-a11y')
const reactSettings = require('../settings/react')

module.exports = [
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
]

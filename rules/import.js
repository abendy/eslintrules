/**
 * Import/Export rules
 * Handles ES6+ import/export statements and module resolution
 */

const WARN = 1
const ERROR = 2

module.exports = {
    'import/named': ERROR,
    'import/no-duplicates': [WARN, { 'prefer-inline': true }],
    'import/no-named-as-default-member': ERROR,
    'import/no-unresolved': WARN,
    'import/no-webpack-loader-syntax': ERROR,

    // Auto-sort imports (you wanted this!)
    'import/order': [
        WARN,
        {
            'alphabetize': {
                caseInsensitive: true,
                order: 'asc',
            },
            'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
            'newlines-between': 'always',
        },
    ],
}

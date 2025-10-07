/**
 * TypeScript-specific rules
 * Based on reach-out-now's strict-type-checked approach
 */

const WARN = 1
const ERROR = 2

module.exports = {
    // Type-aware rules
    '@typescript-eslint/ban-ts-comment': WARN,
    '@typescript-eslint/explicit-function-return-type': WARN,
    '@typescript-eslint/no-empty-function': WARN,
    '@typescript-eslint/no-explicit-any': WARN,
    '@typescript-eslint/no-unnecessary-type-assertion': ERROR,

    // Variable handling
    '@typescript-eslint/no-unused-vars': [
        ERROR,
        {
            args: 'after-used',
            ignoreRestSiblings: false,
            vars: 'all',
        },
    ],
    '@typescript-eslint/no-use-before-define': 0,

    // Import style
    '@typescript-eslint/consistent-type-imports': [
        WARN,
        {
            disallowTypeAnnotations: true,
            fixStyle: 'inline-type-imports',
            prefer: 'type-imports',
        },
    ],

    // Disable base rules that are covered by TS equivalents
    'no-shadow': 0,
    'no-unused-vars': 0,

    // Style rules (let Prettier handle most)
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/semi': 0,
}

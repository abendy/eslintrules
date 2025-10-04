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
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: false,
        },
    ],
    '@typescript-eslint/no-use-before-define': 0,

    // Import style
    '@typescript-eslint/consistent-type-imports': [
        WARN,
        {
            prefer: 'type-imports',
            disallowTypeAnnotations: true,
            fixStyle: 'inline-type-imports',
        },
    ],

    // Disable base rules that are covered by TS equivalents
    'no-unused-vars': 0,
    'no-shadow': 0,

    // Style rules (let Prettier handle most)
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/semi': 0,
}

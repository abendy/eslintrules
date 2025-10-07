/**
 * Core ESLint rules for JavaScript/TypeScript projects
 * These are the fundamental rules that apply to all JS/TS code
 */

const WARN = 1
const ERROR = 2

module.exports = {
    // Possible Problems
    'no-const-assign': ERROR,
    'no-dupe-args': ERROR,
    'no-dupe-keys': ERROR,
    'no-duplicate-case': ERROR,
    'no-irregular-whitespace': ERROR,
    'no-this-before-super': ERROR,
    'no-undef': ERROR,
    'no-unreachable': ERROR,
    'no-unsafe-negation': ERROR,

    // Suggestions
    'arrow-spacing': WARN,
    'camelcase': WARN,
    'default-case': ERROR,
    'eqeqeq': WARN,
    'new-cap': WARN,
    'no-case-declarations': 0,
    'no-cond-assign': WARN,
    'no-console': WARN,
    'no-debugger': WARN,
    'no-delete-var': WARN,
    'no-empty': WARN,
    'no-empty-function': WARN,
    'no-eval': WARN,
    'no-extend-native': WARN,
    'no-extra-semi': WARN,
    'no-floating-decimal': WARN,
    'no-global-assign': WARN,
    'no-implicit-globals': WARN,
    'no-multi-spaces': WARN,
    'no-redeclare': WARN,
    'no-shadow-restricted-names': WARN,
    'no-throw-literal': ERROR,
    'no-undef-init': WARN,
    'no-unused-vars': [
        ERROR,
        {
            args: 'after-used',
            ignoreRestSiblings: false,
            vars: 'all',
        },
    ],
    'no-use-before-define': 0,
    'no-var': WARN,
    'no-void': 0,
    'prefer-arrow-callback': WARN,
    'prefer-const': WARN,
    'radix': ERROR,
    'strict': WARN,

    // Layout & Formatting (minimal - let Prettier handle most)
    'array-bracket-spacing': [ERROR, 'never'],
    'arrow-parens': [ERROR, 'always'],
    'brace-style': [
        ERROR,
        '1tbs',
        {
            allowSingleLine: true,
        },
    ],
    'comma-dangle': [
        ERROR,
        {
            arrays: 'always-multiline',
            exports: 'always-multiline',
            functions: 'ignore',
            imports: 'always-multiline',
            objects: 'always-multiline',
        },
    ],
    'comma-spacing': ERROR,
    'eol-last': ERROR,
    'indent': 0, // Let Prettier handle this
    'jsx-quotes': [ERROR, 'prefer-double'],
    'key-spacing': [ERROR, { beforeColon: false }],
    'keyword-spacing': [
        ERROR,
        {
            after: true,
            before: true,
        },
    ],
    'linebreak-style': 0, // Let Prettier handle this
    'max-len': [
        WARN,
        {
            code: 100,
            ignoreComments: true,
            ignoreStrings: true,
            ignoreTrailingComments: true,
            ignoreUrls: true,
        },
    ],
    'no-bitwise': ERROR,
    'no-extra-parens': [ERROR, 'functions'],
    'no-multiple-empty-lines': [WARN, { max: 1, maxEOF: 1 }],
    'no-tabs': 0,
    'object-curly-spacing': [ERROR, 'always'],
    'quote-props': 0, // Let Prettier handle this
    'quotes': 0, // Let Prettier handle this
    'semi': 0, // Let Prettier handle this
    'space-before-blocks': ERROR,
    'space-before-function-paren': 0, // Let Prettier handle this
    'spaced-comment': WARN,
}

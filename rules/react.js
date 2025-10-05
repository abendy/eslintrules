/**
 * React and React Hooks rules
 * Modern React development best practices
 */

const WARN = 1
const ERROR = 2

module.exports = {
    // React Hooks
    'react-hooks/exhaustive-deps': WARN,
    'react-hooks/rules-of-hooks': ERROR,

    // React JSX
    'react/jsx-curly-newline': ERROR, // From reach-out-now
    'react/jsx-filename-extension': [WARN, { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-handler-names': ERROR,
    'react/jsx-indent': 0, // Let Prettier handle
    'react/jsx-indent-props': [ERROR, 4], // 4 spaces for props (reach-out-now used 2)
    'react/jsx-max-depth': 0,
    'react/jsx-max-props-per-line': [
        WARN,
        { maximum: { single: 4, multi: 1 } },
    ],
    'react/jsx-no-bind': ERROR, // From reach-out-now (stricter)
    'react/jsx-one-expression-per-line': 0,

    // Auto-sort JSX props (you wanted this!)
    'react/jsx-sort-props': [
        ERROR,
        {
            callbacksLast: true,
            shorthandFirst: true,
            ignoreCase: true,
            noSortAlphabetically: true,
            reservedFirst: true,
        },
    ],

    'react/jsx-uses-vars': WARN,

    // React Component Rules
    'react/display-name': WARN,
    'react/no-deprecated': WARN,
    'react/no-direct-mutation-state': WARN, // Match reach-out-now
    'react/no-unescaped-entities': WARN,
    'react/no-unknown-property': WARN,
    'react/no-unstable-nested-components': WARN,
    'react/prop-types': WARN,
    'react/react-in-jsx-scope': ERROR, // From reach-out-now (strict)
    'react/self-closing-comp': ERROR, // From reach-out-now (stricter)
}

/**
 * Perfectionist plugin rules
 * Auto-sorting for objects, arrays, types, etc. (you wanted this!)
 */

const WARN = 1

module.exports = {
    // Enable the ones you want auto-sorted
    'perfectionist/sort-interfaces': [WARN, { partitionByComment: true }],
    'perfectionist/sort-named-exports': [WARN, { partitionByComment: true }],
    'perfectionist/sort-named-imports': [WARN, { partitionByComment: true }],
    'perfectionist/sort-object-types': [WARN, { partitionByComment: true }],
    'perfectionist/sort-objects': [WARN, { partitionByComment: true }],

    // Keep these off - too opinionated or handled elsewhere
    'perfectionist/sort-classes': 0,
    'perfectionist/sort-imports': 0, // We use import/order instead
    'perfectionist/sort-jsx-props': 0, // We use react/jsx-sort-props instead
    'perfectionist/sort-union-types': 0,
}

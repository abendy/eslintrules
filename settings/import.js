/**
 * Import resolver settings
 * Helps ESLint understand how to resolve module imports
 */

module.exports = {
    'import/resolver': {
        node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        typescript: true,
    },
}

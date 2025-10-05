/**
 * JSON Configuration
 * JSON and JSONC file linting
 */

module.exports = [
    {
        files: ['**/*.json'],
        languageOptions: {
            parser: require('jsonc-eslint-parser'),
        },
        plugins: {
            jsonc: require('eslint-plugin-jsonc'),
        },
        rules: {
            ...require('eslint-plugin-jsonc').configs['recommended-with-json'].rules,
        },
    },
]

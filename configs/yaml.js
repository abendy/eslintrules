/**
 * YAML Configuration
 * YAML file linting
 */

module.exports = [
    {
        files: ['**/*.{yml,yaml}'],
        languageOptions: {
            parser: require('yaml-eslint-parser'),
        },
        plugins: {
            yml: require('eslint-plugin-yml'),
        },
        rules: {
            ...require('eslint-plugin-yml').configs.standard.rules,
        },
    },
]

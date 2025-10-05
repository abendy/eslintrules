/**
 * Remix Configuration
 * Remix-specific overrides and route handling
 */

module.exports = [
    {
        files: ['**/app/routes/**/*.{jsx,tsx}', 'app/root.{jsx,tsx}'],
        rules: {
            'react/display-name': 0,
        },
    },
]

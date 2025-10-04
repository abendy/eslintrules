/**
 * Prettier Configuration
 *
 * Preferences:
 * - 4 space indentation
 * - Single quotes
 * - No semicolons
 * - 100 character line width
 * - Trailing commas in multi-line structures
 */

/** @type {import("prettier").Config} */
module.exports = {
    // Transform arrow function parameters
    // 'avoid' = no parens when single param
    arrowParens: 'avoid',

    // Put the closing bracket of JSX elements on a new line
    bracketSameLine: false,

    // Print spaces between brackets in object literals
    bracketSpacing: true,

    // Format embedded language (e.g., HTML) automatically
    embeddedLanguageFormatting: 'auto',

    // Line Feed only (\n) line endings
    endOfLine: 'lf',

    // Treat HTML whitespace as CSS does
    htmlWhitespaceSensitivity: 'css',

    // Don't insert #pragma preamble in the formatted output
    insertPragma: false,

    // Wrap code at 100 characters where possible
    printWidth: 100,

    // Wrap prose at 100 characters where possible
    proseWrap: 'always',

    // Quote object properties consistently when needed
    quoteProps: 'consistent',

    // Don't require a pragma in the formatted output
    requirePragma: false,

    // Don't use semicolons at the end of statements
    semi: false,

    // Don't put each attribute on a new line
    singleAttributePerLine: false,

    // Use single quotes instead of double quotes
    singleQuote: true,

    // Use 4 spaces for indentation
    tabWidth: 4,

    // Add trailing commas in multi-line arrays/objects
    trailingComma: 'all',

    // Use spaces for indentation instead of tabs
    useTabs: false,

    // Plugin support
    plugins: ['prettier-plugin-tailwindcss'],

    // File-specific overrides
    overrides: [
        {
            files: ['**/*.json', '**/*.jsonc'],
            options: {
                tabWidth: 2,
            },
        },
        {
            files: ['**/*.yml', '**/*.yaml'],
            options: {
                tabWidth: 2,
            },
        },
    ],
}

/**
 * Node.js specific rules
 * For server-side JavaScript and build scripts
 */

const WARN = 1

module.exports = {
    // Plugin 'n' rules (modern replacement for deprecated eslint-plugin-node)
    // All rules work identically - just use 'n/' prefix instead of 'node/'
    'n/exports-style': 0,
    'n/file-extension-in-import': [WARN, 'always'], // From reach-out-now
    'n/no-unsupported-features/es-syntax': 0, // Let TypeScript handle this
    'n/prefer-global/buffer': [WARN, 'always'],
    'n/prefer-global/console': [WARN, 'always'],
    'n/prefer-global/process': [WARN, 'always'],
    'n/prefer-global/url': [WARN, 'always'],
    'n/prefer-global/url-search-params': [WARN, 'always'],
    'n/prefer-promises/dns': WARN,
    'n/prefer-promises/fs': WARN,
}

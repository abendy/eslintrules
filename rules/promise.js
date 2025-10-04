/**
 * Promise best practices
 * Helps avoid common async/await mistakes
 */

const WARN = 1

module.exports = {
    'promise/always-return': 0,
    'promise/avoid-new': WARN,
    'promise/catch-or-return': WARN,
    'promise/no-callback-in-promise': WARN,
    'promise/no-native': 0,
    'promise/no-nesting': WARN,
    'promise/no-new-statics': WARN,
    'promise/no-promise-in-callback': WARN,
    'promise/no-return-in-finally': WARN,
    'promise/no-return-wrap': WARN,
    'promise/param-names': WARN,
    'promise/valid-params': WARN,
}

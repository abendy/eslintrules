/** @type {import('stylelint').Config} */
module.exports = {
    extends: ['stylelint-config-standard-scss'],
    rules: {
        'scss/dollar-variable-pattern': '^[a-z][a-zA-Z0-9]*(?:-[a-zA-Z0-9]+)*$',
        'selector-class-pattern':
            '^(?:[A-Z][a-zA-Z0-9]*(?:(?:__|--)[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)*|[a-z][a-zA-Z0-9-]*(?:(?:__|--)[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)*)$',
    },
}

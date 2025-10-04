# ESLint & Prettier Configuration

Modern, modular ESLint and Prettier setup for TypeScript/React/Node/Remix projects.

## Installation

```bash
npm install --save-dev \
  eslint \
  prettier \
  @abendy/eslint-config
```

Or if developing this config:

```bash
npm install
```

## Usage

### ESLint

Create `eslint.config.js` in your project root:

```js
module.exports = require('@abendy/eslint-config')
```

Or extend it with custom rules:

```js
const baseConfig = require('@abendy/eslint-config')

module.exports = [
    ...baseConfig,
    {
        // Your custom overrides
        rules: {
            'no-console': 'off',
        },
    },
]
```

### Prettier

Create `prettier.config.js` in your project root:

```js
module.exports = require('@abendy/eslint-config/prettier.config')
```

Or use your own config - our ESLint setup works with any Prettier config.

### Scripts

Add these to your `package.json`:

```json
{
    "scripts": {
        "lint": "eslint .",
        "lint:fix": "eslint . --fix",
        "format": "prettier --write .",
        "format:check": "prettier --check ."
    }
}
```

## Customization

### Adjusting Rule Severity

Edit files in `rules/` directory:

```js
// rules/core.js
module.exports = {
    'no-console': 1, // Change to WARN instead of ERROR
}
```

### Adding New Rules

Create a new file in `rules/` and import it in `eslint.config.js`:

```js
const myCustomRules = require('./rules/custom')

// Add to appropriate config section
rules: {
    ...myCustomRules,
}
```

### Disabling Auto-Sorting

In `rules/perfectionist.js`:

```js
module.exports = {
    'perfectionist/sort-objects': 0, // Disable
}
```

## TypeScript Configuration

Your project should have a `tsconfig.json`. Example:

```json
{
    "compilerOptions": {
        "target": "ES2022",
        "lib": ["ES2022", "DOM", "DOM.Iterable"],
        "module": "ESNext",
        "moduleResolution": "bundler",
        "jsx": "react-jsx",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true
    }
}
```

## VS Code Integration

Install extensions:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Add to `.vscode/settings.json`:

```json
```

## Troubleshooting

### TypeScript rules not working

Ensure `tsconfig.json` exists and `parserOptions.project` points to it in your config.

# ESLint & Prettier Configuration

Modern, modular ESLint and Prettier setup for TypeScript/React/Node/Remix projects.

## Installation

```bash
npm install --save-dev eslint prettier @abendy/eslint-config
```

---

### Option 1: Use Everything (Default)

```js
// eslint.config.js
module.exports = require('@abendy/eslint-config')
```

Gets: Base + React + TypeScript + Node + Remix + Test + JSON + YAML

**Note:** Tailwind CSS support is opt-in. To use it, add:
```js
module.exports = [
    ...require('@abendy/eslint-config'),
    ...require('@abendy/eslint-config/configs/tailwind'),
]
```

---

### Option 2: Pick Individual Configs

#### Base JavaScript Only

```js
// eslint.config.js
module.exports = require('@abendy/eslint-config/configs/base')
```

#### Base + React

```js
// eslint.config.js
module.exports = [
    ...require('@abendy/eslint-config/configs/base'),
    ...require('@abendy/eslint-config/configs/react'),
]
```

#### Base + React + TypeScript

```js
module.exports = [
    ...require('@abendy/eslint-config/configs/base'),
    ...require('@abendy/eslint-config/configs/react'),
    ...require('@abendy/eslint-config/configs/typescript'),
]
```

---

### Option 3: Use Individual Configs + Override

#### Override Specific Rules

```js
module.exports = [
    ...require('@abendy/eslint-config/configs/base'),
    ...require('@abendy/eslint-config/configs/react'),
    {
        rules: {
            'no-console': 'off',
            'react/jsx-sort-props': 'off',
        }
    }
]
```

#### Add Your Own Configs

```js
module.exports = [
    ...require('@abendy/eslint-config'),
    {
        files: ['**/*.custom.js'],
        rules: {
            'no-console': 'off',
        }
    }
]
```

---

### Option 4: Use from Index

```js
const configs = require('@abendy/eslint-config/configs')

module.exports = [
    ...configs.base,
    ...configs.react,
    ...configs.typescript,
    // Skip node, remix, test if you don't need them
]
```

---

### Option 5: Access Individual Rules

```js
const coreRules = require('@abendy/eslint-config/rules/core')
const reactRules = require('@abendy/eslint-config/rules/react')

module.exports = [
    {
        files: ['**/*.js'],
        rules: {
            ...coreRules,
            'no-console': 'off', // Override
        }
    },
    {
        files: ['**/*.jsx'],
        rules: {
            ...coreRules,
            ...reactRules,
            'react/jsx-sort-props': 'off', // Override
        }
    }
]
```

---

## Available Configs

| Config | Path | Description |
|--------|------|-------------|
| **All** | `@abendy/eslint-config` | Everything combined |
| **Base** | `@abendy/eslint-config/configs/base` | Core JS/ES6+ rules |
| **React** | `@abendy/eslint-config/configs/react` | React + Hooks + a11y |
| **TypeScript** | `@abendy/eslint-config/configs/typescript` | TypeScript strict |
| **Node** | `@abendy/eslint-config/configs/node` | Node.js rules |
| **Remix** | `@abendy/eslint-config/configs/remix` | Remix routes |
| **Test** | `@abendy/eslint-config/configs/test` | Test files |
| **JSON** | `@abendy/eslint-config/configs/json` | JSON linting |
| **YAML** | `@abendy/eslint-config/configs/yaml` | YAML linting |
| **Tailwind** | `@abendy/eslint-config/configs/tailwind` | Tailwind CSS (opt-in) |

---

## Available Rules

| Rules | Path | Description |
|-------|------|-------------|
| **Core** | `@abendy/eslint-config/rules/core` | Core JavaScript rules |
| **Import** | `@abendy/eslint-config/rules/import` | Import/export rules |
| **React** | `@abendy/eslint-config/rules/react` | React component rules |
| **TypeScript** | `@abendy/eslint-config/rules/typescript` | TypeScript rules |
| **Promise** | `@abendy/eslint-config/rules/promise` | Promise best practices |
| **Unicorn** | `@abendy/eslint-config/rules/unicorn` | Modern JS patterns |
| **Perfectionist** | `@abendy/eslint-config/rules/perfectionist` | Auto-sorting rules |
| **JSX a11y** | `@abendy/eslint-config/rules/jsx-a11y` | Accessibility rules |
| **Node** | `@abendy/eslint-config/rules/node` | Node.js rules |

---

## Prettier

```js
// prettier.config.js
module.exports = require('@abendy/eslint-config/prettier')
```

## Scripts

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

## TypeScript Configuration

Your project should have a `tsconfig.json`:

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

## VS Code Setup

Install extensions:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Add to `.vscode/settings.json`:

```json
{
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.experimental.useFlatConfig": true
}
```

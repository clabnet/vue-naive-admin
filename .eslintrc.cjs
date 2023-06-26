const globalVariables = require('./.eslint-global-variables.json');

module.exports = {
  parser: vue-eslint-parser,
  root: true,
  env: {
    es6: true,
  browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2021,
    sourceType: 'module',
    project: './tsconfig.json',
    extraFileExtensions: ['.vue'],
  },
  plugins: ['@typescript-eslint', 'vue'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    // ... altre regole
    "@typescript-eslint/no-inferrable-types": "off"
  },
  globals: {
    ...globalVariables.globals,
  },
}

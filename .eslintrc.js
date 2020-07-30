module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    jest: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/essential', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'prettier/prettier': 'error',
  },
};

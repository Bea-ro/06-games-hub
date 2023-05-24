module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb', 'plugin:react/jsx runtime',
    'plugin:prettier/recommended'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "prettier/prettier": "error"
  },
};

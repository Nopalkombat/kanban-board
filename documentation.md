npm install eslint --save-dev
npm init @eslint/config
npm install --save-dev --save-exact prettier
npm install eslint-config-prettier eslint-plugin-prettier --save-dev


overwrite eslint configuration file:
/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
};


---create .prettierrc file
{
    "singleQuote": true,
    "printWidth": 100
}
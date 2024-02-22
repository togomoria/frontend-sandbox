/** @type {import('@typescript-eslint/experimental-utils').TSESLint.Linter.Config} */
const config = {
  root: true,
  env: {
    browser: true,
  },
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  extends: ['globis'],
  plugins: ['@emotion'],
  parser: '@typescript-eslint/parser',
  rules: {
    '@emotion/syntax-preference': [2, 'string'],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.setup.{js,ts}',
          '**/*.config.{js,ts}',
          '**/*.spec.{ts,tsx}',
          '**/.storybook/**/*.{js,jsx,ts,tsx}',
          '**/*.stories.{ts,tsx}',
          '**/__fixtures__/**/*.{ts,tsx}',
          '**/client/test/utils/*.{ts,tsx}',
        ],
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        pathGroups: [
          {
            pattern: '{react,react-dom/**,react-router-dom,@storybook/**}',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern:
              '{@client/**,@mms/**,@shared/**,@generated/**,@mock-server/**}',
            group: 'parent',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'always',
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports' },
    ],
    'no-underscore-dangle': 0,
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'import/no-default-export': 'error',
    '@typescript-eslint/no-misused-promises': [
      'warn',
      { checksVoidReturn: false },
    ],
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
  },
}

module.exports = config

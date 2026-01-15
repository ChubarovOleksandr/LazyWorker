import parser from '@typescript-eslint/parser';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports';

export default [
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: 'detect' },
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.app.json',
        },
        node: true,
      },
    },
    plugins: {
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      'unused-imports': eslintPluginUnusedImports,
      'simple-import-sort': eslintPluginSimpleImportSort,
      import: eslintPluginImport,
    },
    rules: {
      'unused-imports/no-unused-imports': 'error',
      'import/no-restricted-paths': [
        'error',
        {
          zones: [
            {
              target: './src/!(modules)/**/*',
              from: './src/modules/**/*',
              except: ['**/index.*'],
              message:
                'Доступ к внутренностям модуля запрещен. Используйте Public API (@modules/ModuleName)',
            },
          ],
        },
      ],
      'sort-imports': 'off',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react$', '^react-.+', '^@?\\w'],
            ['^node:'],
            ['^\\u0000'],
            [
              '^@layouts/',
              '^@service/',
              '^@store/',
              '^@pages/',
              '^@modules/',
              '^@components/',
              '^@ui/',
              '^@configs/',
              '^@hooks/',
              '^@interfaces/',
              '^@enums/',
              '^@utils/',
            ],
            ['^src/'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            ['^.+\\.s?css$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },
];

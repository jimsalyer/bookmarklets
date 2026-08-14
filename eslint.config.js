import js from '@eslint/js';
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  prettier,
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        // Browser globals used in bookmarklets
        window: 'readonly',
        alert: 'readonly',
        prompt: 'readonly',
      },
    },
    rules: {
      'no-delete-var': 'warn',
      'no-unused-vars': 'warn',
      'strict': ['error', 'never'],
    },
  },
  {
    // Jest config must remain CommonJS
    files: ['jest.config.cjs'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        module: 'readonly',
        require: 'readonly',
      },
    },
    rules: {
      'strict': ['error', 'global'],
    },
  },
  {
    // Test files use @jest/globals — declare jest globals
    files: ['test/**/*.test.js'],
    languageOptions: {
      globals: {
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        jest: 'readonly',
      },
    },
  },
];

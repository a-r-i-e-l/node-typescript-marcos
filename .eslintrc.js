module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-types': 'off',
    camelcase: 'off',
    '@typescript-eslint/camelcase': ['off', {properties: 'never'}],
    '@typescript-eslint/no-empty-function': ['error', {allow: ['arrowFunctions']}],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {ignoreRestSiblings: true, argsIgnorePattern: '^_'},
    ],
    '@typescript-eslint/no-use-before-define': 'off', // Should only disable typedefs and functions, but has a typeof bug
    'import/no-default-export': 'error',
    'import/no-unresolved': 'off',
    'import/no-cycle': ['off', {ignoreExternal: false, maxDepth: Infinity}],
    'no-empty-function': 'off',
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        jsxBracketSameLine: true,
        semi: false,
        singleQuote: true,
        trailingComma: 'es5',
        printWidth: 100,
        bracketSpacing: false,
      },
    ],
  },
  settings: {
    'import/ignore': ['node_modules'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': 'typescript',
  },
}

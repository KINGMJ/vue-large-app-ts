module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ['plugin:vue/vue3-essential', '@vue/standard', '@vue/typescript/recommended'],

  parserOptions: {
    ecmaVersion: 2020
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'space-before-function-paren': 0,
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/member-delimiter-style': 'off'
  },

  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true
      }
    }
  ],

  'extends': [
    'plugin:vue/recommended',
    '@vue/standard',
    '@vue/typescript/recommended'
  ]
}
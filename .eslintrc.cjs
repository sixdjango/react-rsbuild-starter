module.exports = {
  root: true,
  extends: ['@yc-tech/eslint-config'].map(require.resolve),
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': 'off'
  }
}

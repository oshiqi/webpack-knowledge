module.exports = {
  extends: 'stylelint-config-standard',
  overrides: [
    {
      files: '**/*.less',
      customSyntax: 'postcss-less'
    }
  ]
};

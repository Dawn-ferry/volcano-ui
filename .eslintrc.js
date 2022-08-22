module.exports = {
  root: true,
  env: {
    node: true
  },
  rules: {
    // "prettier/prettier": "off",
    'no-console': 'off',
    'no-debugger': 'off',
    'import/prefer-default-export': 'off',
    // 这里因为打包后elsint的校验问题，出现 Expected indentation of 4 spaces but found 6 代码规范格式上的报错
    // 所以展示关闭 这块的规范
    // “函数参数前的意外空格
    "space-before-function-paren": 0,
    //缩进规则
    "indent": 'off'
    // indent: [
    //   'warn',
    //   2,
    //   {
    //     SwitchCase: 1
    //   }
    // ],
    // semi: [2, 'always'],
    // 'use-isnan': 2,
    // 'no-unused-vars': [
    //   2,
    //   {
    //     vars: 'all',
    //     args: 'none'
    //   }
    // ],
    // 'vue/no-parsing-error': [
    //   2,
    //   {
    //     'x-invalid-end-tag': false
    //   }
    // ]
  },

  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['plugin:vue/essential']
}

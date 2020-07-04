const path = require('path');

module.exports = {
  title: 'Fluent UI',
  description: 'Fluent UI implements by Vue 2',
  themeConfig: {
    nav: [
      { text: 'Github', link: 'https://github.com/YanxinTang/fluent-ui', target:'_blank' }
    ],
    sidebarDepth: 0,
    sidebar: [
      {
        title: '开发指南',
        collapsable: false,
        children: [
          '/install'
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/icon',
          '/components/button'
        ]
      }
    ]
  },
  chainWebpack: (config) => {
    const packagesPath = path.resolve(process.cwd(), 'packages');
    const sourcePath = path.resolve(process.cwd(), 'src');
    config.resolve.alias.set('@packages', packagesPath);
    config.resolve.alias.set('@', sourcePath);
  }
}
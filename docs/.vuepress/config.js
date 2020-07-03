const path = require('path');

module.exports = {
  title: 'Fluent UI',
  description: 'Fluent UI implements by Vue 2',
  chainWebpack: (config) => {
    const packagesPath = path.resolve(process.cwd(), 'packages');
    config.resolve.alias.set('@packages', packagesPath)
  }
}
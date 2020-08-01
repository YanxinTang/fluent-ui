// const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const components = require('../components.json');

module.exports = merge(common, {
  mode: 'production',
  entry: components,
  output: {
    publicPath: 'dist',
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
    },
  },
});

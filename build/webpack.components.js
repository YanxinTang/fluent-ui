// const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const components = require('../components.json');

// const cwd = process.cwd();

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
  optimization: {
    minimize: false,
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

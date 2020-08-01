const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const cwd = process.cwd();

module.exports = merge(common, {
  mode: 'production',
  entry: path.resolve(cwd, 'src/index.js'),
  output: {
    publicPath: 'dist',
    filename: 'fluent-ui.js',
    library: 'fluent-ui',
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

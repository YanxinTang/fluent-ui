const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const cwd = process.cwd();

module.exports = merge(common, {
  mode: 'production',
  entry: path.resolve(cwd, 'src/index.js'),
  output: {
    publicPath: 'dist',
    filename: 'fluent-ui.min.js', // 改成自己的类库名
    library: 'fluent-ui', // 类库导出
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

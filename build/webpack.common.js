const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const cwd = process.cwd();

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  optimization: {
    minimize: false,
  },
  plugins: [new VueLoaderPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(cwd, 'src'),
      '@components': path.resolve(cwd, 'src/components'),
      '@themes': path.resolve(cwd, 'src/themes'),
    },
  },
};

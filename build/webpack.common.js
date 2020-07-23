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
  plugins: [new VueLoaderPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(cwd, 'src'),
      '@packages': path.resolve(cwd, 'packages'),
    },
  },
};

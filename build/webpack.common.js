const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')


const cwd = process.cwd();

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      '@packages': path.resolve(cwd, 'packages')
    }
  }
}
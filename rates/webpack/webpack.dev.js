const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    static: path.join(__dirname, 'public'),
    hot: true,
    port: 4002,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [new ReactRefreshWebpackPlugin()],
};

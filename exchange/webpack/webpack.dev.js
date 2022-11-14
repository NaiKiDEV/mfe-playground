const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    static: path.join(__dirname, 'public'),
    hot: true,
    port: 4001,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [new ReactRefreshWebpackPlugin()],
};

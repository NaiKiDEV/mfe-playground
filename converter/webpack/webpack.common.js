const { ModuleFederationPlugin } = require('webpack').container;
const { dependencies } = require('../package.json');

module.exports = {
  entry: './src/index',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  output: {
    publicPath: 'auto',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'converter',
      filename: 'remoteEntry.js',
      exposes: {
        './total-transactions-widget':
          './src/components/total-transactions-widget',
        './state': './src/states/state',
        './configure': './src/configure',
      },
      remotes: {
        'event-bus': 'event_bus@http://localhost:3099/remoteEntry.js',
      },
      shared: {
        ...dependencies,
        react: {
          singleton: true,
          eager: true,
          requiredVersion: dependencies['react'],
        },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: dependencies['react-dom'],
        },
      },
    }),
  ],
  stats: 'errors-only',
};

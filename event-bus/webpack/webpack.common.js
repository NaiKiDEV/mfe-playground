const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.ts',
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
      name: 'event_bus',
      filename: 'remoteEntry.js',
      exposes: {
        './event-bus': './src/event-bus',
      },
      shared: {
        react: {
          eager: true,
          requiredVersion: '^17.0.1',
        },
        'react-dom': {
          eager: true,
          requiredVersion: '^17.0.1',
        },
      },
    }),
  ],
  stats: 'errors-only',
};

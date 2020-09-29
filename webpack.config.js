const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const config = {
  mode: 'production',
  entry: {
    entry1: [path.join(__dirname, 'entry1.js')],
    entry2: [path.join(__dirname, 'entry2.js')],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  optimization: {
    runtimeChunk: {
      name: 'runtime',
    },
    splitChunks: {
      minSize: 0,
      maxAsyncRequests: Infinity,
      name(module, chunks, cacheGroupKey) {
        const moduleFileName = module
          .identifier()
          .split('/')
          .reduceRight((item) => item);
        return `${moduleFileName}`;
      },
    },
  },
  plugins: [new BundleAnalyzerPlugin({ analyzerMode: 'static' })],
};

module.exports = config;

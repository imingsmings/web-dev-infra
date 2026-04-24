const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function createWebpackConfig(env, argv) {
  const mode = argv.mode || 'development';
  const isProduction = mode === 'production';

  return {
    mode,
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: isProduction ? 'static/js/[name].[contenthash:8].js' : 'static/js/[name].js',
      chunkFilename: isProduction
        ? 'static/js/[name].[contenthash:8].chunk.js'
        : 'static/js/[name].chunk.js',
      publicPath: '/',
      clean: true
    },
    devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
    resolve: {
      extensions: ['.js', '.jsx', '.json']
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: path.resolve(__dirname, 'src'),
          use: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(png|jpe?g|gif|svg|eot|ttf|woff2?)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'static/media/[name].[hash:8][ext]'
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html')
      }),
      new MiniCssExtractPlugin({
        filename: isProduction ? 'static/css/[name].[contenthash:8].css' : 'static/css/[name].css',
        chunkFilename: isProduction
          ? 'static/css/[name].[contenthash:8].chunk.css'
          : 'static/css/[name].chunk.css'
      })
    ],
    devServer: {
      port: 3000,
      hot: true,
      static: {
        directory: path.resolve(__dirname, 'public')
      },
      historyApiFallback: true,
      proxy: [
        {
          context: ['/api', '/uem5000'],
          target: 'http://localhost:3100'
        }
      ]
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  };
};

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'

const config = {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction
        ? false
        : 'eval-cheap-module-source-map',
    entry: path.resolve(__dirname, '../src/load.js'),
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: 'loader.js',
        publicPath: '/',
        clean: false
    },
    devServer: {
        open: false,
        host: '0.0.0.0',
        port: '8000',
        static: {
            directory: path.join(
                __dirname,
                '../build/loader.js'
            ),
            publicPath: '/'
        }
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.cjs',
            '.mjs'
        ],
        modules: ['node_modules', '../node_modules']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(
                process.env.PWD,
                './src/index.html'
            ),
            inject: 'body',
            minify: {
                minifyCSS: true,
                minifyJS: true,
                collapseWhitespace: true
            }
        }),
        new AddAssetHtmlWebpackPlugin([
            {
                filepath: path.resolve(
                    process.env.PWD,
                    './build/vendor/react.dll.js'
                ),
                publicPath: '/vendor',
                outputPath: '../build/vendor'
            },
            {
                filepath: path.resolve(
                    process.env.PWD,
                    './build/vendor/moment.dll.js'
                ),
                publicPath: '/vendor',
                outputPath: '../build/vendor'
            }
        ])
    ]
}

module.exports = config

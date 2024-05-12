const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {
    IgnorePlugin,
    DllReferencePlugin
} = require('webpack')

const ctxPath = process.env.PWD

const isProduction = process.env.NODE_ENV === 'production'
const stylesHandler = MiniCssExtractPlugin.loader

const config = {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction
        ? false
        : 'eval-cheap-module-source-map',
    entry: path.resolve(__dirname, './src/index.tsx'),
    output: {
        path: path.resolve(
            __dirname,
            '../build/base-service'
        ),
        filename: 'base.js',
        publicPath: '/',
        clean: true
    },
    devServer: {
        open: false,
        host: '0.0.0.0',
        port: '9001',
        static: {
            directory: path.join(
                __dirname,
                '../build/base-service'
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
        modules: [
            'node_modules',
            path.resolve(ctxPath, '../node_modules')
        ]
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
                    },
                    {
                        loader: 'ts-loader'
                    }
                ]
            },
            {
                test: /\.s*css$/i,
                use: [
                    stylesHandler,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset'
            }
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: './index.html',
        //     inject: 'body',
        //     minify: {
        //         minifyCSS: true,
        //         minifyJS: true,
        //         collapseWhitespace: true
        //     }
        // }),
        // new AddAssetHtmlWebpackPlugin([
        //     {
        //         filepath: path.resolve(
        //             __dirname,
        //             './dist/vendor/react.dll.js'
        //         ),
        //         publicPath: '/vendor',
        //         outputPath: 'vendor'
        //     },
        //     {
        //         filepath: path.resolve(
        //             __dirname,
        //             './dist/vendor/antd.dll.js'
        //         ),
        //         publicPath: '/vendor',
        //         outputPath: 'vendor'
        //     }
        // ]),
        new MiniCssExtractPlugin({}),
        new IgnorePlugin({
            resourceRegExp: /^\.\/locale$/,
            contextRegExp: /moment$/
        }),
        new DllReferencePlugin({
            context: path.resolve(ctxPath, '../'),
            manifest: path.resolve(
                ctxPath,
                '../build/vendor/react-manifest.json'
            )
        }),
        new DllReferencePlugin({
            // context: path.resolve(ctxPath, '../'),
            manifest: path.resolve(
                ctxPath,
                '../build/vendor/moment-manifest.json'
            )
        })
    ]
}

module.exports = config

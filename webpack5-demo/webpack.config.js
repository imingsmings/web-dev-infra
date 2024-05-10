const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isProduction = process.env.NODE_ENV == 'production'
const stylesHandler = MiniCssExtractPlugin.loader

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundler.js',
        publicPath: '/omc/web'
    },
    devServer: {
        open: false,
        host: '0.0.0.0',
        static: {
            directory: path.join(__dirname, 'dist'),
            publicPath: '/omc/web'
        },
        client: {
            progress: true
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),

        new MiniCssExtractPlugin()

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/i,
                use: [
                    stylesHandler,
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset'
            }
        ]
    }
}

module.exports = () => {
    if (isProduction) {
        config.mode = 'production'
        config.devtool = false
    } else {
        config.mode = 'development'
        config.devtool = 'eval-cheap-module-source-map'
    }
    return config
}

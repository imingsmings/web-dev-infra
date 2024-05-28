const path = require('path')
const { DllPlugin, IgnorePlugin } = require('webpack')

const config = {
    mode: 'production',
    entry: {
        react: ['react', 'react-dom', 'antd'],
        moment: ['moment', 'lodash'],
        BaseRequest: [
            path.resolve(
                __dirname,
                '../BaseService/src/api/request.ts'
            )
        ]
    },
    output: {
        path: path.resolve(__dirname, '../build/vendor'),
        filename: '[name].dll.js',
        library: '[name]',
        clean: true
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
                            cacheDirectory: true,
                            configFile: path.resolve(
                                __dirname,
                                '../.babelrc'
                            )
                        }
                    }
                ]
            }
        ]
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
            path.resolve(__dirname, '../node_modules')
        ],
        fallback: {
            util: false
        }
    },
    plugins: [
        new IgnorePlugin({
            // resourceRegExp: /^\.\/locale\/$/,
            // contextRegExp: /moment$/
            checkResource: (resource, context) => {
                if (context.includes('moment')) {
                    if (
                        resource.endsWith('.js') &&
                        resource.includes('zh-cn')
                    ) {
                        return false
                    } else {
                        return true
                    }
                }
                return false
            }
        }),
        new DllPlugin({
            context: path.resolve(__dirname, '../'),
            path: path.resolve(
                __dirname,
                '../build/vendor',
                '[name]-manifest.json'
            ),
            name: '[name]',
            format: true
        })
    ]
}

module.exports = config

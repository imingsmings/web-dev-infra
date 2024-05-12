// import path from 'path'
// import { DllPlugin } from 'webpack'
const path = require('path')
const {
    DllPlugin,
    IgnorePlugin,
    DllReferencePlugin
} = require('webpack')

const config = {
    mode: 'production',
    entry: {
        react: ['react', 'react-dom', 'antd'],
        moment: ['moment']
    },
    output: {
        path: path.resolve(__dirname, '../build/vendor'),
        filename: '[name].dll.js',
        library: '[name]',
        clean: true
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
            // resourceRegExp: /^\.\/locale\/^([zh\-cn])\.js$/,
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

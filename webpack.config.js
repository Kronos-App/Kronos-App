const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, '/dist'),
        filename: 'app.js'
    }, 
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'ts-loader']
            }
        ]
    }, 
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = () => ({
    mode: 'development',
    entry: './src/app.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        inline: true,
        open: true,
        hot: true,
        historyApiFallback: true,
        port: 3005
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    target: 'web',
    plugins: [
        new HtmlWebPackPlugin({
            inject: true,
            template: path.join(__dirname, 'public', 'index.html')
        })
    ]
})

var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: {
        'got': './src/app/got/index.jsx'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|_spec\.jsx)/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        enforceExtension: false,
        extensions: ['.js', '.jsx'],
        alias: {
            Fixtures: path.resolve(__dirname, 'src/fixtures'),
            Reducers: path.resolve(__dirname, 'src/reducers'),
            Constants: path.resolve(__dirname, 'src/constants'),
            Services: path.resolve(__dirname, 'src/services'),
        }
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: '[name]/[name].js'
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        port: 3000,
        historyApiFallback: true,
        inline: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/templates/index.tpl.ejs',
            chunks: ['got'],
            appRoot: 'app-container',
            filename: 'got/index.html',
            inject: false
        })
    ]
};
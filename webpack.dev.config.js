var webpack = require('webpack');
var path = require('path');

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
        extensions: ['.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: '[name]/[name].js'
    }
};
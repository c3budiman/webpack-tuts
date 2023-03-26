const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: true
        },
        contentBase: './dist',
        port: 3000,
    },
    plugins: [
        new BundleAnalyzerPlugin()
    ]
});
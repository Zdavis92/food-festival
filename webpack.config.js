const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './assets/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    // Use plugins to define variables to use the unstalled npm package. When using libraries that depend on the use of global variables,
    // you must tell webpack to make exceptions for them using webpack.ProvidePlugin
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
    ],
    mode: 'development'
};
// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|.mjs|tsx|ts)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.svg$/,
                use: ['svg-inline-loader'],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/,
                type: 'asset/resource',
            },
        ],
    },
   
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html', // Path to your HTML template
            title: 'Your App Title', // Optional: You can set the title of your HTML document
        }),
    ],
};

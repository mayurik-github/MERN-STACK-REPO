let path = require("path"), //path module of node framework
HtmlWebpackPlugin = require('html-webpack-plugin'), //to load the index html file on request

config = {
    output: {
        path: path.join(__dirname, '/dist'), 
        filename: 'bundle.js'
    },
    devServer: {
        port: 9095,
        historyApiFallback : true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /nodeModules/,
                use: {
                  loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                exclude: /nodeModules/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                exclude: /nodeModules/,
                type: 'asset/resource',
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })] 
}

module.exports = config;
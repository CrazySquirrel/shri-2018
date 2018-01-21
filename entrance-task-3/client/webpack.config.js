const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                loader: 'file-loader',
                test: /\.(jpe?g|png|gif|svg)$/i,
                options: {
                  name: '[name]-[hash:8].[ext]',
                  publicPath: '/',
                  outputPath: 'src/images/'
                }
          }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 3000,
        historyApiFallback: true
    } 
}
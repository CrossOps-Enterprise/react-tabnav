const webpack = require('webpack')
const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 1
  entry: './src/index.js',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
    // new HtmlWebpackPlugin()
  ],

  devServer: {
    contentBase: './dist',
    hot: true
  }
}

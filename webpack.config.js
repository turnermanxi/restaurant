const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

  devServer: {
    static: './dist',
  },

  devtool: 'inline-source-map',

  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        title: 'Development'
    }),
  ],

  optimization: {
     runtimeChunk: 'single',
  },

};
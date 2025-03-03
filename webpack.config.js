const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  return {
    mode: env.mode ?? 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[contenthash].js',
      clean: true
    },
    plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') })],
  }
};
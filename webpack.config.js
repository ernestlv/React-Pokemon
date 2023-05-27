const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: "./src/main.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: 'source-map',
  devServer: {
    static: '.'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use:['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [new ESLintPlugin()]
};

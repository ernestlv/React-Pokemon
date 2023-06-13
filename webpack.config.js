const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: "./src/main.tsx",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: '.'
    }
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/i,
        use:['style-loader', 'css-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"]
      }
    ]
  },
  plugins: [new ESLintPlugin()]
};

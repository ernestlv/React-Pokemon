const path = require('path');

module.exports = {
  mode: 'development',
  entry: "./src/main.js",
  output: {
    filename: "main.js",
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
      }
    ]
  }
};

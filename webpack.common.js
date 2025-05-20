const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
mode: 'production',
  entry: path.join(__dirname, './src/scripts/app.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'), 
      filename: 'index.html',
    }),
  ],
};

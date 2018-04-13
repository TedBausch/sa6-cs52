//taken from code provided in short assignment

const env = process.env.NODE_ENV || 'development';
// set to 'production' or 'development' in your env

// setup webpack to understand html
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: env,
  entry: [ 'babel-polyfill', './src' ], // this is where our app lives
  devtool: 'source-map', // this enables debugging with source in chrome devtools
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        // use babel loader
        use: [
        { loader: 'babel-loader'}
      ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: './index.html',
    }),
  ],
};

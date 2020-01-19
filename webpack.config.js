const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

console.log('NODE_ENV-------'. process.env.NODE_ENV);
const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },

  devtool: isProduction ? false : 'source-map',
  //watch: true,

  devServer: {
    contentBase: './public',
  },

  optimization: {
    minimize: isProduction,
    minimizer: [new TerserPlugin()],
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader',
            options: { url: false } // tell css-loader to not package images referenced in css. perhaps re-activate this for base64 injection
          },
        ] // use
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  }
};


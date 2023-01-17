const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry: './src/main.js',    // single file
  entry: {                      // multiple files
    index: {
      import: './src/main.js',
      dependOn: 'shared',
    },
    another: {
      import: './src/another-module.js',
      dependOn: 'shared',
    },
    shared: 'lodash',
    cheatsheet: './src/js-tags/cheatsheet.js',
    bootstrapjs: './node_modules/bootstrap/dist/js/bootstrap.min.js',
    pagehome: './src/pages/home/index.js',
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '/public'),
    filename: '[name].bundle.js',   // multiple files
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
  devServer: {
    historyApiFallback: true,
    hot: "only", // hot:true
    port: 8001
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        }
      },
      {
        test: /\.(sass|css|scss)$/,
        use: [
          'style-loader', 'css-loader', 'sass-loader',
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [
                require("autoprefixer")()
              ],
            },
          },
        ]
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/faicon.ico',
    })
  ]
}
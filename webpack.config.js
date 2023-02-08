const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry: './src/main.js',    // single file
  entry: {                      // multiple files
    //bootstrapjs: './node_modules/bootstrap/dist/js/bootstrap.min.js',
    shared: 'lodash',
    another: {
        import: './node_modules/bootstrap/dist/js/bootstrap.min.js',
        dependOn: 'shared',
    },
    pagehome: './src/pages/home/index.js',
    pageblog: './src/pages/blog/index.js',
    index: {
        import: './src/main.js',
        dependOn: 'shared',
    },
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
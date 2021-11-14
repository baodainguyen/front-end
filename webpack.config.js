const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry: './src/main.js',
    entry: {
      index: {
        import: './src/main.js',
        dependOn: 'shared',
      },
      another: {
        import: './src/another-module.js',
        dependOn: 'shared',
      },
      shared: 'lodash',
    },
    mode: 'development',
    output: {
        path: path.join(__dirname, '/public'),
        // filename: 'index_bundle.js',
        filename: '[name].bundle.js',
        publicPath: '/'
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
                  'style-loader',
                  'css-loader',
                  {
                    loader: "postcss-loader",
                    options: {
                      plugins: () => [
                        require("autoprefixer")()
                      ],
                    },
                  },
                  'sass-loader',
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
            favicon: './src/faicon.ico'
        })
    ]
}
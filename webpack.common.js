const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
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
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Production',
            template: './src/index.html',
            favicon: './src/faicon.ico',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
        clean: true,
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
};
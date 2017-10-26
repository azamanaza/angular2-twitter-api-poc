var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var angularConfig = {

    entry: {
        polyfills: './angular-app/polyfills.ts',
        vendor: './angular-app/vendor.ts',
        app: './angular-app/main.ts'
    },
    devServer: {
        host: "local.twitter",
        port: 3000,
        compress: true,
        inline: false
    },
    output: {
        publicPath: '',
        path: path.resolve(__dirname, './dist'),
        filename: "[name].js",
    },
    module: {
        loaders: [
            // .ts files for TypeScript
            {
                test: /\.ts$/,
                loaders: [
                    'awesome-typescript-loader?{tsconfig: "tsconfig.json"}'
                ]
            },
            {
                test: /\.css$/,
                exclude: [/app(\\|\/)/],
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                import: true,
                                url: true,
                                minimize: true,
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.css$/,
                include: [/app(\\|\/)/],
                loader: "raw-loader"
            },
            {
                test: /\.css\.map$/,
                loader: "file-loader",
                options: {
                    name: "[name].[hash].[ext]"
                }
            },
            { test: /\.html$/, loader: 'raw-loader' },
            {
                test: /\.(eot(\?)?|ico(\?)?|otf(\?)?|ttf(\?)?|woff(\?)?|woff2(\?)?)/,
                loader: "file-loader",
                options: {
                    name: "assets/[name].[ext]"
                }
            },
            {
                test: /\.(gif|jpe?g|png|svg(\?)?)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "assets/[name].[ext]"
                        }
                    }
                ]

            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.html', '.css']
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)@angular/,
            path.resolve(__dirname, '../angular-app'),
            {
                // your Angular Async Route paths relative to this root directory
            }
        ),
        new HtmlWebpackPlugin({
            template: './angular-app/index.html'
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery',
            Popper: ['popper.js', 'default']
        }),
        new ExtractTextPlugin("[name].css"),
        new webpack.DefinePlugin({
            app: {
                environment: JSON.stringify(process.env.APP_ENVIRONMENT || 'development')
            }
        })
    ]
};

module.exports = [angularConfig];

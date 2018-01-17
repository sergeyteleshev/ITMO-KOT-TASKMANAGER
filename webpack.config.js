const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const NODE_ENV = process.env.NODE_ENV;

const config = {
    entry:     [  'babel-polyfill',
        'react-hot-loader/patch','./src/index.js'],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['env', {"modules": false}], 'react'],
                        plugins: ['react-hot-loader/babel']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }

        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
            NODE_ENV:JSON.stringify(NODE_ENV)
        }),
        new webpack.ProvidePlugin({
            // $: 'jquery',
            // jQuery: 'jquery',
        })
    ]
};
if (NODE_ENV === 'production') {
    config.output = {
        filename: 'bundle.min.js',
            path: path.resolve(__dirname, './build/'),
    };
    config.plugins.push(
        new webpack.optimize.ModuleConcatenationPlugin()
    );
    config.plugins.push(
        new webpack.optimize.CommonsChunkPlugin({
            children: true,
            async: true,
        })
    );
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            comments: false,
            compress: {
                sequences     : true,
                booleans      : true,
                loops         : true,
                unused      : true,
                warnings    : false,
                drop_console: true,
                unsafe      : true
            }
        })
    );
    config.plugins.push(
        new webpack.NoEmitOnErrorsPlugin()
    );
    config.plugins.push(
        new webpack.optimize.OccurrenceOrderPlugin()
    );
    config.plugins.push(
        new ExtractTextPlugin('styles.css')
    );
    config.plugins.push(
        new CleanWebpackPlugin(path.resolve(__dirname, './build/'))
    );
    config.plugins.push(
        new HtmlWebpackPlugin({
            title: 'SEO',
            template:'./src/template.html',
            filename:'Background.html',
            inject:false,
            hash:true,
            source:'',
            prefix:'{$wa_app_static_url}js/build/'
        })
    );

    config.module.rules.push(
        {
            test:  /\.(sass|scss)$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        });

} else {
    config.output = {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './build/'),
    };
    config.plugins.push(
        new HtmlWebpackPlugin({
            title: 'APP'    ,
            template:'./src/templateDev.html',
            filename:'./index.html',
            inject:false,
            prefix:'',
            source:'http://localhost'
        })
    );
    config. devtool ='inline-source-map';
    config.devServer = {
        contentBase: './index.html',
        hot: true,
        port: 3001,
    };
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin()
    );
    config.module.rules.push(
        {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }
    );
}
module.exports = config;
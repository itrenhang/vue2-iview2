var webpack = require('webpack');
var path = require('path');
module.exports = {
    // debug:true,
    entry: __dirname + "/src/js/main/main.js",
    output: {
        // path: __dirname + '/view',
        path: path.resolve(__dirname + '/view/outFile'),
        publicPath:'/outFile',
        chunkFilename: '[name].index.js?[chunkhash]',
        filename: 'index.js'
    },
    module: {
        // 加载器
        loaders: [
            // 解析.vue文件
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            // 转化ES6的语法
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            // 编译css并自动添加css前缀
            {
                test: /\.css$/,
                loader: 'style!css!'
            },
            //.scss 文件想要编译，scss就需要这些东西！来编译处理
            //install css-loader style-loader sass-loader node-sass --save-dev
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            // 图片转化，小于8K自动转化为base64的编码
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192'
            },
            //html模板编译？
            {
                test: /\.(html|tpl)$/,
                loader: 'html-loader'
            },
            // bootstrap 字体等文件编译
            {
                test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
                loader: "file-loader"
            }
        ]
    },
    babel: {
        presets: ['es2015'],
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.css', '.scss', '.vue'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            'vue$': path.join(__dirname, '/node_modules/vue/dist/vue.js'),
            'jquery': path.join(__dirname, 'src/lib/jquery.js')
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery"
        })
    ],
    devServer: {
        contentBase: "./view", //本地服务器所加载的页面所在的目录
        colors: true, //终端中输出结果为彩色
        historyApiFallback: true, //不跳转
        inline: true //实时刷新
    },
    // 开启source-map，webpack有多种source-map，在官网文档可以查到
    devtool: 'eval-source-map'

}
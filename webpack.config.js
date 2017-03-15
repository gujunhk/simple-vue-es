module.exports = {
    //devtool: 'cheap-module-source-map',
    //devtool: false,
    entry: {
        "index": "./dev/index.js",
        "about": ["babel-polyfill", "./dev/about.js"],
        "fetcher": "./dev/fetcher.js"
    },//定义要引入的js文件
    output: {
        path: __dirname,
        filename: './js/[name].js' //定义要输出的js文件
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'es2016', 'stage-0']
                }
            }
        ]
    },
    plugins: [
    ]
}
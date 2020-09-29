const path = require('path');

const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: './src/js/index.js',
    // mode: "development",
    watch: false,
    // ファイルの出力設定
    output: {
        //  出力ファイルのディレクトリ名
        path: `${__dirname}/dist`,
        filename: 'main.js',
    },
    devServer: {
        contentBase: outputPath,
    },
    module: {
        rules: [{
            // 拡張子 .js の場合
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                // Babel を利用する
                loader: 'babel-loader',
                // Babel のオプションを指定する
                options: {
                    presets: [
                        // プリセットを指定することで、ES2020 を ES5 に変換
                        '@babel/preset-env',
                    ],
                },
            }],
        }],
    },
};
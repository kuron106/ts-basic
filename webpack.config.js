const path = require('path')

//ウェブパックの設定
module.exports = {
    //エントリポイント
    entry:{
        //bundleに指定したTypeScriptファイルをトランスパイルする
        bundle: './src/index.ts'
    },
        //ウェブパックの出力先
    output:{
        //__dirnameは開発環境のルートディレクトリ
        path: path.join(__dirname,'dist'),
        //出力するファイル名 ここでは[bandle]となる
        filename: '[name].js'
    },
    //インポート・エクスポートでのファイル名解決
    resolve:{
        //拡張子の省略
        extensions: ['.ts','.js']
    },
    //開発用サーバーの設定   
    devServer:{
        //開発環境のディレクトリ
        contentBase: path.join(__dirname,'dist'),
        //テスト時に自動的にブラウザを開くかどうか
        open: true
    },
    //モジュールの設定
    module:{
        rules:[
            {
            //ローダとその対象ファイル
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    }

}
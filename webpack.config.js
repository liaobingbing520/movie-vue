/**
 * Created by Administrator on 2017/9/9.
 */
const htmlWebpackPlugin=require("html-webpack-plugin");
module.exports={
    entry:__dirname+'/src/main.js',
    output:{
       path:__dirname+'/dist',
      filename:'bundle.js',
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:'vue-loader'
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(jpg|jpeg|png|ttf|svg|gif)$/,
                use:'url-loader'
            },
            {
                test:/\.js/,
                use:'babel-loader',
                exclude:/node_modules/
            }
        ]
    },

    plugins:[
        new  htmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html'
        })
    ]
}
// 引入自动生成 html 的插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { join } = require("path");
// webpack.config.js
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  mode: "development",
  //指定入口 ，相对路径
  entry: "./src/main.js",
  //指定出口
  output: {
    // 出口路径 绝对路径
    path: join(__dirname, "lib"),
    // 出口文件名
    filename: "index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      //绝对路径
      template: join(__dirname, "./public/index.html"),
    }),
    new VueLoaderPlugin(),
  ],
  devServer: {
    port: 3000, // 端口号
    //yarn serve 自动打开浏览器
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/i,
        //从后往前解析
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(|gif|png)$/i,

        type: "asset",

        generator: {
          filename: "images/[hash:6][ext]",
        },
      },
      {
        test: /\.(|css|eot|svg|ttf|woff|woff2)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash:6][ext]",
        },
      },
      {
        test: /\.js$/i,
        use: ["babel-loader"],
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  
};

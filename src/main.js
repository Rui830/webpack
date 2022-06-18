// 模块化语法

/* 
Uncaught SyntaxError: Cannot use import statement outside a module (at index.js:2:1)

*/
import { add } from "./add.js";
import { tab } from "./tab.js";
tab();
add();

import "./styles/index.css";
import "./styles/index.less"

import gifSrc from './assets/dog.gif'
import gifSrc2 from "./assets/1.gif";

const gif = document.createElement('img')
const png = document.createElement("img");

gif.src = gifSrc;
png.src = gifSrc2;

document.body.appendChild(gif)
document.body.appendChild(png);

import './assets/fonts/iconfont.css'

const fn = () => {
  console.log('你好');
}
fn()

import App from './app.vue' // 根vue文件
import Vue from 'vue' // 引入vue.js对象

new Vue({ 
  render: h => h(App) // 渲染函数, 渲染App组件里的标签
}).$mount('#app') // 把vue文件的标签结构 -> 挂载到id为app的标签里

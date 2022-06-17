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

class App {
  static a = 123;
}

console.log(App.a);

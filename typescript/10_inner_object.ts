/** 内置对象：ts中定义内置定义好的类型 */

// 1. ECMAScript 内置对象： Boolean Error Date RegExp 等
// 他们的定义文件在 https://github.com/Microsoft/TypeScript/tree/master/src/lib
let b: Boolean = new Boolean(1)
let e: Error = new Error('error')
let d: Date = new Date()
let r: RegExp = /0-9/

// 2. DOM BOM 内置对象： Document HTMLElment Event NodeList 等
// 他们的定义文件在 https://github.com/Microsoft/TypeScript/tree/master/src/lib
let body: HTMLElement = document.body 
let allDiv: NodeList = document.querySelectorAll('div')
document.addEventListener('click', function(e: MouseEvent) {
  //
})

// 3. Node.js: 需要引入第三方声明文件
// npm i @types/node -D
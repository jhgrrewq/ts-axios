/** any 任意值用来表示允许赋值为任何类型 */

// 1. 普通类型在赋值过程 不允许改变类型，但是 any 类型可以被赋值为任何类型
let num: any = '7'
num = 7

// 2. 任意值上允许访问任何属性，调用任何方法，对他任意操作后返回内容类型也是任意值
let anyThing: any = 'h'
console.log(anyThing.myName)
anyThing.setName('jack')

// 3. 声明变量时如果没指定类型，则会识别为任意类型
let s
s = '7'
s = 7
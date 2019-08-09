/** 联合类型：取值可以为多种类型中的一种 */

// 1. 联合类型使用 | 分隔符
let myNum: string | number
myNum = 7
// myNum = true

// 2. 当 ts 不确定一个联合类型的变量是哪种类型时，只能访问联合类型的所有类型共有的属性或方法
function handle(something: string | number): string {
  // toString 是 string 和 number 的共有方法
  return something.toString()
  // length 不是 string 和 number 的共有方法
  // return something.length 
}

// 3. 联合类型的变量在被赋值的时候，会根据类型推断的规则推断出一个类型

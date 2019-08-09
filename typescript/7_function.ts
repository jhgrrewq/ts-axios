/** 函数类型 */
// 函数的输入输出都要进行约束

// 1. 函数声明
// 输入多余或少于要求的参数，是不允许的
function sum(x: number, y: number): number {
  return x + y
}
// sum(1)
// sum(1, 2, 3)

// 2. 函数表达式
// ts 中 => 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边数输出类型；注意区别 es6 箭头函数
let mySum: (x: number, y: number) => number = function(x: number, y: number): number {
  return x + y
}

// 3. 可选参数： 使用 ？ 表示可选参数； 可选参数必须接在必选参数后，可选参数后面不能再出现必选参数
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + ' ' + lastName
  } else {
    return firstName
  }
}
buildName('tom', 'cat')
buildName('tom')

// function buildName2(firstName?: string, lastName: string) {
//   if (firstName) {
//     return firstName + ' ' + lastName
//   } else {
//     return lastName
//   }
// }

// 4. 默认参数： es6 函数参数的默认值会被识别为可选参数，不受可选参数必须在必选参数后面的限制
function buildName3(firstName: string = '', lastName: string) {
  return firstName + ' ' + lastName
}
buildName3('a', 'b')
buildName3(undefined, 'b')

// 5. 剩余参数： es6 的 ...rest 方式获取函数的剩余参数
function push(arr: any[], ...items: any[]) {
  items.forEach(function(item) {
    arr.push(item)
  })
}
let a = []
push(a, 1, 2, 3)
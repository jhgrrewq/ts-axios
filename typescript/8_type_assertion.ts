/** 类型断言： 手动指定一个值的类型 */

// 1. 语法
// （<类型>变量） (必须用括号括起来)
// 变量 as 类型
// tsx (react 的 jsx 语法的 ts 版) 只能使用后一种


// 2. 应用：如将联合类型的变量指定为一个更具体的类型
// 当 ts 不确定一个联合类型的变量是哪个类型，只能访问该联合类型的所有类型共有的属性或方法
// 此时可以使用类型断言
function getLength(s: string | number): number {
  if ((<string>s).length) {
    return (<string>s).length
  } else {
    return s.toString().length
  }
}
// function getLength(s: string | number): number {
//   if (s.length) {
//     return s.length
//   } else {
//     return s.toString().length
//   }
// }

// 类型断言不是类型转换，断言成一个联合类型不存在的类型是不允许的
// function toBoolean(something: string | number): boolean {
//   // return Boolean(something)
//   return <boolean>something;
// }
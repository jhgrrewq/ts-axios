/** 数组类型定义 */

// 1. 类型[] 定义数组, 数组的项中不能出现其他类型
// 数组的一些方法的参数也会根据数组在定义时约定的类型进行限制
let array: number[] = [1, 2]
// let array: number[] = [1, 2, '2']
// array.push('8')

// 2. 数组泛型表示 Array<elemeType>
let array2: Array<number> = [1, 2]

// 3. 接口描述数组
interface NumberArray {
  [index: number]: number
}
let array3: NumberArray = [1, 2] // NumberArray 表示 index 类型只要是 number， 值的类型必须是 number

// 4. 任意类型的 数组
let array4: any[] = [1, '1']

// 5. 类数组不是数组类型 如果 arguments
// 常见的类数组都有自己的接口定义类型，如 IArguments, NodeList, HTMLCollection 等
function sum() {
  let args: IArguments = arguments
}
// function sum() {
//   let args: number[] = arguments
// }
/** 泛型：定义函数、类或接口时不预先指定类型，而在使用时再指定的一个特定 */

function createArray(length: number, value: any): Array<any> {
  let result = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}
createArray(3, 'x') // ['x', 'x', 'x']

// 1. 上述 Array<any> 允许数组的每一项为任意类型，但期望是数组的每一个都是参数 value 的类型
// 函数名后 <T>, T 指代任意输入的类型，之后的 value: T 和 Array<T> 可以使用，调用时可以指定 T 的具体类型，当然也可以不指定而是通过类型推断自动推算
function createArray2<T>(length: number, value: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}
createArray2<string>(3, 'x') // ['x', 'x', 'x']
createArray2(3, 'x') // ['x', 'x', 'x']

// 2. 多个类型参数：定义泛型可以一次定义多个类型参数
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}
swap([7, '7']) //  ['7', 7]

// 3. 泛型约束
// 函数内部使用泛型变量，因为事先不知道是哪种类型，不能随意操作他的属性或方法，可以对泛型进行约束
// 如下函数只允许传入含有 length 属性的变量
interface Lengthwise {
  length: number
}
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}
loggingIdentity({
  length: 19
})
// loggingIdentity(7)

// 多个类型参数之间也可相互约束
// 这里要求 T 继承 U，保证 U 中不会出现 T 中不存在的字段
function copyFields<T extends U, U>(target: T, source: U): T {
  for (let id in source) {
    target[id] = (<T>source)[id]
  }
  return target
}
let x = { a: 1, b: 2 }
copyFields(x, { b: 20 })

// 4. 泛型接口
// 4.1 可以使用泛型的接口定义函数
interface CreateArrayFunc {
  <T>(length: number, value: T): Array<T>
}
let createArray3: CreateArrayFunc

createArray3 = function<T>(length: number, value: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
      result[i] = value
  }
  return result
}
createArray3(3, 'x') // ['x', 'x', 'x']

// 4.2 可以将泛型参数提到接口名上
interface CreateArrayFunc2<T> {
  (length: number, value: T): Array<T>
} 
let createArray4: CreateArrayFunc2<any>

// 5. 泛型类: 泛型可用于类的类型定义
class GenericNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}
let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function(x, y) { return x + y }

// 6. 泛型参数的默认类型
// ts 2.3 之后可以为泛型中的类型参数指定默认类型，当使用泛型时没有在代码中直接指定类型参数，从实际参数也无法推测出来，这个默认类型就会起作用
function createArray5<T = string>(lenght: number, value: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
      result[i] = value
  }
  return result
}




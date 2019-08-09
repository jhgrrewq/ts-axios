/** ts 中使用接口 interface 定义对象的类型 */

// 接口是对行为的抽象，具体需要类去实现

// 1. 赋值时变量的形状必须和接口形状一致，定义的变量比接口少一些属性是不允许的, 多一些属性也不允许
interface Person {
  name: string
  age: number
}
let jack: Person = {
  name: 'jack',
  age: 20
}

// 2. 如果不想完全匹配一个形状，可使用可选属性, 在接口定义属性后加 ？
interface Person2 {
  name: string
  age?: number 
}
let jack2: Person2 = {
  name: 'jack'
}

// 3. 如果一个接口允许有任意的属性，可以使用如下方式
interface Person3 {
  name: string
  age?: number
  [propName: string]: any
}
let jack3: Person3 = {
  name: 'jack',
  gender: 'male'
}
// 一旦定义任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
// interface Person4 {
//   name: string
//   age?: number
//   [propName: string]: string
// }
// let jack4: Person4 = {
//   name: 'jack',
//   age: 20,
//   gender: 'male'
// }

// 4. 只读属性：如果希望对象的一些字段只在创建的时候，可以使用 readonly 定义只读属性
// 只读约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
interface Person5 {
  readonly id: number
  name: string
  age?: number
  [propName: string]: any
}
let jack5: Person5 = {
  id: 1,
  name: 'jack',
  gender: 'male'
}
// jack5.id = 2

// let jack6: Person5 = {
//   name: 'jack',
//   gender: 'male'
// }
// jack6.id = 2
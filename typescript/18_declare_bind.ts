/** 声明合并：如果定义两个相同名字的函数、接口或类，则他们会合并为一个类型 */

// 1. 函数的合并
// 可用于重载定义多个函数类型
function reverse(x: number): number
function reverse(x: string): string
function reverse(x: string | number): string | number {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''))
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('')
  }
}

// 2. 接口的合并
// 接口中的属性在合并时会简单合并到一个接口中
// 合并的属性的类型必须是唯一的
// 方法的合并与函数的合并一样
interface Alarm {
  price: number
  percent: number
  alert(s: string): string
}
interface Alarm {
  price: number
  weight: number
  alert(s: string, n: number): string
}
/** 
 * 相当于 
 * 
 * 
 * interface Alarm {
    price: number
    weight: number
    percent: number
    alert(s: string): string
    alert(s: string, n: number): string
  }
 */

 // 3. 类的合并与接口合并规则一致
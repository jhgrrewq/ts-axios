/** 元祖： 合并了不同类型的对象 */


// 注意区分 任意类型的数组，元祖的项的类型定义和赋值要一一对应
// 1. 可以只赋值给其中一项
// 2. 直接对元祖整体赋值或者初始化需要提供所有元祖类型指定的项
let tuple: [string, number]
tuple[1] = 1
tuple = ['jack', 2]

// 3. 添加越界的元素时，它的类型被限制为元祖中每个类型的联合类型
tuple.push('sdfa') // string | number
// tuple.push(true)
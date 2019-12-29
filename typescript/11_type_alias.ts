/** 类型别名 */

// 使用 type 创建类型别名
// 类型别名常用于联合类型
type Name = string
type NameResolve = () => string
type NameOrResolver = Name | NameResolve
function getName(n: NameOrResolver): Name {
  if (typeof n === 'string') {
    return n
  } else {
    return n()
  }
}
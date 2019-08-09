/** 字符串字面量类型 */

// 和类型别名一下，用 type 定义
// 用来约束取值只能是几个字符串中的一个

type EventName = 'click' | 'scroll' | 'mousemove'
function handleEvent(ele: Element, event: EventName) {
  // 
}
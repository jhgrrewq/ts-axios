/** 类和接口 */

// 1. 在 js 中一般一个类只能继承另一个类，对于不同类之间的一些共有特性，可以提取为接口，用 implement 关键字实现
interface Alarm {
  alert()
}

class Door {}

class SecurityDoor extends Door implements Alarm {
  alert() {
    console.log('SecurityDoor alert')
  }
}

class Car implements Alarm {
  alert() {
    console.log('Car alert')
  }
}

// 2. 一个类可以实现多个接口
interface Light {
  lightOn()
  lightOff()
}

class Car2 implements Alarm, Light {
  alert() {
    console.log('Car alert')
  }
  lightOn() {
    console.log('Car light on')
  }
  lightOff() {
    console.log('Car light off')
  }
}

// 3. 接口继承接口： 接口和接口直接可以使继承关系
interface LightableAlarm extends Alarm {
  ligntOn()
  ligntOff()
}

// 4. 接口继承类
class Point {
  x: number
  y: number
}
interface Point3d extends Point {
  z: number
}
let point3d: Point3d = {
  x: 1,
  y: 2,
  z: 3
}

// 5. 接口可以定义一个函数要符合的形状
interface SearchFunc {
  (source: string, subString: string): boolean
}
let mySearch: SearchFunc
mySearch = function(source: string, subString: string) {
  return source.search(subString) !== -1
}
// 函数可以有自己的属性和方法
interface Counter {
  (start: number): string
  interval: number
  reset(): void
}
function getCounter(): Counter{
  let counter = <Counter>function(start: number) {}
  counter.interval = 123
  counter.reset = function() {}
  return counter
}
let c = getCounter()
c(10)
c.reset()
c.interval = 5
/** 布尔值 */
var isDone = false;
// 使用构造函数 Boolean 创建的对象不是布尔值，是一个 Boolean 对象
// let createdByNewBoolean: boolean = new Boolean(1);
var createdByNewBoolean = new Boolean(1);
// 直接调用 Boolean 也会返回一个 boolean 类型
var createByBoolean = Boolean(1);
/** 数值 */
var decLiteral = 6;
var binaryLiteral = 6; // 二进制,会编译为十进制
var octalLiteral = 6; // 八进制, 会编译为十进制
var notNumber = NaN;
var infinityNumber = Infinity;
/** 字符串 */
var myName = 'jack';
var templateStr = "hello, my name is " + myName;
/** 空值 */
// js 中没有空值概念，ts 中用 void 表示没有任何返回值的函数
// 生命一个 void 类型的变量没有什么用，只能将他赋值为 undefined 和 null
function alertName() {
    console.log('hello, my name is jack');
}
var unusable = undefined;
/** null/undefined */
// undefined 类型的变量只能赋值为 undefined， null 类型变量只能赋值为 null
// 区别于 void， null 和 undefined 是所有类型子类型，也就是说 undefined 类型变量可以赋值给像 number 类型的变量
var num = undefined;
var u;
var numu = u;
// void 类型变量不能赋值给像 number 类型变量
// let v: void
// let numv: number = v

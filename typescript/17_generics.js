/** 泛型：定义函数、类或接口时不预先指定类型，而在使用时再指定的一个特定 */
function createArray(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
createArray(3, 'x'); // ['x', 'x', 'x']
// 1. 上述 Array<any> 允许数组的每一项为任意类型，但期望是数组的每一个都是参数 value 的类型
// 函数名后 <T>, T 指代任意输入的类型，之后的 value: T 和 Array<T> 可以使用，调用时可以指定 T 的具体类型，当然也可以不指定而是通过类型推断自动推算
function createArray2(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
createArray2(3, 'x'); // ['x', 'x', 'x']
createArray2(3, 'x'); // ['x', 'x', 'x']
// 2. 多个类型参数：定义泛型可以一次定义多个类型参数
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
swap([7, '7']); //  ['7', 7]
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentity({
    length: 19
});
// loggingIdentity(7)
// 多个类型参数之间也可相互约束
function copyFields(target, source) {
    for (var id in source) {
        target[id] = source[id];
    }
    return target;
}
var x = { a: 1, b: 2 };
copyFields(x, { b: 20 });

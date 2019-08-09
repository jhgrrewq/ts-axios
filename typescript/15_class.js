/** 类 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// es7 实例属性可以直接在类里面定义， es6 中只能在构造函数中 this.xxx 定义
// es7 中可以用 static 定义一个静态属性
var Animal0 = /** @class */ (function () {
    function Animal0() {
        this.name = 'jack';
        // ...
    }
    Animal0.num = 42;
    return Animal0;
}());
console.log(Animal0.num); // 42
// 1. ts 可以使用三种访问修饰符： public private protected
// public 修饰的属性或方法是公有的，可在任何地方被访问， 默认所有的属性和方法都是 public
// private 修饰的属性或方法是私有的，不能再声明它的类的外部访问
// private 修饰的属性或方法是受保护的，只能在自身或子类中被访问
// 2. 抽象类
// abstrct 用于定义抽象类和其中的抽象方法
// 抽象类不能被实例化
// 抽象类的抽象方法必须被子类实现
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.sayHi = function () {
        console.log("Meow, my name is " + this.name);
    };
    return Cat;
}(Animal));
var cat = new Cat('Tom');

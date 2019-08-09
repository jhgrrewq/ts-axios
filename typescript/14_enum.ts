/** 枚举类型： 用于取值被限定在一定范围的场景 */

// 1. 枚举类型使用 enum 关键字定义
// 枚举成员会被赋值从 0 开始递增的数字，也会对枚举值到枚举名进行反向映射
// enum Days { Sun, Mon, Tue, Wed, Thu, Fri, Sat }
/** 被编译为 
 * var Days;
  (function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
  })(Days || (Days = {}));

  0: "Sun"
  1: "Mon"
  2: "Tue"
  3: "Wed"
  4: "Thu"
  5: "Fri"
  6: "Sat"
  Fri: 5
  Mon: 1
  Sat: 6
  Sun: 0
  Thu: 4
  Tue: 2
  Wed: 3
 */

 // 2. 手动赋值
 // 未手动赋值的枚举项会接着上一个枚举项递增，如果未手动赋值的枚举项和手动赋值的重复， ts 是不会察觉
 enum Days2 { Sun = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat }
console.log(Days2["Sun"] === 3); // true
console.log(Days2["Wed"] === 3); // true
console.log(Days2[3] === "Sun"); // false
console.log(Days2[3] === "Wed"); // tru

// 手动赋值的枚举项可以不是数字，此时需要使用类型断言让 ts 忽略类型检查
enum Days3 { Sun = 7, Mon, Tue, Wed, Thu, Fri, Sat = <any>'S' }
/** 
 * var Days3;
(function (Days) {
    Days[Days["Sun"] = 7] = "Sun";
    Days[Days["Mon"] = 8] = "Mon";
    Days[Days["Tue"] = 9] = "Tue";
    Days[Days["Wed"] = 10] = "Wed";
    Days[Days["Thu"] = 11] = "Thu";
    Days[Days["Fri"] = 12] = "Fri";
    Days[Days["Sat"] = "S"] = "Sat";
})(Days3 || (Days3 = {}));
 */


// 手动赋值的枚举项也可为小数或者负数，此时后续未手动赋值的项递增步长仍未 1
enum Days4 { Sun = 7, Mon = 1.5, Tue, Wed, Thu, Fri, Sat }
console.log(Days4["Sun"] === 7) // true
console.log(Days4["Mon"] === 1.5) // true
console.log(Days4["Tue"] === 2.5) // true
console.log(Days4["Sat"] === 6.5) // true



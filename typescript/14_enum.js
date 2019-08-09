/** 枚举类型： 用于取值被限定在一定范围的场景 */
// 1. 枚举类型使用 enum 关键字定义
// 枚举成员会被赋值从 0 开始递增的数字，也会对枚举值到枚举名进行反向映射
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));

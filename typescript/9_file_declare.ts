/** 声明文件：使用第三方库时需要引用它的声明文件，才能获得对应的代码补全和接口提示等功能 */

// 1. 新语法索引
/**
 * declare var 声明全局变量
 * declare function 声明全局方法
 * declare class 声明全局类
 * declare enum 声明全局枚举类型
 * declare namespace 声明（含有子属性）全局对象
 * interface 和 type 声明全局类型
 * export 导出变量
 * export namespace 导出（含有子属性）对象
 * export default 默认导出（es6）
 * export =  导出模块（commonjs）
 * export as namespace 声明全局变量（UMD）
 * declare global 扩展全局变量
 * declare module 扩展模块
 * /// <reference /> 三斜线指令
 */

// 2. 声明语句
/** 
* 如在使用 jquery 中使用 jQuery('#foo') 
* ts 并不知道 $ 或 jQuery，需要用到 declare var 来定义类型
* 
* declare var jQuery: (selector: string) => any
* 
* 这里只会用于编译检查，在编译结果中会被删除
*/

// 3. 全局声明文件
// 通常会把声明语句放到单独文件中， 声明文件必须以 .d.ts 为后缀
// 一般讲声明文件放到项目中， *.ts 文件都可以获得声明文件的类型定义，如果无法解析，需要检查 tsconfig.json 中 file include exclude 的配置，是否包含这些声明文件

// 4. 第三方声明文件
// 一般使用 @types 通过以管理第三方库的声明文件
// @types 的使用直接 npm 安装对应的声明模块， 如 npm i @types/jquery -D
// 可以在 https://microsoft.github.io/TypeSearch/ 搜索需要的声明文件

// 5. 书写声明文件

/**
  基础数据类型
  1： 字符串 String
  2： 数值类型 Number
  3： 布尔类型  boolean
  4： 空值 null
  5： 未定义 undefined
  6： BigInt
  7:  Symbol
  复杂数据类型
  1： 数组
  定义方式两种： 
  2： 对象
  3： 函数
  TypeScript特有的类型 不确定类型
  any类型  表示所有的数据类型
  联合类型 | 
  元祖
 */

// 定义一个函数，参数定义类型  ES5定义
const Hello = function (name) {
  return "你的名字是" + name;
};

const hellos = Hello("粽子");
console.log(hellos);

//  ES6 和 TS 定义
const HelloTs = (nams: string | number) => `你的名字是${nams}`;
console.log(HelloTs("大粽子"));
console.log(HelloTs(11));

// any
let Anys: any = "34";
Anys = true;
console.log(Anys, typeof Anys);

// Array类型和联合类型结合
const arrs: (number | string)[] = [3, 5, "数", "组"];
console.log(arrs);

const Arrs: Array<number | string> = [2, 4, "数组", "类型"];
console.log(Arrs);

// 元祖: 也是一种数组
const Arrys: [number, string] = [12, '元祖'];
console.log(Arrys, typeof Arrys);
console.log(Array.isArray(Arrys));



// 数组相应API集合 栈 与 推  push() 、 pop()
Arrs.push("联合类型");
console.log(Arrs);

// 伪数组 arguments  或 Array.from() 转换成真正数组, 具有数组长度和属性；没有数组的方法

// 定义一个函数，参数不确定 定义了： IArguments
function Texts() {
  let args: IArguments = arguments
  console.log(args);
}

Texts();


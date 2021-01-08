/**
 * 接口 Interface 接口
 * 定义对象的属性和方法
 * 对类（class）抽象
 * ? 可选参数
 * 只读 readonly 只能在对象中使用，类似const
 */

interface IPersion{
  readonly id: number
  name: string;
  age: number;
  color?: string
}

let viking: IPersion = {
  id: 345,
  name: '粽子',
  age: 23,
}

console.log(viking, typeof(viking));

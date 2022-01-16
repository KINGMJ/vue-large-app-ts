function objectDemo() {
  // 可以使用多种类型
  let obj: object | null = { name: 'jack' }
  console.log(obj) // {name: 'jack'}
  obj = null
  console.log(obj) // null
}

function objectDemo1() {
  // 函数参数使用对象
  const printCoord = (pt: { x: number; y: number }): void => {
    console.log("The coordinate's x value is " + pt.x)
    console.log("The coordinate's y value is " + pt.y)
  }
  printCoord({ x: 3, y: 7 })

  // 可选属性
  const printName = (obj: { first: string; last?: string }): void => {
    // 使用可选链操作访问一个不存在的属性
    console.log(`${obj.first} ${obj.last?.toUpperCase()}`)
  }
  printName({ first: 'jack' }) // jack undefined
  printName({ first: 'alice', last: 'jason' }) // alice JASON
}

function arrayDemo() {
  // 数组注解的两种方式
  const list: number[] = [1, 2, 3]
  const list2: Array<number> = [1, 2, 3]
  console.log(list)
  console.log(list2)
}

function tupleDemo() {
  // 元组
  const x: [string, number] = ['hello', 10]
  console.log(x)
  // 访问一个已知索引的元素
  console.log(x[0])
  // 访问一个越界的元素，会报错
  // x[2] = 'world'

  // tuple 支持可选元素。可选的元组元素必须出现在末尾，并且会影响元组的长度
  type Either2dOr3d = [number, number, number?]
  const setCoordinate = (coord: Either2dOr3d) => {
    // 元组解构
    const [x, y, z] = coord
    console.log('元组的长度：' + coord.length)
    console.log(z)
  }
  setCoordinate([1, 2])
  setCoordinate([1, 2, 3])
}

function tupleDemo1() {
  // tuple 支持 rest 元素，它们必须是数组/元组类型
  type Rest1 = [string, number, ...boolean[]]
  type Rest2 = [string, ...number[], boolean]
  type Rest3 = [...string[], number, boolean]

  const a: Rest1 = ['jack', 1]
  const b: Rest2 = ['rose', 1, 2, 3, true]
  const c: Rest3 = ['jack', 'rose', 1, false]
}

function tupleDemo2() {
  // tuple 使用场景1：rest 参数
  const readBtnInput = (...args: [string, number, ...boolean[]]) => {
    const [name, version, ...input] = args
    console.log(input)
  }
  readBtnInput('button', 2, true, false)
}

/**
 * 1. 支持泛型，数组泛型：Array<元素类型>
 * 2. tuple元组：元组表示一个已知数量和类型的数组，各元素的类型不必相同
 * 3. enum枚举：
 *    a. 可以获取枚举的下标和名称；
 *    b. 枚举的下标可以根据它的前一个+1；
 *    c. 数字枚举在不带初始值默认从0取值
 *    d. 支持字符串枚举
 * 4. 类型断言：两种形式，”尖括号“语法与”as“，eslint的consistent-type-assertions不允许尖括号
 */

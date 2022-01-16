neverDemo()

// 基本类型注解
function basicDemo() {
  // 布尔值
  let isDone: boolean = false
  isDone = true

  // 数字
  const decimal: number = 7
  const hex: number = 0xf00d
  const binary: number = 0b1010
  const octal: number = 0o744

  // bigint
  // esnext 不支持这种写法，es2020 支持
  const foo: bigint = 100n
  const foo1: bigint = BigInt(100)

  // 字符串
  let color: string = 'blue'
  color = 'red'

  const name: string = 'Jack'
  const age: number = 17
  const sentence: string = `Hello, I am ${name}. I'll be ${age + 1} years old next month.`
}

// unKnow类型注解
function unKnowDemo() {
  let notSure: unknown = 4
  notSure = 'maybe a string'
  console.log(notSure)

  const maybe: unknown = true
  // unknown 只能分配给 any 和 unknown 类型
  const any: any = maybe
  const unknown: unknown = maybe
  // 不能将 unknown 分配给其他类型，编译失败
  // const boolean: boolean = maybe
  // const number: number = maybe

  // unknown 可以使用typeof等检查将其缩小到更具体的范围
  if (maybe === true) {
    const aBoolean: boolean = maybe
    console.log(aBoolean)
  }
  if (typeof maybe === 'string') {
    const aString: string = maybe
    console.log(aString)
  }
}

function anyDemo() {
  let notSure: any = 4
  notSure = 'maybe a string'
  notSure = false
  console.log(notSure)
  // 调用不存在的方法在编译阶段不会报错
  notSure.ifItExists()
  notSure.toFixed()
}

function neverDemo() {
  const error = (message: string): never => {
    throw new Error(message)
  }
  error('系统异常')
}

/**
 * 1. 基础类型：布尔值、数字、字符串、数组、元组、枚举、Any、Void、Null和Undefined、Never、Object
 * 2. 数字类型：number和bigint
 * 3. unknow未知类型：可以使用typeof等检查将其缩小到更具体的范围
 * 4. any任何类型：不希望类型检查器对这些值进行检查，直接通过编译阶段。any类型会破坏类型系统的健全性，不推荐使用。eslint的no-explicit-any会对any类型进行警告
 *    调用不存在的方法在编译阶段不会错误
 * 5. void没有任何类型：函数无返回值时可以使用；声明一个void类型的变量无任何意义，只能赋予undefined与null
 */

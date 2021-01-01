export default {
  bootstrap() {
    // this.basicDemo()
    // this.arrayDemo()
    // this.tupleDemo()
    // this.enumDemo()
    // this.enumDemo2()
    // this.enumDemo3()
    // this.unKnowDemo()
    // this.anyDemo()
    // this.objectDemo()
    this.assertionsDemo()
  },

  basicDemo() {
    // 布尔值
    let isDone: boolean = false
    isDone = true

    // 数字
    const decimal: number = 7
    const hex: number = 0xf00d
    const binary: number = 0b1010
    const octal: number = 0o744
    const big: bigint = 100n

    // 字符串
    let color: string = 'blue'
    color = 'red'

    const name: string = 'Jack'
    const age: number = 17
    const sentence: string = `Hello, I am ${name}. I'll be ${age + 1} years old next month.`

    console.log(isDone)
    console.log(decimal)
    console.log(hex)
    console.log(binary)
    console.log(octal)
    console.log(big)
    console.log(color)
    console.log(sentence)
  },

  arrayDemo() {
    const list: number[] = [1, 2, 3]
    const list2: Array<number> = [1, 2, 3]
    console.log(list)
    console.log(list2)
  },

  tupleDemo() {
    const x: [string, number] = ['Jack', 17]
    console.log(x)
  },

  enumDemo() {
    enum Color {
      Red,
      Green,
      Blue
    }
    const c: Color = Color.Blue
    console.log(c) // 2

    const colorName: string = Color[2]
    console.log(colorName) // 'Blue'
  },

  enumDemo2() {
    enum Color {
      Red = 3,
      Green,
      Blue
    }
    const c: Color = Color.Blue
    console.log(c) // 5

    const colorName: string = Color[5]
    console.log(colorName) // 'Blue'
  },

  enumDemo3() {
    enum Position {
      Up = 'UP',
      Down = 'Down',
      Left = 'Left',
      Right = 'Right'
    }
    const left: Position = Position.Left
    console.log(left)
  },

  unKnowDemo() {
    let notSure: unknown = 4
    notSure = 'maybe a string'
    console.log(notSure)

    const maybe: unknown = true
    // const aNumber: number = maybe
    // console.log(aNumber)
    if (maybe === true) {
      const aBoolean: boolean = maybe
      console.log(aBoolean)
    }
    if (typeof maybe === 'string') {
      const aString: string = maybe
      console.log(aString)
    }
  },

  anyDemo() {
    let notSure: any = 4
    notSure = 'maybe a string'
    notSure = false
    console.log(notSure)
    notSure.ifItExists()
    notSure.toFixed()
  },

  voidDemo(): void {
    const unusable: void = undefined
    console.log(unusable)
  },

  objectDemo() {
    let obj: object | null = { name: 'jack' }
    console.log(obj)
    obj = null
    console.log(obj)
  },

  assertionsDemo() {
    const someValue: unknown = 'this is a string'
    const strLength: number = (someValue as string).length
    // const strLength: number = (<string>someValue).length
    console.log(strLength)
  }
}

/**
 * 1. 基础类型：布尔值、数字、字符串、数组、元组、枚举、Any、Void、Null和Undefined、Never、Object
 * 2. 数字类型：number和bigint
 * 3. 支持泛型，数组泛型：Array<元素类型>
 * 4. tuple元组：元组表示一个已知数量和类型的数组，各元素的类型不必相同
 * 5. enum枚举：
 *    a. 可以获取枚举的下标和名称；
 *    b. 枚举的下标可以根据它的前一个+1；
 *    c. 数字枚举在不带初始值默认从0取值
 *    d. 支持字符串枚举
 * 6. unknow未知类型：可以使用typeof等检查将其缩小到更具体的范围
 * 7. any任何类型：不希望类型检查器对这些值进行检查，直接通过编译阶段。any类型会破坏类型系统的健全性，不推荐使用。eslint的no-explicit-any会对any类型进行警告
 *    调用不存在的方法在编译阶段不会错误
 * 8. void没有任何类型：函数无返回值时可以使用；声明一个void类型的变量无任何意义，只能赋予undefined与null
 * 9. 类型断言：两种形式，”尖括号“语法与”as“，eslint的consistent-type-assertions不允许尖括号
 */

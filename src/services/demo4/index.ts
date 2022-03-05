function interfaceDemo1() {
  function printLabel(labeledObj: { label: string }): void {
    console.log(labeledObj.label)
  }
  const myObj = { size: 10, label: 'Size 10 Object' }
  printLabel(myObj)
}

function interfaceDemo2() {
  // 使用 interface 替代 demo1 的写法
  interface LabeledValue {
    label: string
  }
  function printLabel(labeledObj: LabeledValue): void {
    console.log(labeledObj.label)
  }
  const myObj = { size: 10, label: 'Size 10 Object' }
  printLabel(myObj)
}

function interfaceDemo3() {
  // 可选属性
  interface SquareConfig {
    color?: string
    width?: number
  }
  function createSquare(config: SquareConfig): { color: string; area: number } {
    const newSquare = { color: 'white', area: 100 }
    // 可选属性需要判断属性是否存在，才能使用
    if (config.color) {
      newSquare.color = config.color
    }
    if (config.width) {
      newSquare.area = config.width * config.width
    }
    // 不存在的属性，会编译失败
    // if (config.col) {
    //   newSquare.color = config.col
    // }
    return newSquare
  }
  const mySquare = createSquare({ color: 'black' })
  console.log(mySquare)
}

function interfaceDemo4() {
  // 只读属性，只有在刚创建的时候可以修改值
  interface Point {
    readonly x: number
    readonly y: number
  }
  const p1: Point = { x: 5, y: 5 }
  // 编译失败
  // p1.x = 10 /
}

function interfaceDemo5() {
  let a: number[] = [1, 2, 3, 4]
  const ro: ReadonlyArray<number> = a
  // 编译失败，数组只读
  // ro[0] = 2

  // 编译失败，不能赋值到一个普通数组
  // a = ro
  // 可以使用类型断言来进行复制
  a = ro as number[]
}

function interfaceDemo6() {
  interface SquareConfig {
    color?: string
    width?: number
  }
  function createSquare(config: SquareConfig): { color: string; area: number } | null {
    if (config.color && config.width) {
      return { color: config.color, area: config.width * config.width }
    }
    return null
  }
  // 接口额外属性检查
  // 不存在的属性，会编译失败
  // let mySquare = createSquare({ colour: 'red', width: 100 })

  // 使用以下方式可以绕开
  // 1. 类型断言
  const mySquare = createSquare({ colour: 'red', width: 100 } as SquareConfig)
  console.log(mySquare) // null

  // 2. 直接将对象赋值给另一个变量
  const squareOptions = { colour: 'red', width: 100 }
  const mySquare1 = createSquare(squareOptions)
  console.log(mySquare1)
}

function interfaceDemo7() {
  // 接上个demo
  // 3. 索引签名
  interface SquareConfig {
    color?: string
    width?: number
    // 任意数量的其他属性
    [propName: string]: any
  }
  function createSquare(config: SquareConfig): { color: string; area: number } | null {
    if (config.color && config.width) {
      return { color: config.color, area: config.width * config.width }
    }
    return null
  }
  const mySquare = createSquare({ colour: 'red', width: 100, type: 1 })
  console.log(mySquare) // null
}

export default {
  bootstrap() {
    // this.interfaceDemo1()
    // this.interfaceDemo2()
    // this.interfaceDemo3()
    // this.interfaceDemo4()
    // this.interfaceDemo5()
    // this.interfaceDemo6()
    // this.interfaceDemo7()
    this.interfaceDemo8()
  },

}

/**
 * 1. typescript 的 duck typing（鸭子类型）
 * 2. interfaceDemo1里的写法可以用 interface 来替代
 * 3. 类型检查不会去检查属性的顺序，只要相应属性存在并且类型也是对的就可以
 * 4. 可选属性接口：在可选属性名字定义的后面加一个 ？ 符号，好处是对可能存在的属性进行预定义；可以捕获引用了不存在的属性时的错误
 * 5. 只读属性：在属性名前用 readonly 来指定只读属性
 * 6. ReadonlyArray<T>类型，与Array<T>相似，只是把所有可变方法去掉了，可以确保数组创建后再也不能被修改
 * 7. ReadonlyArray赋值到一个普通数组，可以通过类型断言
 * 8. readonly 与 const，作为变量使用const，作为属性使用readonly
 * 9. 额外的属性检查：使用类型断言，索引签名或将对象赋值给另一个变量绕开检查
 */

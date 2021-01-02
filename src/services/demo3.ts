export default {
  bootstrap() {
    // this.indexableTypesDemo1()
    // this.indexableTypesDemo2()
    // this.indexableTypesDemo3()
    this.indexableTypesDemo4()
  },

  indexableTypesDemo1() {
    interface StringArray {
      [index: number]: string
    }
    const myArray: StringArray = ['Bob', 'Jack']
    console.log(myArray[0])

    interface StringObject {
      [key: string]: string
    }
    const myObj: StringObject = { name: 'Jack', sex: 'Male' }
    console.log(myObj.name)
    // eslint-disable-next-line dot-notation
    console.log(myObj['name'])
    // 间接方式
    const name = 'name'
    console.log(myObj[name])
  },

  indexableTypesDemo2() {
    // error
    interface Foo {
      [key: string]: string
      length: number
    }

    // success
    interface Foo1 {
      [key: string]: string
      x: string
      y: string
      1: string
    }
    const foo: Foo1 = { x: '10', y: '10', z: '10', 1: '12' }
    console.log(foo)
    console.log(foo[1])
    console.log(foo['1'])
    // eslint-disable-next-line dot-notation
    console.log(foo['x'])
  },

  indexableTypesDemo3() {
    interface Person {
      [key: string]: string | number
      [index: number]: string
      age: number
    }
    const person: Person = { name: 'Jack', age: 18, 100: '100' }
    console.log(person)
    console.log(person.name)
    console.log(person[100])
    console.log(person['100'])
  },

  indexableTypesDemo4() {
    interface StringArray {
      readonly [key: string]: string
    }
    interface NumberArray {
      readonly [index: number]: string
    }
    // 索引签名为 string 不能声明为一个数组
    const myString: StringArray = ['jack', 'rose']
    // 但是索引签名为 number 可以声明为对象
    const myNumber: NumberArray = { 1: 'jack', 2: 'rose' }
    console.log(myString)
    console.log(myNumber)
  }
}

/**
 * 1. TypeScript 支持两种索引签名：字符串和数字
 * 2. 在声明一个索引签名时，所有明确的成员类型都必须符合索引签名的类型
 * 3. 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。
 *    这是因为使用number来索引时，JavaScript会将它转换成string然后再去索引对象
 * 4. 可以将索引签名设置为只读
 */

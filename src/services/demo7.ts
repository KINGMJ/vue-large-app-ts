export default {
  bootstrap() {
    this.genericsDemo1()
  },

  genericsDemo1() {
    function identify<T>(arg: T): T {
      return arg
    }
    // 泛型的使用：传入参数时指定类型参数；使用类型推论
    const output = identify<string>('myString')
    console.log(output)

    const output1 = identify(123)
    console.log(output1)
  }
}

function unionDemo1() {
  // 对联合类型的操作必须满足每个成员的类型
  const printId = (id: number | string) => {
    // 不能调用该方法，因为 number 类型没有该函数
    // console.log(id.toUpperCase())

    // 缩小检查范围
    if (typeof id === 'string') {
      console.log(id.toUpperCase())
    } else {
      console.log(id)
    }
  }

  printId('jack') // JACK
  printId(123) // 123
}

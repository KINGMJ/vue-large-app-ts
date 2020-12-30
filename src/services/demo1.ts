export default {
  bootstrap() {
    this.basicTypes()
  },

  basicTypes() {
    // 布尔值
    let isDone: boolean = false
    isDone = true

    // 数字
    let decimal: number = 7
    decimal = '123'

    const hex: number = 0xf00d
    const binary: number = 0b1010
    const octal: number = 0o744
    const big: bigint = 100n
    console.log(isDone)
    console.log(decimal)
    console.log(hex)
    console.log(binary)
    console.log(octal)
    console.log(big)
  }
}

/**
 * 1. 基础类型
 */

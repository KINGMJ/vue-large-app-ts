export default {
  bootstrap() {
    this.symbolsDemo1()
  },

  symbolsDemo1() {
    const sym1 = Symbol('key')
    const sym2 = Symbol('key')
    console.log(sym1)
    console.log(typeof sym1)
    // console.log(sym1 == sym2)
    console.log(sym2.description)
  }
}

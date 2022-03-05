function interfaceDemo1() {
  interface SearchFunc {
    (source: string, subString: string): boolean
  }
  const mySearch: SearchFunc = function(src: string, sub: string): boolean {
    const result = src.search(sub)
    return result > -1
  }
  console.log(mySearch('hello world', 'world'))
}

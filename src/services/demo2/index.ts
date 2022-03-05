function funcDemo1() {
  // 可选参数，用 ？ 来实现
  function buildName(firstName: string, lastName?: string) {
    if (lastName) {
      return `${firstName}${lastName}`
    }
    return firstName
  }
  const result1 = buildName('Bob')
  console.log(result1)

  // 编译时出错，参数个数不对
  // const result2 = buildName('Bob', 'Adams', 'Sr.')

  const result3 = buildName('Bob', 'Adams')
  console.log(result3)
}

function funcDemo2() {
  // 默认参数
  function buildName(firstName = 'Will', lastName: string) {
    return `${firstName} ${lastName}`
  }
  // 参数太少
  // const result1 = buildName('Bob')

  // 参数过多
  // const result2 = buildName('Bob', 'Adams', 'Sr.')

  const result3 = buildName('Bob', 'Adams')
  console.log(result3)

  // 默认参数在前面，必须传入 undefined 来获取默认值
  const result4 = buildName(undefined, 'Adams')
  console.log(result4)
}

function funcDemo3() {
  // 剩余参数
  function buildName(firstName: string, ...restOfName: string[]) {
    return `${firstName} ${restOfName.join(' ')}`
  }
  const empoyeeName = buildName('Joseph', 'Samuel', 'Lucas', 'Mackinzie')
  console.log(empoyeeName)
}

function funcDemo4() {
  // 对象作为参数
  function printName(obj: { first: string; last?: string }) {
    console.log(obj.first)
    console.log(obj.last)
  }
  printName({ first: 'Rose', last: 'Je' })
}

function funcDemo5() {
  // 函数重载
  const suits = ['hearts', 'spades', 'clubs', 'diamonds']
  function pickCard(x: { suit: string; card: number }[]): number
  function pickCard(x: number): { suit: string; card: number }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function pickCard(x: any): any {
    if (typeof x === 'object') {
      const pickedCard = Math.floor(Math.random() * x.length)
      return pickedCard
    }

    if (typeof x === 'number') {
      const pickedSuit = Math.floor(x / 13)
      return { suit: suits[pickedSuit], card: x % 13 }
    }
  }
  const myDeck = [
    { suit: 'diamonds', card: 2 },
    { suit: 'spades', card: 10 },
    { suit: 'hearts', card: 4 }
  ]
  console.log(pickCard(myDeck))
}

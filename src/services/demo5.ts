export default {
  bootstrap() {
    // this.classDemo1()
    this.classDemo2()
  },

  classDemo1() {
    class Greeter {
      private greeting: string
      constructor(message: string) {
        this.greeting = message
      }

      greet() {
        return `Hello, ${this.greeting}`
      }
    }

    const greeter: Greeter = new Greeter('world')
    console.log(greeter.greet())
  },

  classDemo2() {
    class Greeter {
      static standardGreeting = 'Hello, there'
      greeting!: string
      greet() {
        if (this.greeting) {
          return `Hello, ${this.greeting}`
        } else {
          return Greeter.standardGreeting
        }
      }
    }

    const greeter1: Greeter = new Greeter()
    console.log(greeter1.greet())
    const GreeterMarker: typeof Greeter = Greeter
    GreeterMarker.standardGreeting = 'Hey there!'
    const greeter2: Greeter = new GreeterMarker()
    console.log(greeter2.greet())
  }
}

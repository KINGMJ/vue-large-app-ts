export default {
  bootstrap() {
    // this.classTypesDemo1()
    // this.classTypesDemo2()
    // this.classTypesDemo3()
    // this.classTypesDemo4()
    // this.classTypesDemo5()
    this.classTypesDemo6()
  },

  classTypesDemo1() {
    interface ClockInterface {
      currentTime: Date
      setTime(d: Date): void
      getTime(): Date
    }

    class Clock implements ClockInterface {
      currentTime!: Date
      constructor(d: Date) {
        this.setTime(d)
      }

      setTime(d: Date) {
        this.currentTime = d
      }

      getTime() {
        return this.currentTime
      }
    }

    const clock = new Clock(new Date())
    console.log(clock.getTime())
  },

  classTypesDemo2() {
    interface ClockInterface {
      hour: number
      minute: number
      tick(): void
    }
    interface ClockConstructor {
      new (hour: number, minute: number): ClockInterface
    }

    function createClock(Ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
      return new Ctor(hour, minute)
    }

    class DigitalClock implements ClockInterface {
      hour: number
      minute: number
      constructor(h: number, m: number) {
        this.hour = h
        this.minute = m
      }

      tick() {
        console.log(`beep beep, ${this.hour}:${this.minute}`)
      }
    }

    class AnalogClock implements ClockInterface {
      hour: number
      minute: number
      constructor(h: number, m: number) {
        this.hour = h
        this.minute = m
      }

      tick() {
        console.log(`tick tick, ${this.hour}:${this.minute}`)
      }
    }

    const digital = createClock(DigitalClock, 12, 17)
    const analog = createClock(AnalogClock, 7, 32)
    digital.tick()
    analog.tick()
  },

  classTypesDemo3() {
    interface Shape {
      color: string
    }
    interface Square extends Shape {
      sideLength: number
    }
    const square = {} as Square
    square.color = 'blue'
    square.sideLength = 10
    console.log(square)
  },

  classTypesDemo4() {
    interface Shape {
      color: string
    }
    interface PenStroke {
      penWidth: number
    }
    interface Square extends Shape, PenStroke {
      sideLength: number
    }
    const square = {} as Square
    square.color = 'blue'
    square.sideLength = 10
    square.penWidth = 4
    console.log(square)
  },

  classTypesDemo5() {
    interface Counter {
      (start: number): string
      interval: number
      reset(): void
    }

    function getCounter(): Counter {
      const counter = function(start: number) {
        return start.toString()
      } as Counter
      counter.interval = 123
      counter.reset = function() {
        console.log('reset')
      }
      return counter
    }
    const c = getCounter()
    console.log(c(10))
    c.reset()
    c.interval = 5.0
  },

  classTypesDemo6() {
    class Control {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      private state: any
    }
    interface SelectableControl extends Control {
      select(): void
    }

    class Button extends Control implements SelectableControl {
      select() {
        console.log('button select')
      }
    }
    class TextBox extends Control {
      select() {
        console.log('text box select')
      }
    }

    // class Image implements SelectableControl {
    //   select(
    //     console.log('image seelct')
    //   )
    // }
    new Button().select()
    new TextBox().select()
  }
}

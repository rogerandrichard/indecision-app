
class Person {
  constructor(name = 'Pee', age = 0){
    this.name = name
    this.age = age
  }

  getGreeting(){
    return `Hi ${this.name}`
  }

  getDescription(){
    return `${ this.name } is ${ this.age } year(s) old`
  }
}

class Student extends Person {
  constructor(name, age, major=undefined){
    super(name, age)
    this.major = major
  }

  getDescription(){
    let desc = super.getDescription()
    if(this.hasMajor()){
      desc = `${ desc } and studying ${this.major}`
    }
    return desc
  }

  hasMajor(){
    return !!this.major
  }

}

class Traveler extends Person {
  constructor(name, age, homeLocation='Parts Unknown'){
    super(name, age)
    this.homeLocation = homeLocation
  }

  hasHomeLocation(){
    return !!this.homeLocation
  }

  getGreeting(){
    let desc = super.getGreeting()
    if(this.homeLocation){
      desc = `${desc}. I am from ${this.homeLocation}`
    }
    return desc
  }
}

const me = new Traveler('Mike', 30, 'Oro')

const other = new Traveler()

console.log(me)

console.log(me.getGreeting())

console.log(other.getGreeting())




// const me = new Person('Mike', 30)
//
// const other = new Person()
//
// console.log(me.getDescription())
//
// console.log(other.getDescription())

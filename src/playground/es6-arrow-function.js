// const square = function(x){
//   return x*x
// }
//
// console.log(square(5))
//
// const squareI = x=>x*x
//
// console.log(squareI(8))

// const fullName = 'Mike Smith'
//
// const getFirstName = (fullName) => fullName.split(' ')[0]
//
// console.log(getFirstName(fullName))

const multNums = {
  numbers: [2,4,6,8,10],
  multiplyBy: 4,
  multiply(){
    return this.\numbers.map(number=>number * this.multiplyBy)
  }
}

console.log(multNums.multiply())

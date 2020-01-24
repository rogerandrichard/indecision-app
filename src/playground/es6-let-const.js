var nameVar = 'Andrew'
var nameVar = 'Mike'
console.log('nameVar', nameVar);

let nameLet = 'Jen'
nameLet = 'Barb'
console.log('nameLet', nameLet);

const nameConst = 'Reid'
console.log('nameConst', nameConst);


function getPetName(){
  const petName = 'Hal'
  return petName
}

const petName = getPetName()

console.log(petName)

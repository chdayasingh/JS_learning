console.log("TUT:59")

const a = "this is"
const b = "this is"
// console.log(a===b)

const sym1 = Symbol("My identifier")
const sym2 = Symbol("My identifier")
console.log(typeof sym1)
console.log(sym1===sym2)

const k1 = Symbol("My identifier for k1")
const k2 = Symbol("My identifier for k2")

let myObj={}
myObj[k1]="Harry"
myObj[k2]="Rohan"
myObj['name']="Ajay"
console.log(myObj)
// console.log(myObj[k1])
// console.log(myObj[k2])

// console.log(Object.keys(myObj))

// for(key in myObj){
//     console.log(key,myObj[key])
// }

console.log(JSON.stringify(myObj))
console.log('TUT:57')

const myMap = new Map();
// console.log(myMap)

const key1="mystr", key2={},key3=function(){}

myMap.set(key1,"this is my string")
myMap.set(key2,"this is a blank object")
myMap.set(key3,"This is empty function");

console.log(myMap)

let value1=myMap.get(key1)
// console.log(value1);
// console.log(myMap.size)


// for(let key of myMap){
//     console.log(key)
//     // console.log("Inside for loop")
// }
// for(let [key,value] of myMap){
//     console.log(key,value)
//     // console.log("Inside for loop")
// }

// console.log(myMap.keys())
// console.log(myMap.values())

// for(let key of myMap.keys()){
//     console.log(key)
// }
// for(let key of myMap.values()){
//     console.log(key)
// }

// myMap.forEach((value,key) => {
//     console.log("key",key,"value is",`"${value}"`)
// });

let myArray=Array.from(myMap)
// console.log("Map to Array is",myArray)

let myKeysArray = Array.from(myMap.keys())
console.log("Map'keys to Array is",myKeysArray)
let myValuesArray = Array.from(myMap.values())
console.log("Map'values to Array is",myValuesArray)


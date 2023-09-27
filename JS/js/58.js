console.log("TUT:58")

// set stores unique values

const mySet = new Set();
console.log(mySet)

mySet.add('this');
mySet.add('is');
mySet.add('set');
mySet.add('this');
mySet.add('number');
mySet.add(1);
mySet.add(true);

console.log("Now SET looks",mySet);

const mySet2 = new Set([1,45,1,"this",false,{a:4,b:5},"this"])
console.log(mySet2)
// console.log(mySet2.size)
// console.log(mySet2.has(45))

// console.log("Set before removal",mySet2,"Has 45:",mySet2.has(45))
// mySet2.delete(45);
// console.log("Set after removal",mySet2,"Has 45:",mySet2.has(45))

// for(let item of mySet2){
//     console.log(item)
// }
// mySet.forEach(element => {
//     console.log("Item is :",element)
// });


let arr1=[1,2,2,3,9,4,2,1,5,7,9,3,1,6]
console.log(arr1)

const mySet3= new Set(arr1)
let arr1New= Array.from(mySet3)
console.log(arr1New)

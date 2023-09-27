// console.log(Object)

let arr = [];
console.log(arr);

// property decripter is a object that describe the properties of an object
let propertyDescripter = Object.getOwnPropertyDescriptor(arr.__proto__, "filter")

console.log(propertyDescripter);


// see the prototype of any object
let my_arr = [];
console.log(Object.getPrototypeOf(arr));
console.log(arr.__proto__);
console.log(Array.prototype);
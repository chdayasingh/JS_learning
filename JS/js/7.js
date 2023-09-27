console.log('tut:7');

let marks=[34,45,23,89,67];
const fruits=['orange','apple','pineaple'];
const mixed = [34,'str',89,[1,2,3]]

// console.log(marks);
// console.log(fruits);
// console.log(mixed);

const arr= new Array(1,2,3,'tree');
// console.log(arr);
// console.log(arr.length);
// console.log(typeof arr);

// console.log(arr.isArray('tree'));

arr[0]='park';
// console.log(arr);

let arrelement=arr[1];
// console.log(arrelement);

let value = marks.indexOf(45);
// console.log(value);

marks.push(95);
// console.log(marks);
// console.log(marks.push(99)); //gives 99 is 8th element is array
// console.log(marks);

marks.unshift(55);
// console.log(marks);
// console.log(marks.unshift(1));

marks.pop();
// console.log(marks);
marks.shift();
// console.log(marks);

// marks.reverse();


let marks2=[1,2,3,4,5]
marks.concat(marks2)
// console.log(marks);

marks=marks.concat(marks2)
// console.log(marks);

let myobj={
    'first name':'daya',
    city:'delhi',
    above20:true,
    marks: [1,2,3,4]
}

console.log(myobj);
console.log(myobj.city);
console.log(myobj['city']);












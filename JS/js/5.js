let marks=34;
console.log(marks);
console.log(typeof marks);
console.log(marks, (typeof marks));
console.log(marks + (typeof marks));

marks=String(34);
console.log(marks, (typeof marks));

let boolean = true;
console.log(boolean, (typeof boolean));
boolean = String(true);
console.log(boolean, (typeof boolean));

let arr= [1,3,4,5,6];
console.log(arr, (typeof arr));
console.log(arr.length);

arr= String([1,3,4,5,6]);
console.log(arr, (typeof arr));
console.log(arr.length);

let i=8;
console.log(i, (typeof i));
console.log(i.toString());
console.log(typeof i);

let stri= Number('345d5');
console.log(stri, (typeof stri));

stri = Number(false);
console.log(stri, (typeof stri));

stri = Number([1,2,3,4,5,6]);
console.log(stri, (typeof stri));

let num=Number('34.563785');
console.log(num, (typeof num));

num=parseInt('34.98334')
console.log(num, (typeof num));
num=parseFloat('34.98334')
console.log(num, (typeof num));

console.log(num.toFixed(), (typeof num));
console.log(num.toFixed(2), (typeof num));


let myStr='3453';
let myNum=45;
console.log(myStr + myNum);
myStr = Number('3453')
console.log(myStr + myNum);




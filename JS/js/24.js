console.log("TUT:24");

let today = new Date();
// console.log(today);
// console.log(typeof today);


let otherDate= new Date('8-4-2001 02:23:59')
otherDate= new Date('Jan 1 1999')
// console.log(otherDate);

let a=otherDate.getDay();
a= otherDate.getMonth();
a= otherDate.getHours();
a= otherDate.getFullYear()

a=otherDate.getMilliseconds();

otherDate.setDate(23);

console.log(otherDate);

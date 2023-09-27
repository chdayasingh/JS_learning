console.log("This is Tut:9");

// for (let i = 0; i < 10; i++) {
//     console.log(i+1);
// }

// let i=0;
// while (i<10) {
//     console.log(i+1);
//     i+=1;
// }

// let k=0;
// do {
//     if(k==5){
//         k++;
//         continue;
//     }
//     console.log(k+1);
//     k++;
// } while (k<10);

let arr=[1,23,4,3,3,23];

// arr.forEach(function(element,index,array) {
//     console.log(element,index);
// });

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

let obj={
    name:'Rohan',
    age:45,
    type:'Programmer',
    os:'ubuntu'
}

for(let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`);
}

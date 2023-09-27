console.log("TUT:60")

let a,b;
[a,b]=[34,546];
console.log(`a=${a},b=${b}`);

[a, b] = [b, a];

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);


[a,b,c,...d]= [1,2,3,4,5,6,7,8,9,0];
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d);

let obj=({a,b,c,...d} = {a:1,b:2,c:3,d:4,e:5});
// console.log(obj)
// console.log(a,b,c,d)

const fruits=['Apples','Bananas',"Grapes","Oranges"];
// [a,b,...c]=fruits;
// console.log(a,b,c)

const laptop={
    model:"macbook air",
    pYear:2018,
    color:"silver",
    price:56000,
    start:function(){
        console.log("Starting")
    }
};

const {model,pYear,color,price,start} = laptop
console.log(model,pYear,color,price,start);
start();
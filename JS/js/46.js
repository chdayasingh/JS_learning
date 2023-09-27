console.log("TUT:46")

let reg= /harry/gi;
// console.log(reg);
// console.log(reg.source);
// console.log(typeof reg)

let s="This is great code with Harry and also harry bhai"

let result=reg.exec(s);
// console.log(result);
// if(result){
//     console.log(result.index);
//     console.log(result.input);
// }
result= reg.test(s);
// console.log(result)

let result2=s.match(reg);
// console.log(result2)

let result3=s.search(reg);
// console.log(result3)

let result4=s.replace(reg,'shubham')
console.log(result4)
  
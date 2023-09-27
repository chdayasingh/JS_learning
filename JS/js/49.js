console.log("TUT:49")

let regex= /\war/;
regex= /\w+ar/;
regex= /\War/;
regex= /\W+ar/;

regex= /\d99/;
regex= /harry \d+32/;
regex= /\D8999/;
regex= /\D+8999/;

regex= /\sharry/;
regex= /\s+harry/;
regex= /\Sharry/;
regex= /\S+harry/;

regex= /harry\b/;

regex= /h(?!a)/;



let str = "i subscribed harry rqw899932352"
let result=regex.exec(str);
console.log("The result from .exec() is",result)
if(regex.test(str))
    console.log(`The string "${str}" matches the expression "${regex}"`)
else
    console.log(`The string "${str}" does not matches the expression "${regex}"`)
console.log("TUT:48")

let regex= /h[a-z]rry/;
regex= /h[a-z]r[ary]y/;
regex= /h[a-z]r[^ary]y/;
regex= /h[a-zA-z]rry/;
regex= /h[0-9]rry/;

regex= /(har){2}([0-9]r){3}y/;



let str = "harhar1r2r3ry with "
let result=regex.exec(str);
console.log("The result from .exec() is",result)
if(regex.test(str))
    console.log(`The string "${str}" matches the expression "${regex}"`)
else
    console.log(`The string "${str}" does not matches the expression "${regex}"`)

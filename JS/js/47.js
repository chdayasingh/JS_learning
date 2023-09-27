console.log("TUT:47")

let regex= /harry/;

regex= /^harry/
regex= /harry$/
regex= /h*rry/
regex= /ha?rry?/
regex= /ha\?rry/
regex= /hafarry/



let str = "ha?rry with "
let result=regex.exec(str);
console.log("The result from .exec() is",result)
if(regex.test(str))
    console.log(`The string "${str}" matches the expression "${regex}"`)
else
    console.log(`The string "${str}" does not matches the expression "${regex}"`)

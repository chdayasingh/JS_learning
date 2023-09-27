console.log('TUT:53')

function * numbersGen(){
    yield 1
    yield 2
    yield 3
    yield 4

}
function * numbersGen1(){
   let i=0;
   while(true)
   yield i++;

}

const gen= numbersGen1()
console.log(gen);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
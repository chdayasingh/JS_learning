console.log('TUT:43')

async function harry(){
    console.log('Inside harry function')
    const response = await fetch('https://api.github.com/users')
    console.log("Before response")
    const users= await response.json();
    console.log('users resolved')
    return users;
}
console.log("Before calling harry")
let a=harry();
console.log(a);
console.log("after calling harry")
a.then(data=>console.log(data))
console.log("last line of 43.js")

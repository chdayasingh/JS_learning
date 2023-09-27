let employee = {
    id: 123,
    name: 'Abc',
    salary: 123456,
    work: function(){
        console.log("Working")
    }
}

console.log(employee);

// console.log(employee.constructor)

for(let key in employee){
    if(typeof employee[key] != "function"){
        console.log(key, employee[key])
    }
}

// console.log(typeof employee.id)

const hello = () => console.log("Hello")

console.log(typeof hello)

console.log(Object.keys(employee))
console.log(Object.entries(employee))
const person = {
    name: "abc",
    age: 23,
    color: "white",
    eat: function (){
        console.log("eating");
    },
    sleep() {
        console.log("sleeping")
    }
}

// console.log(person);

for (i in person){
    console.log(i, person[i])
}

console.log(Object.keys(person)); //return array of keys
console.log(Object.entries(person)); // return array of array(key, value)

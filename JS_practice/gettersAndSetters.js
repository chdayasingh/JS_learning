const person = {
    firstName: "Daya",
    lastName: "Chaudhary",
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(str){
        const arr = str.split(" ");
        this.firstName = arr[0];
        this.lastName = arr[1];
    }
}

console.log(person);
console.log(person.fullName)
person.fullName = "Daya Singh";
console.log(person);
console.log(person.fullName)

console.log('Welcome to the TUT:30')

const proto ={
    slogan:function(){
        return `This company is the best`;
    },
    changeName:function(newName){
        this.name=newName;
    }
}

// console.log(proto);

const harry= Object.create(proto);

harry.name = 'Harry';
harry.role = 'Programmer';

// harry.changeName("Daya");
// console.log(harry);


const harry1=Object.create(proto,{
    name:{value:"Harry", writable:true},
    role:{value:"Programmer"},
})
harry1.changeName("Daya")
// console.log(harry1);
// console.log(harry1.slogan());

//Employee Constructor

function Employee(name,salary,experience){
    this.name=name;
    this.salary=salary;
    this.experience=experience;
}

Employee.prototype.slogan= function(){
    return `This company is the best.
    Regards ${this.name}`;
}

let harry3= new Employee("Harry","30000",5);
// console.log(harry3);
// console.log(harry3.slogan())


// Employee prototype Inheritance

function Programmer(name,salary,experience,language){
    Employee.call(this,name,salary,experience)
    this.language=language;
}


Programmer.prototype = Object.create(Employee.prototype);
let rohan = new Programmer("Rohan Das","50000","6",'Python');
console.log(rohan)

Programmer.prototype.constructor=Programmer;
let rohan1 = new Programmer("Rohan Das1","50000","6",'Python');


console.log(rohan1)
// console.log(rohan.slogan())




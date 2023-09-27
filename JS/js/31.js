console.log('TUT:31')

// class

class Employee{
    constructor(givenName,givenExperience,givenDivision){
        this.name=givenName;
        this.experience=givenExperience;
        this.division=givenDivision;
    }
    slogan(){
        return `I am ${this.name} and working in the best IT company`
    }
    joiningYear(){
        return 2022-this.experience;
    }
    static add(a,b){
        return a+b;
    }
}

let deepak= new Employee("Deepak",4,"Div1")
// console.log(deepak);
// console.log(deepak.slogan())
// console.log(deepak.joiningYear());
// console.log(Employee.add(4,5));

class Programmer extends Employee{
    constructor(givenName,givenExperience,givenDivision,givenLanguage,github){
        super(givenName,givenExperience,givenDivision)
        this.givenLanguage=givenLanguage;
        this.github=github;
    }
    favLanguage(){
        if(this.givenLanguage.toLowerCase()=='python'){
            return 'Python'
        }
        else{
            return 'Javascript';
        }
    }
    static multiply(a,b){
        return a*b;
    }
}

let rohan=new Programmer('Rohan',3,2,"Python","rohan123");
console.log(rohan);
console.log(rohan.favLanguage());

console.log("Welcome to the TUT:29");

//object using object literals
let obj= {
    name:'Daya',
    address:"Moon",
    channel:'Crazypeople',
    skills:function(){
        console.log(`Daya is working on his skills`)
    }
}

console.log(obj);

//objects using constructor
function Obj(givenName){
    this.name=givenName;
    this.fun=function(){
        return 1;
    }
}

let obj2= new Obj('Deepak');
console.log(obj2);

Obj.prototype.getName=function(){
    return this.name;
}

let obj3=new Obj('Ajay');
// console.log(obj3.toString());

console.log(obj3);
Obj.prototype.setName= function(newName){
    this.name=newName;
    console.log(obj3)
}

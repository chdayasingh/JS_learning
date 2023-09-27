// Mixin or Composition (substitude for inheritance)

function mixin(target, ...sources){
    Object.assign(target, ...sources);
}

const canEat = {
    eat(){
        this.hunger--;
        console.log("Eating");
    }
}

const canWalk = {
    walk(){
        this.steps++;
        console.lob("Walking");
    }
}

const canSwim = {
    swim(){
        console.log("Swiming");
    }
}

// constructor function of Person
function Person(){
    
}
mixin(Person.prototype, canEat, canWalk);

function Fish(){

}
mixin(Fish.prototype, canEat, canSwim);

const p1 = new Person();
const f1 = new Fish();

console.log(p1);
console.log(f1);
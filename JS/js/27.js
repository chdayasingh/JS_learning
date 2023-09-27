console.log("Tut:27")

let me={
    name:'daya',
    professsion:'programmer'
}
console.log(typeof me);

let car={
    name:"Maruti 800",
    topSpeed:130,
    run:function () {
        console.log(`car is running`);
    }
}

console.log(car)
console.log(car.run())

function GeneralCar(givenName,givenSpeed){
    this.name=givenName;
    this.topSpeed=givenSpeed;
    this.run=function(){
        console.log(`${this.name} is running`);
    }
    this.analyse=function(){
        if(this.name.toLowerCase().includes("mercedes")){
            console.log('Your car is the best')
        }
        else{
            console.log(`${this.name} is slower by ${250-this.topSpeed} KmPH than MERCEDES`);
        }
    }
}

let car1 = new GeneralCar('Swift',180);
let car2= new GeneralCar("Mercedes",250);
console.log(car2);
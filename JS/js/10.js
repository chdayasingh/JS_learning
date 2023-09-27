console.log("This is tut:10");

function greet(name,fromName='Your loved ones'){
    let msg=`Good Morning ${name} ~from ${fromName}`;
    return msg;
}

let name1 = 'Dinesh';
let name2 = 'Deepak';
let fName = 'Daya';

// greet(name1,fName);

let val = greet(name1,fName);
// console.log(val);

const mygreet = function (nname, frname){
    let msg=`Good Morning ${nname} ~from ${frname}`;
    return msg;
}

let value= mygreet(name1,fName);
// console.log(value)


let myObj= {
    name:'Daya',
    game: function(){
        return 'GTA';
    }
}

// console.log(myObj.game());


// scope

var i=234;
console.log(i);

function ui(n)
{
    var i=9;
    return `This is a ${n} ui`;
}

console.log(ui('Daya'),i);

if(true){
    const k =45;
}
console.log(k);
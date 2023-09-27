console.log("Tut:8");

//if else and switch

const age = '49';

if(age===19){
    console.log('Age is 19')
}
else if(age!=='29'){
    console.log('Age is 29')
}
else{
    console.log('Age is neither 19 nor 29')
}

// let vari=1;

// if(vari){
//     console.log("Vari is defined")
// }

if(typeof vari !== 'undefined'){
    console.log("vari is defined")
}
else{
    console.log("vari is undefined")
}

const age1=45;

console.log(age1==45?"Age is 45":"Age is not 45")

switch (age2=30) {
    case 19:
        console.log('Age is 19')
        break;
    case 30:
        console.log('Age is 30')
        break;
    case 45:
        console.log('Age is 45')
        break;

    default:
        console.log('Age not in from 19,30,45')
        break;
}
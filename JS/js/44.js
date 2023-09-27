console.log('TUT:44')

// let a='harry bhai';
// a=undefined;

// if(a!=undefined){
//     console.log("This is defined")
// }
// else{
//     throw new Error("This is undefined")
// }

// try{
//     aljfhaweio
// }catch(error){
//     console.log("Are you okay?",error)
// }

try{
    console.log('We are inside try block')
    functionharry();
    console.log("line after errored-line")
}catch(error){
    console.log("Are you okay?")
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}finally{
    console.log("finnaly we will run this")
}
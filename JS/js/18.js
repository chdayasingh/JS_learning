console.log('Tut:18');

let btn=document.querySelector(".btn")
btn.addEventListener('click',func1);
function func1(e) {
    console.log('Thanks',e)
    e.preventDefault();
}

// btn.addEventListener('dblclick',func2);
// function func2(e) {
//     console.log('Thanks for double clinking',e)
//     e.preventDefault();
// }
btn.addEventListener('mousedown',func3);
function func3(e) {
    console.log('Its a mousedown',e);
    e.preventDefault();
}

document.querySelector('.no').addEventListener('mouseenter',function(){
    console.log("You entered in class-no div");
});
document.querySelector('.no').addEventListener('mouseleave',function(){
    console.log("You exited class-no div");
});
// document.querySelector('.no').addEventListener('mousemove',function(e){
//     console.log("You are moving mouse in class-no div");
//     console.log(e.offsetX,e.offsetY);
//     // document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},54`
// });
document.body.addEventListener('mousemove',function(e){
    document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},54`;
});

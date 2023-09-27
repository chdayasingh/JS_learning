console.log('Welcome to tut:17');

// let heading=document.getElementById('heading')
// heading.addEventListener('click',function(e){
//     console.log('You have clicked the heading')

//     location.href='//codewithharry.com';
//     console.log(e);
//     let variable=e.target;
//     variable=variable.className;
//     variable=e.offsetY
//     variable=e.clientX;
//     variable=e.clientY
//     console.log(variable);
// })
heading.addEventListener('mouseover',function(e){
    console.log('You have over the heading')
    console.log(e);

})
heading.addEventListener('blur',function(e){
    console.log('You have left the heading')
})
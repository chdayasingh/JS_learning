console.log('Tut:14');

let element=document.getElementById("myfirst");

// element=element.className;
// element=element.childNodes;

// console.log(element);

element.style.color = 'red';
element.style.background='yellow';

// element.innerText='i changed the inner text';
// element.innerHTML='<br><b>i changed the inner text</b>';

// console.log(element.innerHTML);


let sel=document.querySelector('h1');
// console.log(sel)
sel.style.color= 'white';
sel.style.background= 'black';

let elems=document.getElementsByClassName('container');
let innerElems=(elems[0].getElementsByClassName('child'));

// console.log(innerElems[2]);

elems=document.getElementsByTagName('div');
// console.log(elems);

// for (let index = 0; index < elems.length; index++) {
//     const element = elems[index];
//     element.style.color='green';
// }

Array.from(elems).forEach(function(element){
    element.style.background='yellow';
    console.log(element);
})
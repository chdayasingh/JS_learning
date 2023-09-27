console.log('Tut:16')

let element= document.createElement('li');
element.className='childul'
element.id='createdLi'
element.setAttribute('tittle','mytittle')
//text inside li
let tNode=document.createTextNode('unordered list, creater by Daya')
element.appendChild(tNode);
//or
// element.innerHTML='<b>creater by Deepak</b>'
// console.log(element);

let ul=document.querySelector('ul.this');
// console.log(ul);

ul.appendChild(element);

let elem2= document.createElement('h3');
elem2.className='elem2';
elem2.id='elem2';

let textNode=document.createTextNode('this is created node for elem2')
elem2.appendChild(textNode);

element.replaceWith(elem2);

let myul= document.getElementById('myul');

myul.replaceChild(element,document.getElementById('lul'));


let pr=elem2.getAttribute('id');
pr=elem2.hasAttribute('clafga')
// pr=elem2.removeAttribute('id')
console.log(elem2);


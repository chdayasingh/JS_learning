const myName='daya'
const greeting='Hello!'
// console.log(greeting, myName);
// console.log(greeting + myName);
// console.log(greeting + ' ' + myName);

let html='<h1>this is heading' +
          ' <p>this is para</p>';
// console.log(html);

html=html.concat(' this',' is',' str2');
// console.log(html);
// console.log(html.length);
// console.log(html.toUpperCase());

// console.log(html);

// console.log(html[0]);
// console.log(html[10]);
// console.log(html[55]);
// console.log(html.indexOf('this'));
// console.log(html.indexOf('thisafasdf'));
// console.log(html.indexOf('<'));
// console.log(html.lastIndexOf('<'));

// console.log(html.charAt(100));
// console.log(html.endsWith('2'));
// console.log(html.startsWith('2'));
// console.log(html.includes('2'));

// console.log(html.substring(1,100));
// console.log(html.substring(-5));
// console.log(html.slice(-5));

// console.log(html.replace('this','it'));
// console.log(html.split('i'));
// console.log(html.split('is'));


let fruit1='Mango';
let fruit2='Banana';
let myHtml = `<h1>Hello "${myName}"</h1>
            <h2>Fruits</h2>
            <p>You like ${fruit1} and ${fruit2}</p>
            `

document.body.innerHTML=myHtml;

console.log(myHtml);


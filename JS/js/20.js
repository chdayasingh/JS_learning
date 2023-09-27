localStorage.setItem('Name1','Deepak');
localStorage.setItem('Name2','Deva');

// console.log(localStorage.Name2);
// console.log(typeof localStorage.Name1)

let name = localStorage.getItem('Name2')
// console.log(name)
// localStorage.clear();
// console.log(localStorage);

localStorage.removeItem('Name2')
// console.log(localStorage.Name2);

let impArray=['bhindi','patato','pyaz']
// localStorage.setItem('Sabzi',impArray);
// console.log(localStorage.getItem('Sabzi'));

localStorage.setItem('Sabzi',JSON.stringify(impArray));
let i=JSON.parse(localStorage.getItem('Sabzi'));
console.log(i);

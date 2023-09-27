console.log('This is index.js of project 7')

let screen = document.getElementById('screen');
let button = document.querySelectorAll('button');
let screenValue = "";

for (const item of button) {
    item.addEventListener('click', (e)=>{
        let buttonText = e.target.innerText;
        if (buttonText == 'X') {
            buttonText = '*';
            if (screenValue != ""){
                screenValue += buttonText;
                screen.value = screenValue;
            }
        }
        else if (buttonText == '%') {
            buttonText = '/100';
            if (screenValue != ""){
                screenValue += buttonText;
                screen.value = screenValue;
            }
        }
        else if(buttonText == '/' || buttonText == '-' || buttonText == '+'){
            if (screenValue != ""){
                screenValue += buttonText;
                screen.value = screenValue;
            }
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == 'del') {
            screenValue = screenValue.slice(0, -1);
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            if (screenValue != ""){
                screen.value = eval(screenValue);
            }        
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
        
    })
}
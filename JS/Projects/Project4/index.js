console.log("This is index.js of Project4")

let success = document.getElementById("success");
let failure = document.getElementById("failure");



const adults= document.getElementById("adults");
const childrens= document.getElementById("childrens");
const firstName= document.getElementById("firstName");
const lastName= document.getElementById("lastName");
const phone= document.getElementById("phone");
const city= document.getElementById("city");
const zip= document.getElementById("zip");

let avalid = false;
let cvalid = false;
let fvalid = false;
let lvalid = false;
let pvalid = false;
let cyvalid = false;
let zvalid = false;

adults.addEventListener('blur', ()=>{
    if(adults.value>20 || adults.value==0){
        adults.classList.add('is-invalid')
        avalid = false;
    }
    else{
        adults.classList.remove('is-invalid');
        avalid = true;
    }

})
childrens.addEventListener('blur', ()=>{
    if(childrens.value>20){
        childrens.classList.add('is-invalid')
        cvalid = false;
    }
    else{
        childrens.classList.remove('is-invalid');
        cvalid = true;
    }
})
firstName.addEventListener('blur', ()=>{
    let reg = /^[a-zA-Z]{3,10}\s?[a-zA-Z]{0,10}$/
    let str = firstName.value;
    if(reg.test(str)){
        firstName.classList.remove('is-invalid');
        fvalid = true;
    }
    else{
        firstName.classList.add('is-invalid');
        fvalid = false;
    }
})
lastName.addEventListener('blur', ()=>{
    let reg = /^[a-zA-Z]{3,20}$/
    let str = lastName.value;
    if(reg.test(str)){
        lastName.classList.remove('is-invalid');
        lvalid = true;
    }
    else{
        lastName.classList.add('is-invalid');
        lvalid = false;
    }
})

phone.addEventListener('blur', ()=>{
    let reg = /^[6-9][0-9]{9}$/
    let str = phone.value;
    if(reg.test(str)){
        phone.classList.remove('is-invalid');
        pvalid = true;
    }
    else{
        phone.classList.add('is-invalid');
        pvalid = false;
    }
})

city.addEventListener('blur', ()=>{
    let reg = /^[a-zA-Z]{3,10}\s?[a-zA-Z]{0,10}$/
    let str = city.value;
    if(reg.test(str)){
        city.classList.remove('is-invalid');
        cyvalid = true;
    }
    else{
        city.classList.add('is-invalid');
        cyvalid = false;
    }
})
zip.addEventListener('blur', ()=>{
    let reg = /^[1-9][0-9]{5}$/
    let str = zip.value;
    if(reg.test(str)){
        zip.classList.remove('is-invalid');
        zvalid = true;
    }
    else{
        zip.classList.add('is-invalid');
        zvalid = false;
    }
})

let submit = document.getElementById("submit")
submit.addEventListener("click", (e)=>{
    e.preventDefault();
    
    if(avalid && cvalid && fvalid && lvalid && pvalid && cyvalid && zvalid){
        success.classList.add("show")
        failure.classList.remove("show")
        
        setTimeout(() => {
            success.classList.remove("show")
        }, 3000);

    }
    else{
        success.classList.remove("show")
        failure.classList.add("show")
        setTimeout(() => {
            failure.classList.remove("show")
        }, 3000);
    }
})
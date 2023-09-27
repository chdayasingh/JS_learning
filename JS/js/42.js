console.log("TUT:42")

let myBtn= document.getElementById("myBtn")
let myBtn2= document.getElementById("myBtn2")
let content= document.getElementById("content")

function getData(){
    console.log("Started getData")
    url='https://api.github.com/users';
    fetch(url).then((response)=>{
        console.log("Inside first then")
        return response.json()
    }).then((data)=>{
        console.log("Inside second then")
        // console.log(data);
        str=" "
        data.forEach(element => {
            str+=`<li>${element.login}</li>`
        });
        content.innerHTML=str;
    })
}
function postData(){
    console.log("Started postData")
    url='http://dummy.restapiexample.com/api/v1/create';
    data='{"name":"tes354254st","salary":"123","age":"23"}'
    params= {
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }
    fetch(url,params).then(response=>response.json()).then(data=>console.log(data))
}

console.log("Before running getData")
// getData()
postData()
console.log("after running getData")

myBtn.addEventListener("click",getData)


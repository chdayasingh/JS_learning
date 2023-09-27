let fetchBtn = document.getElementById("fetchBtn");
// console.log(fetchBtn)
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
    console.log('You have clicked the fetchBtn');
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);


    xhr.onprogress = function () {
        console.log('On progress');
    }

    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for (key in obj.data) {
                str += `<li>${obj.data[key].employee_name} </li>`;
            }
            list.innerHTML = str;
        }
        else {
            console.log("Some error occured")
        }
    }
    // xhr.onreadystatechange= function(){
    // console.log("ready state is",xhr.readyState);
    //     // console.log(this.responseText);
    // }
    xhr.send();
    console.log("We are done fetching employees!");
}

let populate = document.getElementById("populate");
populate.addEventListener('click', popHandler);

function popHandler() {
    console.log('You have clicked the Populate button');
    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader("Content-type", "application/json");
    xhr.onprogress = function () {
        console.log('On progress');
    }
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
        }
        else {
            console.error("File not fount")
        }
    }
    params = `{"name":"testtyty34srad545","salary":"123","age":"23"}`;
    xhr.send(params)
    console.log("We are done!");
}